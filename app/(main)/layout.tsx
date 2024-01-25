"use client";
import React, { useRef, useState } from "react";
import NavBar from "@/components/Nav";
import SideNavbar from "@/components/SideNavbar";
import { ThemeProvider } from "@ui5/webcomponents-react";
import "@ui5/webcomponents-icons/dist/AllIcons.js";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  const [isCollapseSidenav, setIsCollapse] = useState(false);

  return (
    <div className="">
      <div className="mb-1 sticky top-1 z-[999999]">
        <NavBar callback={setIsCollapse} />
      </div>
      <div className="flex">
        <div className="sticky left-0 h-full top-[3.46rem]">
          <SideNavbar isCollapse={isCollapseSidenav} />
        </div>
        <div className="w-full h-[92vh] rounded-xl mr-1 overflow-y-auto bg-slate-200">
          <ThemeProvider>{children}</ThemeProvider>
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
