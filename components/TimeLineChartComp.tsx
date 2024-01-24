"use client";

import React from "react";
import { TimelineChart } from "@ui5/webcomponents-react-charts";

const TimeLineChartComp = () => {
	return (
		<div className="w-full h-full p-3 m-3 bg-white rounded-xl">
			<h4 className="text-center font-bold mb-3 text-xl ">
				UAR Review Timeline
			</h4>
			<div>
				<TimelineChart
					style={{ width: "100%", height: "100%" }}
					dataset={[
						{
							color: "blue",
							label: "Data Synchronization",
							tasks: [
								{
									connections: [
										{
											itemId: "TR-20X",
										},
									],
									duration: 3,
									id: "TR-00X",
									start: 2,
								},
							],
						},
						{
							label: "Role Scoping",
							tasks: [
								{
									connections: [
										{
											itemId: "MS-30X",
										},
									],
									duration: 5,
									id: "TR-10X",
									start: 11,
								},
							],
						},
						{
							label: "Data Review",
							tasks: [
								{
									connections: [
										{
											itemId: "TR-10X",
										},
									],
									duration: 5,
									id: "TR-20X",
									start: 6,
								},
							],
						},
						{
							label: "Phase 1",
							milestones: [
								{
									connections: [
										{
											itemId: "TR-40X",
										},
										{
											itemId: "TR-50X",
										},
									],
									id: "MS-30X",
									label: "Phase 1",
									start: 17,
								},
							],
						},
						{
							label: "User Role Review by HoD",
							tasks: [
								{
									connections: [
										{
											itemId: "MS-60X",
										},
									],
									duration: 9,
									id: "TR-40X",
									start: 18,
								},
							],
						},
						{
							label: "Notify Pending Reviews",
							tasks: [
								{
									connections: [
										{
											itemId: "MS-60X",
										},
									],
									duration: 4,
									id: "TR-50X",
									start: 24,
								},
							],
						},
						{
							label: "",
							milestones: [
								{
									color: "red",
									id: "MS-60X",
									label: "Completed",
									start: 31,
								},
							],
						},
					]}
					isDiscrete
					showConnection
					start={1}
					totalDuration={31}
				/>
			</div>
		</div>
	);
};

export default TimeLineChartComp;
