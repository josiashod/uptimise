import React from "react";

function Badge({ status = "validated" }) {
  const [value, setValue] = React.useState("");
  const [bgColor, setBgColor] = React.useState("");

  const badgeColor = () => {
    if (status === "validated") {
      setValue("Validé");
      setBgColor("bg-green-500");
    } else if (status === "pending") {
      setValue("En attente");
      setBgColor("bg-yellow-500");
    } else if (status === "refused") {
      setValue("Refusé");
      setBgColor("bg-red-500");
    }
  };
  React.useEffect(() => {
    badgeColor();
  }, [status]);

  return (
    <small
      className={` ${bgColor} p-0.5 px-2 rounded-md font-semibold text-2xs text-white`}>
      {value}
    </small>
  );
}

export default Badge;
