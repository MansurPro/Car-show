'use client';

import { CustonButtonProps } from "@/types";
import Image from "next/image";

const GustomButton = ({ title, containerStyles, handleClick }: CustonButtonProps) => {
  return (
    <button
      disabled={false}
      type={"button"}
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