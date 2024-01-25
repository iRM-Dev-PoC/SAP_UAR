"use client";

import { Bell, MenuIcon, Power, X } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import img from "@/public/irm.png";
import React, { useState } from "react";

type navbarprop = { callback: any };
const NavigationBar = ({ callback }: navbarprop) => {
	const [isCollapseSidebar, setCollapseSidebar] = useState(true);
	const router = useRouter();

	const handleLogOut = () => {
		window.localStorage.clear();
		router.push("/sign-in");
	};

	const handleNavMenuButtonclick = () => {
		setCollapseSidebar((isCollapseSidebar) => !isCollapseSidebar);
		callback(isCollapseSidebar);
	};

	return (
		<nav className="flex items-center justify-between mr-2 bg-white ml-1 rounded-md mt-1">
			<div>
				<ul className="flex pt-3 pb-3 pr-3 items-center gap-3">
					<li
						onClick={handleNavMenuButtonclick}
						className="pl-1 pr-3 ml-2 mr-2 transition-all">
						{isCollapseSidebar ? (
							<X className="h-6 w-6 text-black cursor-pointer shadow-sm" />
						) : (
							<MenuIcon className="h-6 w-6 text-black cursor-pointer shadow-sm" />
						)}
					</li>
					<li>
						<Image
							alt="IRM Logo"
							src={img}
							height={32}
							width={32}
							onClick={() => router.push("/dashboard")}
						/>
					</li>
				</ul>
			</div>
			<div>
				<ul className="flex p-3 items-center gap-3 pl-3">
					<li className="pr-3 ml-2 mr-2">
						<span className="block absolute z-[999] bg-red-600 rounded-full text-center text-black top-[0.85rem] right-[6.28rem] w-6 text-xs ">
							10
						</span>
						<Bell className="h-6 w-6 text-black cursor-pointer shadow-sm relative" />
					</li>
					<li className="pr-3 ml-2 mr-2">
						<Power
							className="h-6 w-6 text-black cursor-pointer shadow-sm"
							onClick={handleLogOut}
						/>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default NavigationBar;
