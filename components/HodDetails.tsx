import React from "react";
import { Badge } from "@ui5/webcomponents-react";

const HodDetails = () => {
  return (
    <div className="bg-white h-30 rounded-xl flex p-3">
      <div>
        <div>
          HOD/Reviewer : <b>Raktim Guin</b>{" "}
        </div>
        <div>
          Business Unit : <b>E&C</b>
        </div>
        <div>
          Service Line : <b>Shared Services</b>
        </div>
        <div>
          Records To be Viewed : <Badge>139</Badge>
        </div>
      </div>
    </div>
  );
};

export default HodDetails;
