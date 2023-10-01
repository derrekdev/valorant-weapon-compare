"use client";

import WeaponHeader from "@/components/ui/WeaponHeader/WeaponHeader";
import WeaponItem from "@/components/ui/WeaponItem/WeaponItem";
import { weaponDefaultProps } from "@/types/weapon";

type groupWeapon<TWeapon extends weaponDefaultProps[]> = {
  pistols: TWeapon;
  shotguns: TWeapon;
  smgs: TWeapon;
  rifles: TWeapon;
  snipers: TWeapon;
  heavies: TWeapon;
  melees: TWeapon;
};

const WeaponSelection = ({
  weapons,
  handleWeaponClick,
}: {
  weapons: groupWeapon<weaponDefaultProps[]>;
  handleWeaponClick?: (id: weaponDefaultProps) => void;
}) => {
  return (
    <section>
      <h1 className="text-zinc-400 text-2xl text-center pb-10">Weapons</h1>
      <div className="flex flex-col md:flex-row flex-wrap">
        <div className="w-full md:w-1/5 px-6 flex flex-col gap-2">
          <WeaponHeader>Sidearms</WeaponHeader>
          {weapons.pistols?.map((pistol) => (
            <WeaponItem
              key={pistol.uuid}
              weapon={pistol}
              weaponType="pistol"
              handleWeaponClick={handleWeaponClick}
            />
          ))}
        </div>
        <div className="w-full md:w-3/5 grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 gap-4 px-6 grow">
          <div className="flex flex-col gap-2">
            <div className="flex flex-col gap-2 ">
              <WeaponHeader>SMGS</WeaponHeader>
              {weapons.smgs?.map((smg) => (
                <WeaponItem
                  key={smg.uuid}
                  weapon={smg}
                  handleWeaponClick={handleWeaponClick}
                />
              ))}
            </div>
            <div className="flex flex-col gap-2 ">
              <WeaponHeader>SHOTGUNS</WeaponHeader>
              {weapons.shotguns?.map((shotgun) => (
                <WeaponItem
                  key={shotgun.uuid}
                  weapon={shotgun}
                  handleWeaponClick={handleWeaponClick}
                />
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-2 ">
            <WeaponHeader>Rifles</WeaponHeader>
            {weapons.rifles?.map((rifle) => (
              <WeaponItem
                key={rifle.uuid}
                weapon={rifle}
                handleWeaponClick={handleWeaponClick}
              />
            ))}
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex flex-col gap-2 ">
              <WeaponHeader>Sniper Riffles</WeaponHeader>
              {weapons.snipers?.map((sniper) => (
                <WeaponItem
                  key={sniper.uuid}
                  weapon={sniper}
                  handleWeaponClick={handleWeaponClick}
                />
              ))}
            </div>
            <div className="flex flex-col gap-2 ">
              <WeaponHeader>Machine guns</WeaponHeader>
              {weapons.heavies?.map((heavy) => (
                <WeaponItem
                  key={heavy.uuid}
                  weapon={heavy}
                  handleWeaponClick={handleWeaponClick}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/5 px-6 flex flex-col gap-2">
          <WeaponHeader>Melee</WeaponHeader>
          {weapons.melees?.map((melee) => (
            <WeaponItem
              key={melee.uuid}
              weapon={melee}
              weaponType="pistol"
              handleWeaponClick={handleWeaponClick}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WeaponSelection;
