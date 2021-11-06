import React from "react";
import Close from "./icons/Close";
import Pending from "./icons/Pending";
import Success from "./icons/Success";

function StatusIcons({ status = "validated" }) {
  return (
    <>
      {(status == "pending" && <Pending />) ||
        (status === "validated" && <Success />) ||
        (status === "refused" && <Close />)}
    </>
  );
}

export default StatusIcons;
