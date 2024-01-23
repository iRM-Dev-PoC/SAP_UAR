import React from "react";
import "@ui5/webcomponents-icons/dist/AllIcons.js";
import { Card, CardHeader, Icon } from "@ui5/webcomponents-react";
import filter from "@ui5/webcomponents-icons/dist/clear-filter.js";
import pending from "@ui5/webcomponents-icons/dist/pending.js";
import blocked from "@ui5/webcomponents-icons/dist/private.js";
import person from "@ui5/webcomponents-icons/dist/person-placeholder.js";

type InfoCardProps = {
	title: string;
	value: string;
	icon: string;
};

const InfoCard = ({ title, value, icon }: InfoCardProps) => {
	return (
		<div>
			<Card
				className="relative hover:shadow-lg mr-2"
				header={
					<CardHeader
						interactive={false}
						titleText={title}
						className="pointer-events-none font-semibold text-3xl"
						avatar={
							<Icon
								name="pending"
								// className="absolute right-10"
							/>
						}
					/>
				}
				style={{
					width: "18rem",
				}}>
				<p className="text-center text-black font-semibold text-3xl mb-3 -mt-2">
					{value}
				</p>
			</Card>
		</div>
	);
};

export default InfoCard;
