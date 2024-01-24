import filter from "@ui5/webcomponents-icons/dist/clear-filter.js";
import pending from "@ui5/webcomponents-icons/dist/pending.js";
import blocked from "@ui5/webcomponents-icons/dist/private.js";
import person from "@ui5/webcomponents-icons/dist/person-placeholder.js";
import bin from "@ui5/webcomponents-icons/dist/delete.js";
import {
  Table,
  TableColumn,
  TableRow,
  TableCell,
  Label,
  Button,
} from "@ui5/webcomponents-react";

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

export const dataSet = [];

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
