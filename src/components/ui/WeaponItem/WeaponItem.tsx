import { weaponDefaultProps } from "@/types/weapon";
import { costFree } from "@/utils/costFree";
import Image from "next/image";

type weaponItemProps = {
  weapon: weaponDefaultProps;
  weaponType?: "pistol" | string | null;
  handleWeaponClick?: (id: weaponDefaultProps) => void;
};

const WeaponItem = ({
  weapon,
  weaponType = null,
  handleWeaponClick,
}: weaponItemProps) => {
  return (
    <div
      className="bg-neutral-900 hover:bg-neutral-800 text-neutral-50 p-6 w-full flex flex-col h-40 justify-between cursor-pointer   transition-all"
      onClick={() => (handleWeaponClick ? handleWeaponClick(weapon) : null)}
    >
      <div className="flex items-center justify-center pt-4">
        <Image
          src={weapon.killStreamIcon}
          alt={weapon.displayName}
          width={150}
          height={150}
          className={`${weaponType === "pistol" ? "w-[80px]" : ""}`}
        />
      </div>
      <div className="flex flex-col xl:text-sm md:text-xs text-md">
        <span className="font-bold uppercase ">
          {costFree(weapon.shopData?.cost)}
        </span>
        <span className="uppercase ">{weapon.displayName}</span>
      </div>
    </div>
  );
};

export default WeaponItem;
