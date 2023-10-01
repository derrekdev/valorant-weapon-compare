"use client";

import { ReactNode } from "react";

const WeaponHeader = ({ children }: { children: ReactNode }) => {
  return (
    <h2 className="bg-teal-900 text-emerald-50 uppercase font-medium border-b-[1px] text-center">
      {children}
    </h2>
  );
};

export default WeaponHeader;
