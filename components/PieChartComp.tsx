import React from "react";
import { PieChart } from "@ui5/webcomponents-react-charts";
import { AnalyticalCard, AnalyticalCardHeader } from "@ui5/webcomponents-react";

const PieChartComp = () => {
	return (
		<div>
			<AnalyticalCard
				header={
					<AnalyticalCardHeader className="pointer-events-none" titleText="UAR Overview"></AnalyticalCardHeader>
				}>
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
			</AnalyticalCard>
		</div>
	);
};

export default PieChartComp;
