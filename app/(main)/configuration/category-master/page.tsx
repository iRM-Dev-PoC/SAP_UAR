"use client";
import React from "react";
import {
  Table,
  TableColumn,
  TableRow,
  TableCell,
  Label,
  Button,
} from "@ui5/webcomponents-react";

import bin from "@ui5/webcomponents-icons/dist/delete.js";
import { CategoryMasterDataset } from "@/utils/data";
import TableComponent from "@/components/Table";

const categorymaster = () => {
  return (
    <div className=" p-2">
      <div className="bg-white h-[8vh] p-2  flex justify-between align-middle rounded-t-lg">
        <div className=" text-black mt-1 text-xl font-bold">
          Category Master
        </div>
        <div className="ml-3">
          <Button className="hover:opacity-60  border border-black">
            Create
          </Button>
        </div>
      </div>
      <div>
        <TableComponent tabledata={CategoryMasterDataset}/>
        {/* <Table
          className="border border-gray-300"
          // style={{ width: "1150px" }}
          columns={
            <>
              <TableColumn>
                <Label>Rownum</Label>
              </TableColumn>
              <TableColumn>
                <Label>Category Name</Label>
              </TableColumn>
              <TableColumn>
                <Label>Category Description</Label>
              </TableColumn>
              <TableColumn>
                <Label>Edit</Label>
              </TableColumn>
              <TableColumn>
                <Label>Delete</Label>
              </TableColumn>
            </>
          }>
          <TableRow>
            <TableCell>
              <Label>1</Label>
            </TableCell>
            <TableCell>
              <Label>High Category</Label>
            </TableCell>
            <TableCell>
              <Label>High Category Description</Label>
            </TableCell>
            <TableCell>
              <Button
                style={{ border: "1px solid black" }}
                design="Positive"
                icon="edit"
                onClick={function _a() {
                  return;
                }}>
                Edit
              </Button>
            </TableCell>
            <TableCell>
              <Button
                style={{ border: "1px solid black" }}
                design="Negative"
                icon={bin}
                onClick={function _a() {
                  return;
                }}>
                Delete
              </Button>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <Label>2</Label>
            </TableCell>
            <TableCell>
              <Label>View Roles</Label>
            </TableCell>
            <TableCell>
              <Label>View Roles Description</Label>
            </TableCell>
            <TableCell>
              <Button
                style={{ border: "1px solid black" }}
                design="Positive"
                icon="edit"
                onClick={function _a() {
                  return;
                }}>
                Edit
              </Button>
            </TableCell>
            <TableCell>
              <Button
                style={{ border: "1px solid black" }}
                design="Negative"
                icon={bin}
                onClick={function _a() {
                  return;
                }}>
                Delete
              </Button>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <Label>3</Label>
            </TableCell>
            <TableCell>
              <Label>Read Only Roles</Label>
            </TableCell>
            <TableCell>
              <Label></Label>
            </TableCell>
            <TableCell>
              <Button
                style={{ border: "1px solid black" }}
                design="Positive"
                icon="edit"
                onClick={function _a() {
                  return;
                }}>
                Edit
              </Button>
            </TableCell>
            <TableCell>
              <Button
                style={{ border: "1px solid black" }}
                design="Negative"
                icon={bin}
                onClick={function _a() {
                  return;
                }}>
                Delete
              </Button>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <Label>4</Label>
            </TableCell>
            <TableCell>
              <Label>Custom Roles</Label>
            </TableCell>
            <TableCell>
              <Label></Label>
            </TableCell>
            <TableCell>
              <Button
                style={{ border: "1px solid black" }}
                design="Positive"
                icon="edit"
                onClick={function _a() {
                  return;
                }}>
                Edit
              </Button>
            </TableCell>
            <TableCell>
              <Button
                style={{ border: "1px solid black" }}
                design="Negative"
                icon={bin}
                onClick={function _a() {
                  return;
                }}>
                Delete
              </Button>
            </TableCell>
          </TableRow>
        </Table> */}
      </div>
    </div>
  );
};

export default categorymaster;
