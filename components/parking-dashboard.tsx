"use client"

import { useState } from "react"
import { format, startOfToday } from "date-fns"
import { CalendarIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BookingModal } from "@/components/booking-modal"
import { Car } from "lucide-react"

// Mock data for parking slots
const parkingSlots = [
  { id: "A1", label: "A1", available: true },
  { id: "A2", label: "A2", available: false },
  { id: "A3", label: "A3", available: true },
  { id: "A4", label: "A4", available: true },
  { id: "B1", label: "B1", available: true },
  { id: "B2", label: "B2", available: false },
  { id: "B3", label: "B3", available: true },
  { id: "B4", label: "B4", available: false },
  { id: "C1", label: "C1", available: true },
  { id: "C2", label: "C2", available: true },
  { id: "C3", label: "C3", available: false },
  { id: "C4", label: "C4", available: true },
]

export function ParkingDashboard() {
  const [date, setDate] = useState<Date>(startOfToday())
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false)
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null)

  const handleSlotSelect = (slotId: string) => {
    setSelectedSlot(slotId)
    setIsBookingModalOpen(true)
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
        <Tabs defaultValue="grid" className="w-full">
          <div className="flex flex-col md:flex-row gap-4 md:items-center justify-between mb-6">
            <TabsList>
              <TabsTrigger value="grid">Grid View</TabsTrigger>
              <TabsTrigger value="list">List View</TabsTrigger>
            </TabsList>

            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline" className="justify-start text-left font-normal w-[240px]">
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {date ? format(date, "PPP") : <span>Pick a date</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={(date) => date && setDate(date)}
                  initialFocus
                  disabled={(date) => date < startOfToday()}
                />
              </PopoverContent>
            </Popover>
          </div>

          <TabsContent value="grid" className="mt-0">
            <Card>
              <CardHeader>
                <CardTitle>Available Parking Slots</CardTitle>
                <CardDescription>For {format(date, "EEEE, MMMM do, yyyy")}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="relative bg-gray-800 p-6 rounded-lg overflow-hidden">
                  {/* Entrance and Exit */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-yellow-500 text-black font-bold px-6 py-1 rounded-b-lg">
                    ENTRANCE/EXIT
                  </div>

                  {/* Driving lanes */}
                  <div className="h-12 w-full bg-gray-700 mb-8"></div>

                  {/* Parking area */}
                  <div className="grid grid-cols-4 gap-4 mb-8">
                    {/* Row A */}
                    <div className="col-span-4 flex justify-between mb-2">
                      <div className="text-gray-400 font-bold">A</div>
                      <div className="flex-1 mx-4 border-b-2 border-dashed border-gray-600"></div>
                      <div className="text-gray-400 font-bold">A</div>
                    </div>

                    {parkingSlots.slice(0, 4).map((slot) => (
                      <div
                        key={slot.id}
                        className={cn(
                          "relative h-24 border-2 rounded-md flex flex-col items-center justify-center transition-colors",
                          slot.available
                            ? "border-green-500 bg-green-900/20 hover:bg-green-900/30 cursor-pointer"
                            : "border-red-500 bg-red-900/20 opacity-60",
                        )}
                        onClick={() => slot.available && handleSlotSelect(slot.id)}
                      >
                        <div className="absolute top-0 left-0 w-full h-2 bg-gray-600"></div>
                        <Car className={cn("h-8 w-8 mb-1", slot.available ? "text-green-400" : "text-red-400")} />
                        <span className="text-xl font-bold text-white">{slot.label}</span>
                        {!slot.available && (
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="bg-red-900/40 w-full h-full flex items-center justify-center">
                              <span className="font-bold text-white px-2 py-1 rounded">OCCUPIED</span>
                            </div>
                          </div>
                        )}
                      </div>
                    ))}

                    {/* Pillar between sections */}
                    <div className="col-span-4 h-8 flex justify-center items-center">
                      <div className="w-16 h-8 bg-gray-600 rounded-md"></div>
                    </div>

                    {/* Row B */}
                    <div className="col-span-4 flex justify-between mb-2 mt-4">
                      <div className="text-gray-400 font-bold">B</div>
                      <div className="flex-1 mx-4 border-b-2 border-dashed border-gray-600"></div>
                      <div className="text-gray-400 font-bold">B</div>
                    </div>

                    {parkingSlots.slice(4, 8).map((slot) => (
                      <div
                        key={slot.id}
                        className={cn(
                          "relative h-24 border-2 rounded-md flex flex-col items-center justify-center transition-colors",
                          slot.available
                            ? "border-green-500 bg-green-900/20 hover:bg-green-900/30 cursor-pointer"
                            : "border-red-500 bg-red-900/20 opacity-60",
                        )}
                        onClick={() => slot.available && handleSlotSelect(slot.id)}
                      >
                        <div className="absolute top-0 left-0 w-full h-2 bg-gray-600"></div>
                        <Car className={cn("h-8 w-8 mb-1", slot.available ? "text-green-400" : "text-red-400")} />
                        <span className="text-xl font-bold text-white">{slot.label}</span>
                        {!slot.available && (
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="bg-red-900/40 w-full h-full flex items-center justify-center">
                              <span className="font-bold text-white px-2 py-1 rounded">OCCUPIED</span>
                            </div>
                          </div>
                        )}
                      </div>
                    ))}

                    {/* Pillar between sections */}
                    <div className="col-span-4 h-8 flex justify-center items-center">
                      <div className="w-16 h-8 bg-gray-600 rounded-md"></div>
                    </div>

                    {/* Row C */}
                    <div className="col-span-4 flex justify-between mb-2 mt-4">
                      <div className="text-gray-400 font-bold">C</div>
                      <div className="flex-1 mx-4 border-b-2 border-dashed border-gray-600"></div>
                      <div className="text-gray-400 font-bold">C</div>
                    </div>

                    {parkingSlots.slice(8, 12).map((slot) => (
                      <div
                        key={slot.id}
                        className={cn(
                          "relative h-24 border-2 rounded-md flex flex-col items-center justify-center transition-colors",
                          slot.available
                            ? "border-green-500 bg-green-900/20 hover:bg-green-900/30 cursor-pointer"
                            : "border-red-500 bg-red-900/20 opacity-60",
                        )}
                        onClick={() => slot.available && handleSlotSelect(slot.id)}
                      >
                        <div className="absolute top-0 left-0 w-full h-2 bg-gray-600"></div>
                        <Car className={cn("h-8 w-8 mb-1", slot.available ? "text-green-400" : "text-red-400")} />
                        <span className="text-xl font-bold text-white">{slot.label}</span>
                        {!slot.available && (
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="bg-red-900/40 w-full h-full flex items-center justify-center">
                              <span className="font-bold text-white px-2 py-1 rounded">OCCUPIED</span>
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>

                  {/* Bottom driving lane */}
                  <div className="h-12 w-full bg-gray-700"></div>
                </div>

                <div className="flex items-center gap-4 mt-4 text-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    <span>Available</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <span>Occupied</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="list" className="mt-0">
            <Card>
              <CardHeader>
                <CardTitle>Available Parking Slots</CardTitle>
                <CardDescription>For {format(date, "EEEE, MMMM do, yyyy")}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {parkingSlots.map((slot) => (
                    <div
                      key={slot.id}
                      className={cn(
                        "flex items-center justify-between p-3 rounded-lg",
                        slot.available
                          ? "border border-green-500 bg-green-900/10"
                          : "border border-red-500 bg-red-900/10 opacity-75",
                      )}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={cn(
                            "w-10 h-10 rounded-full flex items-center justify-center",
                            slot.available ? "bg-green-900/30 text-green-400" : "bg-red-900/30 text-red-400",
                          )}
                        >
                          <Car className="h-5 w-5" />
                        </div>
                        <div>
                          <p className="font-medium">Parking Slot {slot.label}</p>
                          <p className="text-sm text-muted-foreground">Underground Level 1</p>
                        </div>
                      </div>
                      <Button
                        variant={slot.available ? "default" : "secondary"}
                        size="sm"
                        disabled={!slot.available}
                        onClick={() => slot.available && handleSlotSelect(slot.id)}
                        className={slot.available ? "bg-green-600 hover:bg-green-700" : ""}
                      >
                        {slot.available ? "Book Now" : "Occupied"}
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>

      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
        slotId={selectedSlot}
        date={date}
      />
    </div>
  )
}
