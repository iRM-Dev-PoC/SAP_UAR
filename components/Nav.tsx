"use client";

import React from "react";
import { ShellBar, Avatar } from "@ui5/webcomponents-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

import img from "@/public/irm.png";
import logout from "@/public/logout.png";

const NavBar = () => {
	const router = useRouter();

	const handleLogOut = () => {
		window.localStorage.clear();
		router.push("/sign-in");
	};

	return (
		<div className="mb-2 ml-2 mr-2 rounded-xl">
			<ShellBar
				// style={{ backgroundColor: "#f0f0f0" }}
				className="rounded-xl"
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
