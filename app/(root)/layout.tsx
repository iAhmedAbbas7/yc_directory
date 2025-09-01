// <== IMPORTS ==>
import React from "react";
import Navbar from "../components/Navbar";

const Layout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <main className="font-work-sans">
      {/* NAVBAR */}
      <Navbar />
      {/* PAGE CONTENT */}
      {children}
    </main>
  );
};

export default Layout;
