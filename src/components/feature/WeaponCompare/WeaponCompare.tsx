"use client";

import CompareBlock from "@/components/layout/CompareBlock";
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
    <section className="flex flex-row justify-between pt-10 px-6">
      <div className="w-5/12">
        {firstCompareValue && (
          <CompareBlock weapon={firstCompareValue} setClose={firstSetValue} />
        )}
      </div>
      <div className="w-5/12">
        {secondCompareValue && (
          <CompareBlock
            weapon={secondCompareValue}
            setClose={secondSetValue}
            position="right"
          />
        )}
      </div>
    </section>
  );
};

export default WeaponCompare;
