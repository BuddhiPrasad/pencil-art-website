import Link from "next/link";
import { Globe } from "lucide-react";

export function AdminHeader() {
  return (
    <header className="sticky top-0 z-50 w-full px-4 lg:px-6 h-14 items-center border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 flex justify-between">
      {/* Logo Section */}
      <Link className="flex items-center" href="/">
        <Globe className="h-6 w-6 mr-2" />
        <span className="font-bold text-base sm:text-lg">TravelTrix</span>
      </Link>

      {/* Navigation Links */}
      <nav className="flex items-center gap-2 sm:gap-4">
        <Link
          className="text-xs sm:text-sm font-medium hover:underline underline-offset-4"
          href="/admin"
        >
          Log out
        </Link>
      </nav>
    </header>
  );
}
