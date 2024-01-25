"use client";

import React, { useEffect, useState } from "react";
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
import sync from "@ui5/webcomponents-icons/dist/download-from-cloud.js";

const SideNavbar = () => {
	const [role, setRole] = useState("user");
	const router = useRouter();
	const handleOnNavigate = (path: string) => {
		router.push(path);
	};

	useEffect(() => {
		if (typeof window === "undefined") {
			return;
		}

		try {
			const storedUser = window.localStorage.getItem("user");
			if (storedUser) {
				const currentUser = JSON.parse(storedUser);
				const userRole: string = currentUser.role;
				setRole(userRole);
			}
		} catch (error) {
			console.error("Error parsing user data:", error);
		}
	}, []);

	const isAdmin = role === "admin";

	return (
		<div className="sticky top-3 left-0 ml-2">
			<SideNavigation className="h-[92vh]">
				{!isAdmin && (
					<SideNavigationItem
						icon={review}
						text="UAR Review"
						onClick={() => {
							handleOnNavigate("/uar-review");
						}}
					/>
				)}
				{isAdmin && (
					<>
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
							text="Data Ingestion">
							<SideNavigationSubItem
								text="Data Upload"
								icon={upload}
								onClick={() => {
									handleOnNavigate("/data-ingestion/data-upload");
								}}
							/>

							<SideNavigationSubItem
								text="Data Sync"
								icon={sync}
								onClick={() => {
									handleOnNavigate("/data-ingestion/data-sync");
								}}
							/>
						</SideNavigationItem>

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
					</>
				)}
			</SideNavigation>
		</div>
	);
};

export default SideNavbar;
