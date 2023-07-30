'use client';

import { CustonButtonProps } from "@/types";
import Image from "next/image";

const GustomButton = ({ title, containerStyles, handleClick, btnType }: CustonButtonProps) => {
  return (
    <button
      disabled={false}
      type={btnType || "button"}
      className={`custom-btn ${containerStyles}`}
      onClick={handleClick}
    >
      <span className={`flex-1`}>
        {title}
      </span>
    </button>
  )
}

export default GustomButton;