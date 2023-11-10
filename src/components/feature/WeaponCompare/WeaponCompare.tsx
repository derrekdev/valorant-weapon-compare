"use client";

import CompareBlock from "@/components/ui/CompareBlock/CompareBlock";
import { weaponDefaultProps } from "@/types/weapon";

type weaponCompare = {
  firstCompareValue?: weaponDefaultProps | null;
  secondCompareValue?: weaponDefaultProps | null;
  firstSetValue: () => void;
  secondSetValue: () => void;
};

const WeaponCompare = ({
  firstCompareValue,
  secondCompareValue,
  firstSetValue,
  secondSetValue,
}: weaponCompare) => {
  return (
    <section className="flex flex-row justify-between pt-10 md:px-6 max-md:gap-4">
      <div className="md:w-5/12 max-md:w-1/2">
        {firstCompareValue && (
          <CompareBlock weapon={firstCompareValue} setClose={firstSetValue} />
        )}
      </div>
      <div className="md:w-5/12 max-md:w-1/2">
        {secondCompareValue && (
          <CompareBlock weapon={secondCompareValue} setClose={secondSetValue} />
        )}
      </div>
    </section>
  );
};

export default WeaponCompare;
