"use client";
import React from "react";
import {
  Input,
  Icon,
  Button,
  Select,
  Option,
  Table,
  TableColumn,
  TableRow,
  TableCell,
  Label,
  CheckBox,
} from "@ui5/webcomponents-react";
import bin from "@ui5/webcomponents-icons/dist/delete.js";

const UarReview = () => {
  return (
    <div className="w-[80vw]">
      <div className="flex">
        <div>
          <Input icon={<Icon name="employee" />} />
        </div>
        <div>
          <Select>
            <Option>Option 1</Option>
            <Option>Option 2</Option>
            <Option>Option 3</Option>
            <Option>Option 4</Option>
            <Option>Option 5</Option>
          </Select>
        </div>
        <div>
          <Button icon="search" />
        </div>
      </div>
      <div className="w-full overflow-x-auto flex justify-center">
        <Table
          columns={
            <>
              <TableColumn style={{ width: "12rem" }}>
                <Label>Select</Label>
              </TableColumn>
              <TableColumn>
                <Label>Emp Number</Label>
              </TableColumn>
              <TableColumn>
                <Label>Full Name</Label>
              </TableColumn>
              <TableColumn>
                <Label>Designation</Label>
              </TableColumn>
              <TableColumn style={{ width: ".1px" }}>
                <Label>Assign Organization</Label>
              </TableColumn>
              <TableColumn>
                <Label>Manager Name</Label>
              </TableColumn>
              <TableColumn>
                <Label>Location</Label>
              </TableColumn>
              <TableColumn>
                <Label>Access Privilege Name</Label>
              </TableColumn>
              <TableColumn>
                <Label>Category Type</Label>
              </TableColumn>
              <TableColumn>
                <Label>Access Privilege Assign EndDate</Label>
              </TableColumn>
              <TableColumn>
                <Label>Last Logon</Label>
              </TableColumn>
              <TableColumn>
                <Label>Active Status</Label>
              </TableColumn>
              <TableColumn>
                <Label>Action</Label>
              </TableColumn>
              <TableColumn>
                <Label>Transaction Processed Valid Till Now ?</Label>
              </TableColumn>
              <TableColumn>
                <Label>Deemed Inappropriate From</Label>
              </TableColumn>
              <TableColumn>
                <Label>Reassign Email</Label>
              </TableColumn>
            </>
          }>
          <TableRow>
            <TableCell>
              <CheckBox />
            </TableCell>
            <TableCell>
              <Label>2144729</Label>
            </TableCell>
            <TableCell>
              <Label>Mr Riju Das</Label>
            </TableCell>
            <TableCell>
              <Label>Accountant II</Label>
            </TableCell>
            <TableCell>
              <Label>Finance;</Label>
            </TableCell>
            <TableCell>
              <Label>Mr. Subhagata</Label>
            </TableCell>
            <TableCell>
              <Label>Chennai-Office</Label>
            </TableCell>
            <TableCell>
              <Label>Payable PLtd</Label>
            </TableCell>
            <TableCell>
              <Label>RESP</Label>
            </TableCell>
            <TableCell>
              <Label>01/01/2023</Label>
            </TableCell>
            <TableCell>
              <Label>23/01/2024</Label>
            </TableCell>
            <TableCell>
              <Label>Active</Label>
            </TableCell>
            <TableCell>
              <Select>
                <Option>RETAIN</Option>
                <Option>Option 2</Option>
                <Option>Option 3</Option>
                <Option>Option 4</Option>
                <Option>Option 5</Option>
              </Select>
            </TableCell>
            <TableCell>
              <Select>
                <Option>YES</Option>
                <Option>NO</Option>
              </Select>
            </TableCell>
            <TableCell>
              <Input />
            </TableCell>
            <TableCell>
              <Input />
            </TableCell>
          </TableRow>
        </Table>
      </div>
    </div>
  );
};

export default UarReview;
