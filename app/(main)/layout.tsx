import React from "react";
import NavBar from "@/components/Nav";
import SideNavbar from "@/components/SideNavbar";
import { ThemeProvider } from "@ui5/webcomponents-react";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className="">
			<div className="mb-1 sticky top-1 z-[999999]">
				<NavBar />
			</div>
			<div className="flex">
				<div className="sticky left-0 h-full top-[3.46rem]">
					<SideNavbar />
				</div>
				<div className="bg-gray-100 w-full h-[92vh] rounded-xl mr-1 overflow-y-auto">
					<ThemeProvider>{children}</ThemeProvider>
				</div>
			</div>
		</div>
	);
};

export default MainLayout;
