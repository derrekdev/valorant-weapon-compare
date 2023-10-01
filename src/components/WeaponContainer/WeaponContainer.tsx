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
  const [compareLeft, setCompareLeft] = useState<
    weaponDefaultProps | undefined | null
  >(null);
  const [compareRight, setCompareRight] = useState<
    weaponDefaultProps | undefined | null
  >(null);

  const handleWeaponClick = (uuid: weaponDefaultProps): void => {
    if (!compareLeft) {
      setCompareLeft(uuid);
    } else {
      setCompareRight(uuid);
    }
  };

  return (
    <div>
      <WeaponSelection
        weapons={weapons}
        handleWeaponClick={handleWeaponClick}
      />
      <WeaponCompare
        firstCompareValue={compareLeft}
        firstSetValue={setCompareLeft}
        secondCompareValue={compareRight}
        secondSetValue={setCompareRight}
      />
    </div>
  );
};

export default WeaponContainer;
