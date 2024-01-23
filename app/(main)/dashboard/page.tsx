import React from "react";
import DashBoard from "@/components/DashBoard";
import AnalyticalCardComp from "@/components/AnalyticalCardComp";
import PieChartComp from "@/components/PieChartComp";
import BarChartComp from "@/components/BarChartComp";

const page = () => {
	return (
		<div className="overflow-hidden mt-2">
			<div>
				<DashBoard />
			</div>
			<div className="mt-3 mr-7 ml-3 mb-5">
				<AnalyticalCardComp />
			</div>

			<div className="flex mr-7 ml-3 mb-5 gap-2">
				<div className="flex-1">
					<PieChartComp />
				</div>
				<div className="flex-1">
					<BarChartComp />
				</div>
			</div>
		</div>
	);
};

export default page;
