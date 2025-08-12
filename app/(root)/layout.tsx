import MobileNav from "@/components/shared/MobileNav";
import Navbar from "@/components/shared/Navbar";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main>
      <Navbar />
      <MobileNav />
      <section>{children}</section>
    </main>
  );
};

export default layout;
