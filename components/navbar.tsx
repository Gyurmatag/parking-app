import Link from "next/link";
import { Car, User } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Navbar() {
	return (
		<header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
			<div className="container mx-auto flex h-16 items-center justify-between">
				<Link href="/" className="flex items-center gap-2">
					<Car className="h-6 w-6" />
					<span className="text-xl font-bold">Parking App</span>
				</Link>
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
	);
}