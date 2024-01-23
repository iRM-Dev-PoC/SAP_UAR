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

type ColumnsRowsProps = {
  columnName: string[];
  rowdata: any[];
};

const TableComponent = ({ columnName, rowdata }: ColumnsRowsProps) => {
  return (
    <>
      <Table
        columns={
          <>
            {columnName.map((element) => {
              console.log(element);
              <TableColumn>
                <Label>{element}</Label>
              </TableColumn>;
            })}

            {/* <TableColumn>
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
            </TableColumn> */}
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
              icon="edit">
              Edit
            </Button>
          </TableCell>
          <TableCell>
            <Button
              style={{ border: "1px solid black" }}
              design="Negative"
              icon={bin}>
              Delete
            </Button>
          </TableCell>
        </TableRow>
      </Table>
    </>
  );
};

export default TableComponent;
