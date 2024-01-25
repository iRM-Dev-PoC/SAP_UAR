"use client";

import React, { useEffect, useState } from "react";

import { dasdhboardCardData } from "@/utils/data";
import CustomCard from "./CustomCard";

const DashBoard = () => {
	const [userName, setUserName] = useState("");

	useEffect(() => {
		if (typeof window === "undefined") {
			return;
		}

		try {
			const storedUser = window.localStorage.getItem("user");
			if (storedUser) {
				const currentUser = JSON.parse(storedUser);
				const userName: string = currentUser.name;
				setUserName(userName);
			}
		} catch (error) {
			console.error("Error parsing user data:", error);
		}
	}, []);

	return (
		<>
			<div>
				<h2 className="text-center text-black font-semibold text-2xl mb-2 mt-1">{`Welcome ${userName}!`}</h2>
			</div>

			<div className="flex justify-between gap-x-7 pr-0 mr-7 ml-3">
				<CustomCard
					title={dasdhboardCardData[0].title}
					value={dasdhboardCardData[0].value}
				/>
				<CustomCard
					title={dasdhboardCardData[1].title}
					value={dasdhboardCardData[1].value}
				/>
				<CustomCard
					title={dasdhboardCardData[2].title}
					value={dasdhboardCardData[2].value}
				/>
				<CustomCard
					title={dasdhboardCardData[3].title}
					value={dasdhboardCardData[3].value}
				/>
			</div>
		</>
	);
};

export default DashBoard;
