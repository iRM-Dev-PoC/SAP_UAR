"use client";
import React from "react";
import { Modals, Button, Bar } from "@ui5/webcomponents-react";
import RevokeRole from "./RevokeRole";
import deletebtn from "@ui5/webcomponents-icons/dist/delete.js";

const UarModal = () => {
  const showDialog = Modals.useShowDialog();
  function ShowModal() {
    console.log("open");
    const { close } = showDialog({
      stretch: true,
      headerText: "Dialog Title",
      children: <RevokeRole />,
      footer: (
        <Bar
          endContent={
            <div>
              <Button className="bg-slate-200" icon={deletebtn}>
                Bulk Delete
              </Button>
              &nbsp;
              <Button className="bg-slate-200" onClick={() => close()}>
                Close
              </Button>
            </div>
          }
        />
      ),
    });
  }

  return <>{ShowModal()}</>;
};

export default UarModal;
