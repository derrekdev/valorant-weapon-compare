"use client";

import CompareBlock from "@/components/layout/CompareBlock";
import { weaponDefaultProps } from "@/types/weapon";

type weaponCompare = {
  firstCompareValue?: weaponDefaultProps | null;
  secondCompareValue?: weaponDefaultProps | null;
  firstSetValue: React.Dispatch<
    React.SetStateAction<weaponDefaultProps | null | undefined>
  >;
  secondSetValue: React.Dispatch<
    React.SetStateAction<weaponDefaultProps | null | undefined>
  >;
  // firstSetValue: any | null;

  // secondSetValue: any;
};

const WeaponCompare = ({
  firstCompareValue,
  secondCompareValue,
  firstSetValue,
  secondSetValue,
}: weaponCompare) => {
  const handle1stClose = () => {
    firstSetValue(null);
  };

  const handle2ndClose = () => {
    secondSetValue(null);
  };

  return (
    <section className="flex flex-row justify-between pt-10 px-6">
      <div className="w-5/12">
        {firstCompareValue && (
          <CompareBlock weapon={firstCompareValue} setClose={handle1stClose} />
        )}
      </div>
      <div className="w-5/12">
        {secondCompareValue && (
          <CompareBlock
            weapon={secondCompareValue}
            setClose={handle2ndClose}
            position="right"
          />
        )}
      </div>
    </section>
  );
};

export default WeaponCompare;
