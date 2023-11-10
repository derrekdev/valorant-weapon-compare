import { weaponDefaultProps } from "@/types/weapon";
import { costFree } from "@/utils/costFree";
import Image from "next/image";

type weaponItemProps = {
  weapon: weaponDefaultProps;
  weaponType?: "pistol" | string | null;
  handleWeaponClick?: (id: weaponDefaultProps) => void;
  isShow?: boolean;
};

const WeaponItem = ({
  weapon,
  weaponType = null,
  handleWeaponClick,
  isShow = true,
}: weaponItemProps) => {
  return (
    <div
      className={`bg-neutral-900 hover:bg-neutral-800 text-neutral-50 md:p-6 w-full flex flex-col md:h-40 justify-between cursor-pointer transition-all group/img-hover 
      ${
        isShow
          ? "max-md:delay-200 max-md:opacity-1 max-md:h-40 max-md:p-6"
          : "max-md:opacity-0 max-md:h-0 max-md:p-0"
      }
      
      `}
      onClick={() => (handleWeaponClick ? handleWeaponClick(weapon) : null)}
    >
      <div
        className={`md:flex items-center justify-center md:pt-4  ${
          isShow ? "max-md:pt-4 max-md:flex" : "max-md:hidden max-md:pt-0"
        }`}
      >
        <Image
          src={weapon.killStreamIcon}
          alt={weapon.displayName}
          width={150}
          height={150}
          className={`${
            weaponType === "pistol" || weaponType === "knife" ? "w-[80px]" : ""
          } group-hover/img-hover:scale-125 transition-all`}
        />
      </div>
      <div
        className={`flex flex-col xl:text-sm md:text-xs text-md ${
          isShow ? "max-md:flex" : "max-md:hidden"
        }`}
      >
        <span className="font-bold uppercase ">
          {costFree(weapon.shopData?.cost)}
        </span>
        <span className="uppercase ">{weapon.displayName}</span>
      </div>
    </div>
  );
};

export default WeaponItem;
