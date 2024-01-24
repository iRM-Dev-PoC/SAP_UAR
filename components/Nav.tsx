"use client";

import React, { useState } from "react";
import { Popover, Button } from "@ui5/webcomponents-react";
import { ShellBar, Avatar } from "@ui5/webcomponents-react";
import Image from "next/image";

import img from "@/public/irm.png";
import avater from "@/public/user.png";

const NavBar = () => {
	const [isPopoverOpen, setIsPopoverOpen] = useState(false);

	const handlePopoverClick = () => {
		setIsPopoverOpen((prevState) => !prevState);
	};
	return (
		<div>
			<ShellBar
				onProfileClick={handlePopoverClick}
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
					<Avatar id="openPopoverBtn">
						<Image
							src={avater}
							alt="Person"
							height={32}
							width={32}
						/>
					</Avatar>
				}
				showNotifications></ShellBar>

			<div>
				<Popover
					open={isPopoverOpen}
					placementType="Bottom"
					onBeforeClose={() => setIsPopoverOpen(false)}
					className="footerPartNoPadding"
					headerText="Are you sure you want to logout?"
					horizontalAlign="Center"
					opener="openPopoverBtn"
					verticalAlign="Center">
					<div className="flex justify-center items-center gap-x-3">
						<button className="bg-red-500 text-white text-sm px-5 py-3 rounded-full outline-none hover:scale-110 transition border border-black/10">
							Logout
						</button>

						<button className="bg-slate-400 text-white text-sm px-5 py-3 rounded-full outline-none hover:scale-110 transition border border-black/10">
							Cancel
						</button>
					</div>
				</Popover>
			</div>
		</div>
	);
};

export default NavBar;
