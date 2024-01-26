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
      </div>
    </div>
  );
};

export default categorymaster;
