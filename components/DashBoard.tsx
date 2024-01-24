import React from "react";

import { dasdhboardCardData } from "@/utils/data";
import CustomCard from "./CustomCard";

let user: string = "John Doe";

const DashBoard = () => {
	return (
		<>
			<div>
				<h2 className="text-center text-black font-semibold text-2xl mb-2 mt-1">{`Welcome ${user}!`}</h2>
			</div>

			<div className="flex justify-start gap-x-7 pr-0 mr-7 ml-3">
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
