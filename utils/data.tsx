import bin from "@ui5/webcomponents-icons/dist/delete.js";
import { Button, Icon } from "@ui5/webcomponents-react";

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
		value: "2045",
	},
	{
		title: "Revoked Roles",
		value: "123",
	},
	{
		title: "Pending Reviews",
		value: "115",
	},
	{
		title: "Scoped Roles",
		value: "19",
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

export const fileSyncData = {
	columndata: [
		"Sync Id",
		"For Period",
		"Report Name",
		"Synced At",
		"Synced By",
		"Process Started At",
		"Process Started By",
		"Preview"
	],
	rowdata : [
		{
			"Sync Id" : "3",
			"For Period" : "Q3-2023",
			"Report Name" : "USER_DETAILS, MANAGERS_DETAILS, ROLES_DETAILS",
			"Synced At" : "21/09/2023 10:17:46",
			"Synced By" : "Deep Mondal",
			"Process Started At" : "21/09/2023 10:17:46",
			"Process Started By" : "Deep Mondal",
			Preview: (
				<Icon name="information" style={{cursor: "pointer"}} accessibleName="Preview" showTooltip={true}></Icon>
			),
		},
		{
			"Sync Id" : "2",
			"For Period" : "Q2-2023",
			"Report Name" : "USER_DETAILS, MANAGERS_DETAILS, ROLES_DETAILS",
			"Synced At" : "21/05/2023 10:17:46",
			"Synced By" : "Deep Mondal",
			"Process Started At" : "21/05/2023 10:17:46",
			"Process Started By" : "Subhagata Mondal",
			Preview: (
				<Icon name="information" style={{cursor: "pointer"}} accessibleName="Preview" showTooltip={true}></Icon>
			),
		},
		{
			"Sync Id" : "1",
			"For Period" : "Q1-2023",
			"Report Name" : "USER_DETAILS, MANAGERS_DETAILS, ROLES_DETAIL",
			"Synced At" : "21/01/2023 10:17:46",
			"Synced By" : "Deep Mondal",
			"Process Started At" : "21/01/2023 10:17:46",
			"Process Started By" : "Subhagata Mondal",
			Preview: (
				<Icon name="information" style={{cursor: "pointer"}} accessibleName="Preview" showTooltip={true}></Icon>
			),
		}
	]
};

export const dataSourceDtls = {
	columndata : [
		"Sl No.",
		"Datasource Name",
		"Created At",
		"Created By"
	],
	rowdata : [
		{
			"Sl No." : "1",
			"Datasource Name": "DATA_SOURCE_Q1",
		"Created At" : "21/01/2023 10:17:46",
		"Created By" : "Deep Mondal"
		},
		{
			"Sl No." : "2",
			"Datasource Name": "DATA_SOURCE_Q2",
		"Created At" : "21/05/2023 10:17:46",
		"Created By" : "Deep Mondal"
		},
		{
			"Sl No." : "3",
			"Datasource Name": "DATA_SOURCE_Q3",
		"Created At" : "21/09/2023 10:17:46",
		"Created By" : "Deep Mondal"
		},

	]
}
