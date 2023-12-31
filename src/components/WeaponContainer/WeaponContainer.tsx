"use client";

import WeaponSelection from "@/components/feature/WeaponSelection/WeaponSelection";
import { weaponDefaultProps } from "@/types/weapon";
import { useState } from "react";
import WeaponCompare from "../feature/WeaponCompare/WeaponCompare";

type groupWeapon<TWeapon extends weaponDefaultProps[]> = {
  pistols: TWeapon;
  shotguns: TWeapon;
  smgs: TWeapon;
  rifles: TWeapon;
  snipers: TWeapon;
  heavies: TWeapon;
  melees: TWeapon;
};

const WeaponContainer = ({
  weapons,
}: {
  weapons: groupWeapon<weaponDefaultProps[]>;
}) => {
  const [compareLeft, setCompareLeft] = useState<weaponDefaultProps | null>(
    null
  );
  const [compareRight, setCompareRight] = useState<weaponDefaultProps | null>(
    null
  );

  const handleWeaponClick = (uuid: weaponDefaultProps): void => {
    if (!compareLeft) {
      setCompareLeft(uuid);
    } else {
      setCompareRight(uuid);
    }
  };

  const clearLeftComparision = () => {
    setCompareLeft(null);
  };

  const clearRightComparision = () => {
    setCompareRight(null);
  };

  return (
    <div>
      <WeaponSelection
        weapons={weapons}
        handleWeaponClick={handleWeaponClick}
      />
      <WeaponCompare
        firstCompareValue={compareLeft}
        firstSetValue={clearLeftComparision}
        secondCompareValue={compareRight}
        secondSetValue={clearRightComparision}
      />
      <p className="text-zinc-400 pt-10 text-center italic text-xs">
        * Note: when selecting a skin, some skins will not be accurate as this
        is rendered on an api which is not in my control.*
      </p>
    </div>
  );
};

export default WeaponContainer;
