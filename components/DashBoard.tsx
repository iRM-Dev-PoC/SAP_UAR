import React from "react";

import InfoCard from "./Info-Card";
import { dasdhboardCardData } from "@/utils/data";

let user: string = "John Doe";

const DashBoard = () => {
	return (
		<>
			<div>
				<h2 className="text-center text-black font-semibold text-2xl mb-2 mt-1">{`Welcome ${user}!`}</h2>
			</div>

			<div className="mr-4 ml-2 pl-2 pr-2 pt-2 flex gap-x-4 ">
				<InfoCard
					title={dasdhboardCardData[0].title}
					value={dasdhboardCardData[0].value}
					icon={dasdhboardCardData[0].icons}
				/>

				<InfoCard
					title={dasdhboardCardData[1].title}
					value={dasdhboardCardData[1].value}
					icon={dasdhboardCardData[1].icons}
				/>

				<InfoCard
					title={dasdhboardCardData[2].title}
					value={dasdhboardCardData[2].value}
					icon={dasdhboardCardData[2].icons}
				/>

				<InfoCard
					title={dasdhboardCardData[3].title}
					value={dasdhboardCardData[3].value}
					icon={dasdhboardCardData[3].icons}
				/>
			</div>
		</>
	);
};

export default DashBoard;
