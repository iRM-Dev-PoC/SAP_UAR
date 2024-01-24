import bin from "@ui5/webcomponents-icons/dist/delete.js";
import { Button } from "@ui5/webcomponents-react";

export const users = [
	{
		name: "John Doe",
		email: "user@uar.com",
		role: "user",
		password: "12345678",
	},
	{
		name: "Jessica Doe",
		email: "admin@uar.com",
		role: "admin",
		password: "12345678",
	},
];

export const dasdhboardCardData = [
	{
		title: "Users Reviewed",
		value: "45",
	},
	{
		title: "Revoked Roles",
		value: "23",
	},
	{
		title: "Pending Reviews",
		value: "15",
	},
	{
		title: "Scoped Roles",
		value: "11",
	},
];

export const CategoryMasterDataset = {
	columndata: [
		"Sl No.",
		"Category Name",
		"Category Description",
		"Edit",
		"Delete",
	],
	rowdata: [
		{
			"Sl No.": "1",
			"Category Name": "High Category",
			"Category Description": "High Category Description",
			Edit: (
				<Button
					style={{ border: "1px solid black" }}
					design="Positive"
					icon="edit"
					onClick={function _a() {
						return;
					}}>
					Edit
				</Button>
			),
			Delete: (
				<Button
					style={{ border: "1px solid black" }}
					design="Negative"
					icon={bin}
					onClick={function _a() {
						return;
					}}>
					Delete
				</Button>
			),
		},
		{
			"Sl No.": "2",
			"Category Name": "View Roles",
			"Category Description": "View Roles Description",
			Edit: (
				<Button
					style={{ border: "1px solid black" }}
					design="Positive"
					icon="edit"
					onClick={function _a() {
						return;
					}}>
					Edit
				</Button>
			),
			Delete: (
				<Button
					style={{ border: "1px solid black" }}
					design="Negative"
					icon={bin}
					onClick={function _a() {
						return;
					}}>
					Delete
				</Button>
			),
		},
		{
			"Sl No.": "3",
			"Category Name": "Read Only Roles",
			"Category Description": "",
			Edit: (
				<Button
					style={{ border: "1px solid black" }}
					design="Positive"
					icon="edit"
					onClick={function _a() {
						return;
					}}>
					Edit
				</Button>
			),
			Delete: (
				<Button
					style={{ border: "1px solid black" }}
					design="Negative"
					icon={bin}
					onClick={function _a() {
						return;
					}}>
					Delete
				</Button>
			),
		},
		{
			"Sl No.": "4",
			"Category Name": "Custom Roles",
			"Category Description": "",
			Edit: (
				<Button
					style={{ border: "1px solid black" }}
					design="Positive"
					icon="edit"
					onClick={function _a() {
						return;
					}}>
					Edit
				</Button>
			),
			Delete: (
				<Button
					style={{ border: "1px solid black" }}
					design="Negative"
					icon={bin}
					onClick={function _a() {
						return;
					}}>
					Delete
				</Button>
			),
		},
	],
};
