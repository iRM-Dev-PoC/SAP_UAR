import React from "react";
import NavBar from "@/components/Nav";
import SideNavbar from "@/components/SideNavbar";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<>
			<div className=" mb-1">
				<NavBar />
			</div>
			<div className="flex">
				<div className=" mr-2">
					<SideNavbar />
				</div>
				<div className="bg-gray-100 w-full h-[92vh] rounded-xl mr-1">
					{children}
				</div>
			</div>
		</>
	);
};

export default MainLayout;
