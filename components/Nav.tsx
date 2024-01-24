"use client";

import React from "react";
import { ShellBar, Avatar } from "@ui5/webcomponents-react";
import Image from "next/image";

import img from "@/public/irm.png";
import avater from "@/public/user.png";

const NavBar = () => {
	return (
		<div>
			<ShellBar
				onProfileClick={() => {
					console.log("Profile clicked");
				}}
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
					<Avatar
						onClick={() => {
							console.log("Avatar clicked");
						}}>
						<Image
							src={avater}
							alt="Person"
							height={32}
							width={32}
						/>
					</Avatar>
				}
				showNotifications></ShellBar>
		</div>
	);
};

export default NavBar;
