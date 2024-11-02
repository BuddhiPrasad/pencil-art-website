// src/app/(admin)/layout.tsx

import AdminFooter from "./(all-components)/admin-footer";
import { AdminHeader } from "./(all-components)/admin-header";
import { AdminSidebar } from "./(all-components)/admin-side-bar";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col h-screen">
      {/* Header */}
      <AdminHeader />

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar - consider making it collapsible on smaller screens */}
        <div className="w-64 h-full">
          <AdminSidebar />
        </div>

        {/* Main Content Area with independent scrolling */}
        <main className="flex-1 overflow-y-auto p-6 bg-gray-50" role="main">
          {children}
        </main>
      </div>

      {/* Footer */}
      <AdminFooter />
    </div>
  );
}
