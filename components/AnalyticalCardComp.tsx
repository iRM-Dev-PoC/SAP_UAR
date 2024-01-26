"use client";

import React from "react";
import { AnalyticalCard, AnalyticalCardHeader } from "@ui5/webcomponents-react";
import { LineChart } from "@ui5/webcomponents-react-charts";

const AnalyticalCardComp = () => {
	return (
		<AnalyticalCard
			style={{ width: "100%", height: "100%" }}
			header={
				<AnalyticalCardHeader
					description="Year, 2023 - Q1"
					state="Error"
					subtitleText="Pending Reviews"
					titleText="UAR Overview"
					unitOfMeasurement="Count"
					value="115"></AnalyticalCardHeader>
			}>
			<LineChart
				className="chromatic-ignore"
				dataset={[
					{
						name: "January",
						Users: 76,
						"Revoked Roles": 50,
						"Retained Roles": 107,
					},
					{
						name: "February",
						Users: 230,
						"Revoked Roles": 155,
						"Retained Roles": 197,
					},
					{
						name: "March",
						Users: 240,
						"Revoked Roles": 77,
						"Retained Roles": 289,
					},
					{
						name: "April",
						Users: 280,
						"Revoked Roles": 102,
						"Retained Roles": 206,
					},
					{
						name: "May",
						Users: 100,
						"Revoked Roles": 40,
						"Retained Roles": 67,
					},
				]}
				dimensions={[
					{
						accessor: "name",
					},
				]}
				measures={[
					{
						accessor: "Users",
					},
					{
						accessor: "Revoked Roles",
					},
					{
						accessor: "Retained Roles",
					},
				]}
				noLegend={false}
			/>
		</AnalyticalCard>
	);
};

export default AnalyticalCardComp;
