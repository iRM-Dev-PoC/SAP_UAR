import React from "react";
import { PieChart } from "@ui5/webcomponents-react-charts";

const PieChartComp = () => {
	return (
		<div className="bg-white rounded-xl">
			<h4 className="text-center pt-3 font-bold mb-1 text-xl">UAR Overview</h4>
			<div className="mt-3">
				<PieChart
					dataset={[
						{
							name: "View list of jobs",
							users: 100,
						},
						{
							name: "View job definition",
							users: 230,
						},
						{
							name: "Create jobs",
							users: 240,
						},
						{
							name: "Export jobs",
							users: 280,
						},
						{
							name: "Delete jobs",
							users: 100,
						},
						{
							name: "View mapping tables",
							users: 230,
						},
						{
							name: "Modify mapping tables",
							users: 20,
						},
						{
							name: "Import jobs",
							users: 220,
						},
					]}
					dimension={{
						accessor: "name",
					}}
					measure={{
						accessor: "users",
					}}
				/>
			</div>
		</div>
	);
};

export default PieChartComp;
