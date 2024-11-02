import Link from "next/link";
import { Globe } from "lucide-react";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="px-4 lg:px-6 h-14 flex items-center justify-center">
        <Link className="flex items-center justify-center" href="/">
          <Globe className="h-6 w-6 mr-2" />
          <span className="font-bold text-center">TravelTrix</span>
        </Link>
      </header>
      <main className="flex-1 flex items-center justify-center p-4">
        <div className="w-full max-w-md space-y-8">{children}</div>
      </main>
      <footer className="py-6 w-full shrink-0 px-4 md:px-6 border-t">
        <p className="text-xs text-center text-gray-500 dark:text-gray-400">
          © 2024 TravelTrix. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
