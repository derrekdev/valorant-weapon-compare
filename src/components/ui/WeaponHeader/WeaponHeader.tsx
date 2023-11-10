"use client";

import { ArrowDown, ArrowUp } from "@/components/SVGIcon/icons";
import { Dispatch, ReactNode, SetStateAction } from "react";

const WeaponHeader = ({
  value,
  selectedValue,
  handleClick,
  children,
}: {
  value: string;
  selectedValue: string;
  handleClick: Dispatch<SetStateAction<string>>;
  children: ReactNode;
}) => {
  return (
    <h2
      className="max-md:flex max-md:flex-row max-md:justify-center max-md:items-center bg-teal-900 text-emerald-50 uppercase font-medium border-b-[1px] text-center max-md:cursor-pointer relative max-md:h-20"
      onClick={() => handleClick((state) => (state === value ? "" : value))}
    >
      {children}
      <span className="md:hidden absolute right-2">
        {value === selectedValue ? <ArrowUp /> : <ArrowDown />}
      </span>
    </h2>
  );
};

export default WeaponHeader;
