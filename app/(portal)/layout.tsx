// src/app/(admin)/layout.tsx

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      {/* Main Content Area with independent scrolling */}
      <div>{children}</div>
    </div>
  );
}
