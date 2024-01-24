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
  tabledata: {
    columndata: any[];
    rowdata: any[];
  };
};

const TableComponent = ({ tabledata }: ColumnsRowsProps) => {
  const columndata = tabledata.columndata;
  const rowdata = tabledata.rowdata;

  return (
    <>
      <Table
        columns={
          <>
            {columndata.map((column, index) => (
              <TableColumn key={index}>
                <Label>{column}</Label>
              </TableColumn>
            ))}
          </>
        }>
        {rowdata.map((row, rowIndex) => (
          <TableRow key={rowIndex}>
            {columndata.map((column, colIndex) => (
              <TableCell key={colIndex}>{row[column]}</TableCell>
            ))}
          </TableRow>
        ))}

        {/* <TableRow>
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
        </TableRow> */}
      </Table>
    </>
  );
};

export default TableComponent;
