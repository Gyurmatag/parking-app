import { CalendarDays, Car, Clock, User, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link"

// Mock data for bookings
const upcomingBookings = [
  {
    id: "1",
    slotId: "A1",
    date: "May 20, 2025",
    time: "08:00 AM - 10:00 AM",
  },
  {
    id: "2",
    slotId: "B3",
    date: "May 22, 2025",
    time: "02:00 PM - 04:00 PM",
  },
]

const pastBookings = [
  {
    id: "3",
    slotId: "C2",
    date: "May 10, 2025",
    time: "10:00 AM - 12:00 PM",
  },
  {
    id: "4",
    slotId: "A4",
    date: "May 5, 2025",
    time: "04:00 PM - 06:00 PM",
  },
]

export default function BookingsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Car className="h-6 w-6" />
            <span className="text-xl font-bold">Parking App</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="/" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
              Dashboard
            </Link>
            <Link href="/bookings" className="text-sm font-medium transition-colors hover:text-primary">
              My Bookings
            </Link>
            <Link
              href="/profile"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              Profile
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Button variant="outline" size="sm" asChild>
              <Link href="/profile">
                <User className="mr-2 h-4 w-4" />
                John Doe
              </Link>
            </Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="container py-10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
            <div>
              <h1 className="text-3xl font-bold tracking-tight">My Bookings</h1>
              <p className="text-muted-foreground mt-1">Manage your parking slot bookings.</p>
            </div>
            <Button size="lg" asChild>
              <Link href="/">
                <CalendarDays className="mr-2 h-5 w-5" />
                Book a New Slot
              </Link>
            </Button>
          </div>

          <Tabs defaultValue="upcoming" className="w-full">
            <TabsList className="mb-6">
              <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
              <TabsTrigger value="past">Past</TabsTrigger>
            </TabsList>

            <TabsContent value="upcoming" className="mt-0">
              {upcomingBookings.length > 0 ? (
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {upcomingBookings.map((booking) => (
                    <Card key={booking.id}>
                      <CardHeader className="pb-2">
                        <div className="flex justify-between items-start">
                          <CardTitle className="text-xl">Slot {booking.slotId}</CardTitle>
                          <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                            <Car className="h-4 w-4" />
                          </div>
                        </div>
                        <CardDescription>{booking.date}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-2">
                          <div className="flex items-center gap-2 text-sm">
                            <Clock className="h-4 w-4 text-muted-foreground" />
                            <span>{booking.time}</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm">
                            <span className="text-muted-foreground">Location:</span>
                            <span>Underground Level 1</span>
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter className="flex justify-between">
                        <Button variant="outline" size="sm">
                          Reschedule
                        </Button>
                        <Button variant="destructive" size="sm">
                          <X className="mr-2 h-4 w-4" />
                          Cancel
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <h3 className="text-lg font-medium">No upcoming bookings</h3>
                  <p className="text-muted-foreground mt-1">Book a parking slot to see it here.</p>
                  <Button className="mt-4" asChild>
                    <Link href="/">Book Now</Link>
                  </Button>
                </div>
              )}
            </TabsContent>

            <TabsContent value="past" className="mt-0">
              {pastBookings.length > 0 ? (
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {pastBookings.map((booking) => (
                    <Card key={booking.id} className="opacity-75">
                      <CardHeader className="pb-2">
                        <div className="flex justify-between items-start">
                          <CardTitle className="text-xl">Slot {booking.slotId}</CardTitle>
                          <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center text-muted-foreground">
                            <Car className="h-4 w-4" />
                          </div>
                        </div>
                        <CardDescription>{booking.date}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-2">
                          <div className="flex items-center gap-2 text-sm">
                            <Clock className="h-4 w-4 text-muted-foreground" />
                            <span>{booking.time}</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm">
                            <span className="text-muted-foreground">Location:</span>
                            <span>Underground Level 1</span>
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter>
                        <Button variant="outline" size="sm">
                          Book Again
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <h3 className="text-lg font-medium">No past bookings</h3>
                  <p className="text-muted-foreground mt-1">Your booking history will appear here.</p>
                </div>
              )}
            </TabsContent>
          </Tabs>
        </section>
      </main>
      <footer className="border-t py-6">
        <div className="container flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Your Company. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm" asChild>
              <Link href="/help">Help</Link>
            </Button>
            <Button variant="ghost" size="sm" asChild>
              <Link href="/contact">Contact</Link>
            </Button>
          </div>
        </div>
      </footer>
    </div>
  )
}
