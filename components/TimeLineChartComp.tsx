"use client";

import React from "react";
import { TimelineChart } from "@ui5/webcomponents-react-charts";
import { AnalyticalCard, AnalyticalCardHeader } from "@ui5/webcomponents-react";

const TimeLineChartComp = () => {
	return (
		<div>
			<AnalyticalCard
				header={
					<AnalyticalCardHeader
						className="pointer-events-none"
						titleText="Top 10 HoDs with Pending Reviews"></AnalyticalCardHeader>
				}>
				<TimelineChart
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
			</AnalyticalCard>
		</div>
	);
};

export default TimeLineChartComp;
