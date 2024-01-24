import React from "react";
import { BarChart } from "@ui5/webcomponents-react-charts";
import { AnalyticalCard, AnalyticalCardHeader } from "@ui5/webcomponents-react";

const BarChartComp = () => {
	return (
		<div className="bg-white rounded-xl">
			<h4 className="text-center pt-3 font-bold mb-1 text-xl">
				Top 10 HoDs With Pending Reviews
			</h4>
			<div className="mt-3">
				<BarChart
					dataset={[
						{
							name: "John Doe",
							volume: 756,
						},
						{
							name: "David Brown",
							volume: 880,
						},
						{
							name: "Lauren Davis",
							volume: 700,
						},
						{
							name: "Carol Walker",
							volume: 604,
						},
						{
							name: "Ava Kelly",
							volume: 756,
						},
						{
							name: "Catherine Marshall",
							volume: 880,
						},
						{
							name: "Patrick Miller",
							volume: 450,
						},
						{
							name: "Nathan Walker",
							volume: 104,
						},
						{
							name: "Patrick Jones",
							volume: 879,
						},
						{
							name: "Jacob Marshall",
							volume: 200,
						},
					]}
					dimensions={[
						{
							accessor: "name",
						},
					]}
					measures={[
						{
							accessor: "users",
							label: "Users",
							opacity: 0.6,
						},
						{
							accessor: "sessions",
							hideDataLabel: true,
							label: "Active Sessions",
						},
						{
							accessor: "volume",
							label: "Vol.",
						},
					]}
					noLegend
				/>
			</div>
		</div>
	);
};

export default BarChartComp;
