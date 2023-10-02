"use client";

import { weaponDefaultProps } from "@/types/weapon";
import { fetchImageURL } from "@/utils/fetchImageURL";
import Image from "next/image";
import { useMemo, useState } from "react";
import { CloseIcon } from "../SVGIcon/icons";
import CompareBlockItem from "../ui/CompareBlockItem/CompareBlockItem";
import DamageBlockItem from "../ui/DamageBlockItem/DamageBlockItem";

type damageRangeProps<TDamage> = {
  heads: Array<TDamage>;
  bodys: Array<TDamage>;
  legs: Array<TDamage>;
  range: Array<string>;
};

// const fetchImage = async (imageURL: string) => {
//   const res = await fetch(imageURL);
//   const imageBlob = await res.blob();
//   const imageObjectUrl = URL.createObjectURL(imageBlob);
//   return imageObjectUrl
// }

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

  const [selectedImage, setSelectedImage] = useState("");
  const [loadingImage, setLoadingImage] = useState(false);

  const damageRangesArray = useMemo(() => {
    const currentRanges: damageRangeProps<number> = {
      heads: [],
      bodys: [],
      legs: [],
      range: [],
    };

    if (
      weapon.weaponStats &&
      weapon.weaponStats.damageRanges &&
      weapon.weaponStats.damageRanges?.length > 0
    ) {
      weapon.weaponStats.damageRanges.map((damageRange) => {
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

  const currentImage = useMemo(() => {
    return !selectedImage ? weapon.displayIcon : selectedImage;
  }, [selectedImage]);

  const generateImage = async (imageUrl: string) => {
    // return fetchImageURL(imageUrl);
    setSelectedImage(await fetchImageURL(imageUrl));
  };

  // useEffect(() => {
  //   setLoadingImage(true);
  //   if (selectedImage) {
  //     setLoadingImage(false);
  //   }
  // }, [selectedImage]);

  console.log("selectedImage", selectedImage);
  console.log("loadingImage", loadingImage);
  // console.log("generateImage", generateImage);

  const imageLoader = ({ src }: { src: string | URL }) => {
    return `${src}`;
  };

  return (
    <>
      <div className="flex flex-row justify-between items-center bg-teal-900 text-emerald-50 uppercase font-medium border-b-[1px] text-center p-2">
        <span className="text-2xl font-bold uppercase grow text-left">
          {weapon.displayName}
        </span>
        <span className="text-sm">{weapon.shopData?.category}</span>
        <button
          className="w-8 h-8 rounded-full bg-rose-700 hover:bg-rose-400 float-right cursor-pointer mt-[-50px] mr-[-25px] hover:scale-125 transition-all"
          onClick={() => setClose()}
        >
          <CloseIcon className="w-8 h-8" />
        </button>
      </div>
      <div className="flex flex-col w-full">
        <div className="flex flex-col bg-zinc-500 items-center justify-center py-10 h-[300px] overflow-hidden">
          {currentImage ? (
            <Image
              loader={imageLoader}
              src={currentImage}
              alt={weapon.displayName}
              height={150}
              width={500}
              id="weapon-image"
              // onLoad={}\
              className="opacity-0 transition-all"
              onLoad={(image) => {
                document
                  .getElementById("weapon-image")
                  ?.classList.add("opacity-0");
              }}
              onLoadingComplete={(image) => {
                image.classList.remove("opacity-0");
              }}
            />
          ) : (
            <p>Loading images.</p>
          )}
        </div>
        <div className="flex flex-col bg-zinc-600 p-2 text-emerald-50 ">
          <div className="bg-zinc-800 p-2 flex flex-row justify-between">
            <span className="uppercase">Skins</span>
            <div className="w-4/5">
              <select
                className="w-full bg-transparent"
                defaultValue={weapon.defaultSkinUuid}
                onChange={(e) => {
                  // setSelectedImage("");
                  // setSelectedImage(e.target.value);
                  generateImage(e.target.value);
                }}
                // onSelect={(e) => {
                //   setSelectedImage(e.target);
                // }}
              >
                {weapon?.skins.map((skin) => (
                  <optgroup key={skin.uuid} label={skin.displayName}>
                    {skin.levels.map((level) => (
                      <option
                        key={level.uuid}
                        value={
                          !!level.displayIcon
                            ? level.displayIcon
                            : skin.displayIcon
                        }
                      >
                        {level.displayName}
                      </option>
                    ))}
                  </optgroup>
                ))}

                {/* {weapon?.skins.map((skin) => (
                  <option
                    key={skin.uuid}
                    value={
                      !!skin.displayIcon
                        ? skin.displayIcon
                        : skin.levels[0].displayIcon
                    }
                  >
                    {skin.displayName}
                  </option>
                ))} */}
              </select>
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="bg-zinc-600 p-2 text-emerald-50 uppercase">
            Primary Fire
          </div>
          {weapon.weaponStats && (
            <div className="grid grid-cols-2 gap-2 bg-zinc-700 p-2">
              <CompareBlockItem
                title="Fire Rate"
                stats={weapon.weaponStats.fireRate}
                metric="RDS/SEC"
              />
              <CompareBlockItem
                title="Run Speed"
                stats={weapon.weaponStats.runSpeedMultiplier}
                metric="M/SEC"
              />
              <CompareBlockItem
                title="Equip Speed"
                stats={weapon.weaponStats.equipTimeSeconds}
                metric="SEC"
              />
              <CompareBlockItem
                title="1st shot spread"
                stats={weapon.weaponStats.firstBulletAccuracy}
                metric="SEC"
              />
              <CompareBlockItem
                title="Reload Speed"
                stats={weapon.weaponStats.reloadTimeSeconds}
                metric="SEC"
              />
              <CompareBlockItem
                title="Magezine"
                stats={weapon.weaponStats.magazineSize}
                metric="RDS"
              />
            </div>
          )}
          <div className="bg-zinc-700">
            {damageRangesArray.range.length > 0 && (
              <>
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
                          {item.toFixed(1).replace(/[.,]0$/, "")}
                        </span>
                      ))}
                    </DamageBlockItem>
                  )}
                  {damageRangesArray.bodys.length > 0 && (
                    <DamageBlockItem title="body">
                      {damageRangesArray.bodys.map((item, index) => (
                        <span key={index} className="w-1/3">
                          {item.toFixed(1).replace(/[.,]0$/, "")}
                        </span>
                      ))}
                    </DamageBlockItem>
                  )}
                  {damageRangesArray.legs.length > 0 && (
                    <DamageBlockItem title="leg">
                      {damageRangesArray.legs.map((item, index) => (
                        <span key={index} className="w-1/3">
                          {item.toFixed(1).replace(/[.,]0$/, "")}
                        </span>
                      ))}
                    </DamageBlockItem>
                  )}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default CompareBlock;
