import Link from "next/link";
import { CalendarDays, Car, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ParkingDashboard } from "@/components/parking-dashboard";

export default function Home() {
	return (
		<div className="flex min-h-screen flex-col">
			<header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
				<div className="container mx-auto flex h-16 items-center justify-between">
					<div className="flex items-center gap-2">
						<Car className="h-6 w-6" />
						<span className="text-xl font-bold">Parking App</span>
					</div>
					<nav className="hidden md:flex gap-6">
						<Link
							href="/"
							className="text-sm font-medium transition-colors hover:text-primary"
						>
							Dashboard
						</Link>
						<Link
							href="/bookings"
							className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
						>
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
				<section className="container mx-auto py-10">
					<div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
						<div>
							<h1 className="text-3xl font-bold tracking-tight">
								Welcome back, John
							</h1>
							<p className="text-muted-foreground mt-1">
								Book your parking slot in advance and save time.
							</p>
						</div>
						<Button size="lg">
							<CalendarDays className="mr-2 h-5 w-5" />
							Book a Slot
						</Button>
					</div>

					<ParkingDashboard />
				</section>
			</main>
			<footer className="border-t py-6">
				<div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
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
	);
}
