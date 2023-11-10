"use client";

import WeaponHeader from "@/components/ui/WeaponHeader/WeaponHeader";
import WeaponItem from "@/components/ui/WeaponItem/WeaponItem";
import { weaponDefaultProps } from "@/types/weapon";
import { useState } from "react";

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
  const [showMobileWeaponItem, setShowMobileWeaponItem] = useState<string>("");

  console.log("showMobileWeaponItem", showMobileWeaponItem);

  return (
    <section>
      <h1 className="text-zinc-400 text-2xl text-center pb-8">Weapons</h1>
      <p className="text-zinc-400 pb-4 text-center italic text-xs">
        *Click on the weapons to show the information on the left side below,
        click again to show the information on the right side below.*
      </p>
      <div className="flex flex-col md:flex-row flex-wrap">
        <div className="w-full md:w-1/5 md:px-6 flex flex-col gap-2 ">
          <WeaponHeader
            value="pistol"
            selectedValue={showMobileWeaponItem}
            handleClick={setShowMobileWeaponItem}
          >
            Sidearms
          </WeaponHeader>
          <div
            className={`max-md:grid max-md:grid-cols-2 gap-2 transition-all group/pistol ${
              showMobileWeaponItem === "pistol"
                ? `is-${showMobileWeaponItem} max-md:h-[60vh]`
                : "max-md:h-0 max-md:opacity-0 hidden"
            }`}
          >
            {weapons.pistols?.map((pistol) => (
              <WeaponItem
                key={pistol.uuid}
                weapon={pistol}
                weaponType="pistol"
                handleWeaponClick={handleWeaponClick}
                isShow={showMobileWeaponItem === "pistol"}
              />
            ))}
          </div>
        </div>
        <div className="w-full md:w-3/5 grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 md:gap-4 md:px-6 grow">
          <div className="flex flex-col md:gap-2">
            <div className="flex flex-col gap-2 ">
              <WeaponHeader
                value="smg"
                selectedValue={showMobileWeaponItem}
                handleClick={setShowMobileWeaponItem}
              >
                SMGS
              </WeaponHeader>
              <div
                className={`max-md:grid max-md:grid-cols-2 gap-2 transition-all group ${
                  showMobileWeaponItem === "smg"
                    ? `is_${showMobileWeaponItem} max-md:h-[20vh]`
                    : "max-md:h-0 max-md:opacity-0 hidden"
                }`}
              >
                {weapons.smgs?.map((smg) => (
                  <WeaponItem
                    key={smg.uuid}
                    weapon={smg}
                    weaponType="smg"
                    handleWeaponClick={handleWeaponClick}
                    isShow={showMobileWeaponItem === "smg"}
                  />
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-2 ">
              <WeaponHeader
                value="shotgun"
                selectedValue={showMobileWeaponItem}
                handleClick={setShowMobileWeaponItem}
              >
                SHOTGUNS
              </WeaponHeader>
              <div
                className={`max-md:grid max-md:grid-cols-2 gap-2 transition-all group ${
                  showMobileWeaponItem === "shotgun"
                    ? `is_${showMobileWeaponItem} max-md:h-[20vh]`
                    : "max-md:h-0 max-md:opacity-0 hidden"
                }`}
              >
                {weapons.shotguns?.map((shotgun) => (
                  <WeaponItem
                    key={shotgun.uuid}
                    weapon={shotgun}
                    weaponType="shotgun"
                    handleWeaponClick={handleWeaponClick}
                    isShow={showMobileWeaponItem === "shotgun"}
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2 ">
            <WeaponHeader
              value="rifles"
              selectedValue={showMobileWeaponItem}
              handleClick={setShowMobileWeaponItem}
            >
              Rifles
            </WeaponHeader>
            <div
              className={`max-md:grid max-md:grid-cols-2 gap-2 transition-all group ${
                showMobileWeaponItem === "rifles"
                  ? `is_${showMobileWeaponItem} max-md:h-[40vh]`
                  : "max-md:h-0 max-md:opacity-0 hidden"
              }`}
            >
              {weapons.rifles?.map((rifle) => (
                <WeaponItem
                  key={rifle.uuid}
                  weapon={rifle}
                  weaponType="rifles"
                  handleWeaponClick={handleWeaponClick}
                  isShow={showMobileWeaponItem === "rifles"}
                />
              ))}
            </div>
          </div>
          <div className="flex flex-col md:gap-2">
            <div className="flex flex-col gap-2 ">
              <WeaponHeader
                value="sniper"
                selectedValue={showMobileWeaponItem}
                handleClick={setShowMobileWeaponItem}
              >
                Sniper Riffles
              </WeaponHeader>
              <div
                className={`max-md:grid max-md:grid-cols-2 gap-2 transition-all group ${
                  showMobileWeaponItem === "sniper"
                    ? `is_${showMobileWeaponItem} max-md:h-[20vh]`
                    : "max-md:h-0 max-md:opacity-0 hidden"
                }`}
              >
                {weapons.snipers?.map((sniper) => (
                  <WeaponItem
                    key={sniper.uuid}
                    weapon={sniper}
                    weaponType="sniper"
                    handleWeaponClick={handleWeaponClick}
                    isShow={showMobileWeaponItem === "sniper"}
                  />
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-2 ">
              <WeaponHeader
                value="machine"
                selectedValue={showMobileWeaponItem}
                handleClick={setShowMobileWeaponItem}
              >
                Machine guns
              </WeaponHeader>
              <div
                className={`max-md:grid max-md:grid-cols-2 gap-2 transition-all group ${
                  showMobileWeaponItem === "machine"
                    ? `is_${showMobileWeaponItem} max-md:h-[20vh]`
                    : "max-md:h-0 max-md:opacity-0 max-md:hidden"
                }`}
              >
                {weapons.heavies?.map((heavy) => (
                  <WeaponItem
                    key={heavy.uuid}
                    weapon={heavy}
                    weaponType="machine"
                    handleWeaponClick={handleWeaponClick}
                    isShow={showMobileWeaponItem === "machine"}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/5 md:px-6 flex flex-col gap-2 max-md:pt-2">
          <WeaponHeader
            value="knife"
            selectedValue={showMobileWeaponItem}
            handleClick={setShowMobileWeaponItem}
          >
            Melee
          </WeaponHeader>
          <div
            className={`max-md:grid max-md:grid-cols-2 gap-2 transition-all group ${
              showMobileWeaponItem === "knife"
                ? `is_${showMobileWeaponItem} max-md:h-[20vh]`
                : "max-md:h-0 max-md:opacity-0 hidden"
            }`}
          >
            {weapons.melees?.map((melee) => (
              <WeaponItem
                key={melee.uuid}
                weapon={melee}
                weaponType="knife"
                handleWeaponClick={handleWeaponClick}
                isShow={showMobileWeaponItem === "knife"}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WeaponSelection;
