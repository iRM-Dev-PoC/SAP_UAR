"use client";
import React, { useState } from "react";
import SideNavbar from "@/components/SideNavbar";
import { ThemeProvider } from "@ui5/webcomponents-react";
import "@ui5/webcomponents-icons/dist/AllIcons.js";
import NavigationBar from "@/components/NavigationBar";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
	const [isCollapseSidenav, setIsCollapse] = useState(false);

	return (
		<div className="bg-gray-200">
			<div className="mb-1 mr-2 rounded-xl sticky top-1 z-[999999]">
				<NavigationBar callback={setIsCollapse} />
			</div>
			<div className="flex">
				<div className="sticky  pl-1 left-0 h-full top-[3.46rem]">
					<SideNavbar isCollapse={isCollapseSidenav} />
				</div>
				<div className="w-full h-[92vh] rounded-xl mr-4 ml-2 mb-5 overflow-y-auto bg-slate-100">
					<ThemeProvider>{children}</ThemeProvider>
				</div>
			</div>
		</div>
	);
};

export default MainLayout;
