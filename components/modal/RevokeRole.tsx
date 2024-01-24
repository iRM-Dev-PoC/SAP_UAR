"use client";
import React from "react";
import {
  Button,
  Label,
  Table,
  TableCell,
  TableColumn,
  TableRow,
  CheckBox,
} from "@ui5/webcomponents-react";
import bin from "@ui5/webcomponents-icons/dist/delete.js";
import decline from "@ui5/webcomponents-icons/dist/decline.js";
const RevokeRole = () => {
  return (
    <div>
      <div className="flex justify-between p-2 bg-white rounded-t-lg ">
        <h1 className="text-lg font-semibold p-2">Revoke Role</h1>
      </div>

      <div>
        <div className="border">
          <h1 className="border text-lg bg-white p-2">
            User Name: <b>Riju Das</b>
          </h1>
        </div>
      </div>

      <Table
        columns={
          <>
            <TableColumn style={{ width: "12rem" }}>
              <CheckBox />
            </TableColumn>
            <TableColumn style={{ width: "12rem" }}>
              <Label>Serial Num</Label>
            </TableColumn>
            <TableColumn minWidth={800} popinText="Supplier">
              <Label> Role Name</Label>
            </TableColumn>
            <TableColumn>
              <Label>Revoke Role</Label>
            </TableColumn>
          </>
        }
        onLoadMore={function _a() {}}
        onPopinChange={function _a() {}}
        onRowClick={function _a() {}}
        onSelectionChange={function _a() {}}>
        <TableRow>
          <TableCell className="border border-gray">
            <CheckBox />
          </TableCell>
          <TableCell className="border border-gray">
            <Label>1</Label>
          </TableCell>
          <TableCell className="border border-gray">
            <Label>Application Developer</Label>
          </TableCell>

          <TableCell className="border border-gray">
            <Label>
              <Button
                className="ml-4"
                style={{ border: "1px solid black" }}
                design="Negative"
                icon={bin}
                onClick={function _a() {
                  return;
                }}></Button>
            </Label>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="border border-gray">
            <CheckBox />
          </TableCell>
          <TableCell className="border border-gray">
            <Label>2</Label>
          </TableCell>
          <TableCell className="border border-gray">
            <Label>Inventory Manager</Label>
          </TableCell>

          <TableCell className="border border-gray">
            <Label>
              <Button
                className="ml-4"
                style={{ border: "1px solid black" }}
                design="Negative"
                icon={bin}
                onClick={function _a() {
                  return;
                }}></Button>
            </Label>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="border border-gray">
            <CheckBox />
          </TableCell>
          <TableCell className="border border-gray">
            <Label>3</Label>
          </TableCell>
          <TableCell className="border border-gray">
            <Label>Payroll Administrator</Label>
          </TableCell>

          <TableCell className="border border-gray">
            <Label>
              <Button
                className="ml-4"
                style={{ border: "1px solid black" }}
                design="Negative"
                icon={bin}
                onClick={function _a() {
                  return;
                }}></Button>
            </Label>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="border border-gray">
            <CheckBox />
          </TableCell>
          <TableCell className="border border-gray">
            <Label>4</Label>
          </TableCell>
          <TableCell className="border border-gray">
            <Label>Buyer</Label>
          </TableCell>

          <TableCell className="border border-gray">
            <Label>
              <Button
                className="ml-4"
                style={{ border: "1px solid black" }}
                design="Negative"
                icon={bin}
                onClick={function _a() {
                  return;
                }}></Button>
            </Label>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="border border-gray">
            <CheckBox />
          </TableCell>
          <TableCell className="border border-gray">
            <Label>5</Label>
          </TableCell>
          <TableCell className="border border-gray">
            <Label>General Accounting Manager</Label>
          </TableCell>

          <TableCell className="border border-gray">
            <Label>
              <Button
                className="ml-4"
                style={{ border: "1px solid black" }}
                design="Negative"
                icon={bin}
                onClick={function _a() {
                  return;
                }}></Button>
            </Label>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="border border-gray">
            <CheckBox />
          </TableCell>
          <TableCell className="border border-gray">
            <Label>6</Label>
          </TableCell>
          <TableCell className="border border-gray">
            <Label>General Accountant</Label>
          </TableCell>

          <TableCell className="border border-gray">
            <Label>
              <Button
                className="ml-4"
                style={{ border: "1px solid black" }}
                design="Negative"
                icon={bin}
                onClick={function _a() {
                  return;
                }}></Button>
            </Label>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="border border-gray">
            <CheckBox />
          </TableCell>
          <TableCell className="border border-gray">
            <Label>7</Label>
          </TableCell>
          <TableCell className="border border-gray">
            <Label>Development Officer</Label>
          </TableCell>

          <TableCell className="border border-gray">
            <Label>
              <Button
                className="ml-4"
                style={{ border: "1px solid black" }}
                design="Negative"
                icon={bin}
                onClick={function _a() {
                  return;
                }}></Button>
            </Label>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="border border-gray">
            <CheckBox />
          </TableCell>
          <TableCell className="border border-gray">
            <Label>8</Label>
          </TableCell>
          <TableCell className="border border-gray">
            <Label>Financial Acid Advisor</Label>
          </TableCell>

          <TableCell className="border border-gray">
            <Label>
              <Button
                className="ml-4"
                style={{ border: "1px solid black" }}
                design="Negative"
                icon={bin}
                onClick={function _a() {
                  return;
                }}></Button>
            </Label>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="border border-gray">
            <CheckBox />
          </TableCell>
          <TableCell className="border border-gray">
            <Label>9</Label>
          </TableCell>
          <TableCell className="border border-gray">
            <Label>Receipt Accounting</Label>
          </TableCell>

          <TableCell className="border border-gray">
            <Label>
              <Button
                className="ml-4"
                style={{ border: "1px solid black" }}
                design="Negative"
                icon={bin}
                onClick={function _a() {
                  return;
                }}></Button>
            </Label>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="border border-gray">
            <CheckBox />
          </TableCell>
          <TableCell className="border border-gray">
            <Label>10</Label>
          </TableCell>
          <TableCell className="border border-gray">
            <Label>
              Human Capital Management Application Administrative Enterprise Set
            </Label>
          </TableCell>

          <TableCell className="border border-gray">
            <Label>
              <Button
                className="ml-4"
                style={{ border: "1px solid black" }}
                design="Negative"
                icon={bin}
                onClick={function _a() {
                  return;
                }}></Button>
            </Label>
          </TableCell>
        </TableRow>
      </Table>
    </div>
  );
};

export default RevokeRole;
