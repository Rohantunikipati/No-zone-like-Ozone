import React from "react";
import Button from "./Button";

const Navbar = () => {
  return (
    <div className="w-full h-16 flex items-center border-b justify-between px-20 absolute top-0">
      <div className="text-2xl font-semibold">Team-Techi</div>
      <div className="flex items-center justify-center gap-5">
        <Button />
        <Button />
        <Button />
      </div>
    </div>
  );
};

export default Navbar;
