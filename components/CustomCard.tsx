import React from "react";
import { Clock8, FilterX, ShieldBan, Users } from "lucide-react";
import "@/app/bggradient.css";

type CustomCardProps = {
	title: string;
	value: string;
};

const CustomCard = ({ title, value }: CustomCardProps) => {
	let bgcolor: string;
	if (title === "Revoked Roles") {
		bgcolor = "revoked";
	} else if (title === "Pending Reviews") {
		bgcolor = "pending";
	} else if (title === "Scoped Roles") {
		bgcolor = "scoped";
	} else {
		bgcolor = "reviewed";
	}
	return (
		<div
			className={`h-[7rem] w-[18rem] rounded-xl p-2 opacity-90 hover:opacity-100 transition-all shadow-lg pending ${bgcolor}`}>
			<div className="flex justify-center p-2 m-2 gap-x-3">
				<h2 className="font-bold text-black">{title}</h2>
				{title === "Revoked Roles" && (
					<ShieldBan className="h-6 w-6 text-black" />
				)}
				{title === "Pending Reviews" && (
					<Clock8 className="h-6 w-6 text-black" />
				)}
				{title === "Scoped Roles" && <FilterX className="h-6 w-6 text-black" />}
				{title === "Users Reviewed" && <Users className="h-6 w-6 text-black" />}
			</div>
			<div>
				<h3 className="text-center font-semibold text-black">{value}</h3>
			</div>
		</div>
	);
};

export default CustomCard;
