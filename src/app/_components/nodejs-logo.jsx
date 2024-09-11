import Image from "next/image";
import React from "react";
import nodejs from "./../../images/node-js.svg";
export default function NodeJsLogo() {
  return (
    <>
      <Image
        src={nodejs}
        alt="Flutter Logo"
        className="text-7xl text-emerald-600"
        width={200}
        height={200}
      />
    </>
  );
}
