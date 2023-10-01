"use client";

import CompareBlock from "@/components/layout/CompareBlock";
import { weaponDefaultProps } from "@/types/weapon";

type weaponCompare = {
  firstCompareValue?: weaponDefaultProps;
  secondCompareValue?: weaponDefaultProps;
};

const WeaponCompare = ({
  firstCompareValue,
  secondCompareValue,
}: weaponCompare) => {
  return (
    <section className="flex flex-row justify-between pt-10 px-6">
      <div className="w-5/12">
        {firstCompareValue && <CompareBlock weapon={firstCompareValue} />}
      </div>
      <div className="w-5/12">
        {secondCompareValue && (
          <CompareBlock weapon={secondCompareValue} position="right" />
        )}
      </div>
    </section>
  );
};

export default WeaponCompare;
