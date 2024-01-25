"use client";

import React, { useState } from "react";
import { LucideMenu } from "lucide-react";
import logout from "@/public/logout.png";
import img from "@/public/irm.png";
import { useRouter } from "next/navigation";
import { ShellBar, Button, Avatar } from "@ui5/webcomponents-react";
import Image from "next/image";

type navbarprop = { callback: any };
const NavBar = ({ callback }: navbarprop) => {
	const router = useRouter();

	const handleLogOut = () => {
		window.localStorage.clear();
		router.push("/sign-in");
	};

	const [isCollapseSidebar, setCollapseSidebar] = useState(true);
	const handleNavMenuButtonclick = () => {
		setCollapseSidebar((isCollapseSidebar) => !isCollapseSidebar);
		callback(isCollapseSidebar);
	};

	return (
		<div className="mb-2 ml-2 mr-2 rounded-xl">
			<ShellBar
				startButton={
					<Button onClick={handleNavMenuButtonclick}>
						<LucideMenu />
					</Button>
				}
				onProfileClick={handleLogOut}
				onLogoClick={() => router.push("/dashboard")}
				logo={
					<Image
						alt="IRM Logo"
						src={img}
						height={32}
						width={32}
					/>
				}
				notificationsCount="10"
				profile={
					<Avatar>
						<Image
							src={logout}
							alt="Person"
							height={32}
							width={32}
						/>
					</Avatar>
				}
				showNotifications
				style={{
					borderRadius: "5px !important",
				}}
				suppressHydrationWarning></ShellBar>
		</div>
	);
};

export default NavBar;
