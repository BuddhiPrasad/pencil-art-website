import Link from "next/link";
import { LayoutDashboard, FileText, Users, Settings } from "lucide-react";

export function AdminSidebar() {
  const adminLinks = [
    {
      href: "/admin/dashboard",
      label: "Dashboard",
      icon: <LayoutDashboard className="mr-2" />,
    },
    {
      href: "/admin/inquiries",
      label: "All Inquiries",
      icon: <FileText className="mr-2" />,
    },
    {
      href: "/admin/orders",
      label: "Customer Orders",
      icon: <Users className="mr-2" />,
    },
    {
      href: "/admin/settings",
      label: "System Settings",
      icon: <Settings className="mr-2" />,
    },
  ];

  return (
    <aside className="w-64 bg-white border-r h-screen fixed left-0 top-0 pt-20">
      <nav className="px-4 py-6">
        {adminLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="flex items-center py-3 px-4 text-gray-700 
              hover:bg-blue-50 hover:text-blue-600 rounded-lg 
              transition-colors duration-200"
          >
            {link.icon}
            {link.label}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
