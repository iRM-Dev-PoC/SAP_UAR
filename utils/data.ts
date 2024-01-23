import filter from "@ui5/webcomponents-icons/dist/clear-filter.js";
import pending from "@ui5/webcomponents-icons/dist/pending.js";
import blocked from "@ui5/webcomponents-icons/dist/private.js";
import person from "@ui5/webcomponents-icons/dist/person-placeholder.js";

export const users = [
	{
		name: "user",
		email: "user@uar.com",
		role: "user",
		password: "12345678",
	},
	{
		name: "admin",
		email: "admin@uar.com",
		role: "admin",
		password: "12345678",
	},
];

export const dasdhboardCardData = [
	{
		title: "Users Reviewed",
		value: "45",
		icons: person,
	},
	{
		title: "Revoked Roles",
		value: "23",
		icons: blocked,
	},
	{
		title: "Pending Reviews",
		value: "15",
		icons: pending,
	},
	{
		title: "Scoped Roles",
		value: "11",
		icons: filter,
	},
];

export const dataSet = [
	
];
