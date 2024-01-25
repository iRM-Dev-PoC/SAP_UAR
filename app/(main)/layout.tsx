import React from "react";
import NavBar from "@/components/Nav";
import SideNavbar from "@/components/SideNavbar";
import { ThemeProvider } from "@ui5/webcomponents-react";
import "@ui5/webcomponents-icons/dist/AllIcons.js";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className="bg-gray-400">
			<div className="mb-1 mr-2 rounded-xl sticky top-1 z-[999999]">
				<NavBar />
			</div>
			<div className="flex">
				<div className="sticky left-0 h-full top-[3.46rem]">
					<SideNavbar />
				</div>
				<div className="w-full h-[92vh] rounded-xl mr-4 ml-2 mb-5 overflow-y-auto bg-slate-100">
					<ThemeProvider>{children}</ThemeProvider>
				</div>
			</div>
		</div>
	);
};

export default MainLayout;
