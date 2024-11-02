import React from "react";

const AdminFooter = () => {
  return (
    <footer className="sticky bottom-0 z-50 w-full px-4 lg:px-6 py-2 h-auto items-center border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 flex">
      <div className="container mx-auto flex flex-col items-center justify-center gap-2 md:gap-4 md:h-auto md:flex-row">
        <p className="text-center text-xs md:text-sm leading-relaxed text-muted-foreground md:text-left">
          Built with ❤️ by BuddhiPrasad. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default AdminFooter;
