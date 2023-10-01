"use client";

import { weaponDefaultProps } from "@/types/weapon";
import Image from "next/image";
import { ReactNode, useMemo } from "react";
import { CloseIcon } from "../SVGIcon/icons";

type compareItemProps = {
  title: string;
  // weaponStats?: Array<number>;
  children?: ReactNode;
};

const CompareBlockItem = ({ title, children }: compareItemProps) => {
  return (
    <div className="w-full bg-zinc-800 text-zinc-100 font-bold flex flex-col">
      <div className="bg-zinc-600 w-full text-center p-2 ">{title}</div>
      <div className="flex flex-col bg-zinc-800 w-full text-center p-2 text-6xl">
        {children}
      </div>
    </div>
  );
};

const DamageBlockItem = ({ title, children }: compareItemProps) => {
  return (
    <div className="w-full bg-zinc-800 text-zinc-100 font-bold flex flex-row justify-between p-4">
      <div className="text-teal-200 uppercase w-1/4">{title}</div>
      <div className="grow text-center flex justify-around w-3/4">
        {children}
      </div>
    </div>
  );
};

type damageRangeProps<TDamage> = {
  heads: Array<TDamage>;
  bodys: Array<TDamage>;
  legs: Array<TDamage>;
  range: Array<string>;
};

const CompareBlock = ({
  weapon,
  position = "left",
  setClose,
}: {
  weapon: weaponDefaultProps;
  position?: "left" | "right";
  setClose: () => void;
}) => {
  if (!!!weapon) {
    return null;
  }

  const damageRangesArray = useMemo(() => {
    const currentRanges: damageRangeProps<number> = {
      heads: [],
      bodys: [],
      legs: [],
      range: [],
    };

    if (
      weapon.weaponStats?.damageRanges &&
      weapon.weaponStats?.damageRanges?.length > 0
    ) {
      weapon.weaponStats?.damageRanges.map((damageRange) => {
        currentRanges.heads.push(damageRange.headDamage);
        currentRanges.bodys.push(damageRange.bodyDamage);
        currentRanges.legs.push(damageRange.legDamage);
        currentRanges.range.push(
          `${damageRange.rangeStartMeters} - ${damageRange.rangeEndMeters} m`
        );
      });
    }

    return currentRanges;
  }, [weapon.weaponStats]);

  return (
    <>
      <div className="flex flex-row justify-between items-center bg-teal-900 text-emerald-50 uppercase font-medium border-b-[1px] text-center p-2">
        <span className="text-2xl font-bold uppercase grow text-left">
          {weapon.displayName}
        </span>
        <span className="text-sm">{weapon.shopData?.category}</span>
        <button
          className="w-8 h-8 rounded-full bg-rose-700 hover:bg-rose-400 float-right cursor-pointer mt-[-50px] mr-[-25px] "
          onClick={() => setClose()}
        >
          <CloseIcon className="w-8 h-8" />
        </button>
      </div>

      <div className="flex flex-col w-full">
        <div className="flex flex-col bg-zinc-500 items-center justify-center py-10 h-[300px]">
          <Image
            src={weapon.displayIcon}
            alt={weapon.displayName}
            height={250}
            width={500}
          />
        </div>
        <div className={`flex flex-col `}>
          <div className="bg-zinc-600 p-2 text-emerald-50 uppercase">
            Primary Fire
          </div>
          <div className="grid grid-cols-2 gap-2 bg-zinc-700 p-2">
            {weapon.weaponStats && (
              <>
                <CompareBlockItem title="Fire Rate">
                  <span className="text-4xl font-medium">
                    {weapon.weaponStats.fireRate}
                  </span>
                  <span className="text-xs font-normal">RDS/SEC</span>
                </CompareBlockItem>
                <CompareBlockItem title="Run Speed">
                  <span className="text-4xl font-medium">
                    {weapon.weaponStats.runSpeedMultiplier}
                  </span>
                  <span className="text-xs font-normal">M/SEC</span>
                </CompareBlockItem>
                <CompareBlockItem title="Equip Speed">
                  <span className="text-4xl font-medium">
                    {weapon.weaponStats.equipTimeSeconds}
                  </span>
                  <span className="text-xs font-normal">SEC</span>
                </CompareBlockItem>

                <CompareBlockItem title="1st shot spread">
                  <span className="text-4xl font-medium">
                    {weapon.weaponStats.firstBulletAccuracy}
                  </span>
                  <span className="text-xs font-normal">SEC</span>
                </CompareBlockItem>
                <CompareBlockItem title="Reload Speed">
                  <span className="text-4xl font-medium">
                    {weapon.weaponStats.reloadTimeSeconds}
                  </span>
                  <span className="text-xs font-normal">SEC</span>
                </CompareBlockItem>
                <CompareBlockItem title="Magezine">
                  <span className="text-4xl font-medium">
                    {weapon.weaponStats.magazineSize}
                  </span>
                  <span className="text-xs font-normal">RDS</span>
                </CompareBlockItem>
              </>
            )}
          </div>
          <div className="bg-zinc-700">
            <div className="bg-zinc-600 p-2 text-emerald-50 uppercase">
              Damage
            </div>
            <div className="bg-zinc-700 p-2 flex flex-col gap-[1px]">
              {damageRangesArray.range.length > 0 && (
                <DamageBlockItem title="">
                  {damageRangesArray.range.map((item, index) => (
                    <span key={index} className="w-1/3">
                      {item}
                    </span>
                  ))}
                </DamageBlockItem>
              )}
              {damageRangesArray.heads.length > 0 && (
                <DamageBlockItem title="head">
                  {damageRangesArray.heads.map((item, index) => (
                    <span key={index} className="w-1/3">
                      {item.toFixed(2).replace(/[.,]00$/, "")}
                    </span>
                  ))}
                </DamageBlockItem>
              )}
              {damageRangesArray.bodys.length > 0 && (
                <DamageBlockItem title="body">
                  {damageRangesArray.bodys.map((item, index) => (
                    <span key={index} className="w-1/3">
                      {item.toFixed(2).replace(/[.,]00$/, "")}
                    </span>
                  ))}
                </DamageBlockItem>
              )}
              {damageRangesArray.legs.length > 0 && (
                <DamageBlockItem title="leg">
                  {damageRangesArray.legs.map((item, index) => (
                    <span key={index} className="w-1/3">
                      {item.toFixed(2).replace(/[.,]00$/, "")}
                    </span>
                  ))}
                </DamageBlockItem>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CompareBlock;
