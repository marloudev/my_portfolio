import Image from "next/image";
import React from "react";
import flutter from "./../../images/flutter.svg";
export default function FlutterLogo() {
  return (
    <>
      <Image
        src={flutter}
        alt="Flutter Logo"
        className="text-7xl text-emerald-600"
        width={65}
        height={65}
      />
    </>
  );
}
