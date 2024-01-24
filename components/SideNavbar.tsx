"use client";

import React from "react";
import { useRouter } from "next/navigation";

import {
	SideNavigation,
	SideNavigationItem,
	SideNavigationSubItem,
} from "@ui5/webcomponents-react";
import speed from "@ui5/webcomponents-icons/dist/performance.js";
import review from "@ui5/webcomponents-icons/dist/manager-insight.js";
import upload from "@ui5/webcomponents-icons/dist/upload-to-cloud.js";
import wrench from "@ui5/webcomponents-icons/dist/wrench.js";
import equipment from "@ui5/webcomponents-icons/dist/add-equipment.js";
import employee from "@ui5/webcomponents-icons/dist/add-employee.js";

const SideNavbar = () => {
	const handleOnNavigate = (path: string) => {
		router.push(path);
	};

	const router = useRouter();

	return (
		<div className="sticky top-3 left-0">
			<SideNavigation className="h-[92vh]">
				<SideNavigationItem
					icon={speed}
					text="Dashboard"
					onClick={() => {
						handleOnNavigate("/dashboard");
					}}
				/>

				<SideNavigationItem
					icon={review}
					text="UAR Review"
					onClick={() => {
						handleOnNavigate("/uar-review");
					}}
				/>

				<SideNavigationItem
					icon={upload}
					text="Data Upload"
					onClick={() => {
						handleOnNavigate("/data-upload");
					}}></SideNavigationItem>

				<SideNavigationItem
					icon={wrench}
					text="Configration">
					<SideNavigationSubItem
						text="Category Master"
						icon={equipment}
						onClick={() => {
							handleOnNavigate("/configuration/category-master");
						}}
					/>
					<SideNavigationSubItem
						text="Map Role & Category"
						icon={employee}
						onClick={() => {
							handleOnNavigate("/configuration/map-role-category");
						}}
					/>
				</SideNavigationItem>
			</SideNavigation>
		</div>
	);
};

export default SideNavbar;
