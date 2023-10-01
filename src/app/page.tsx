import WeaponContainer from "@/components/WeaponContainer/WeaponContainer";
import { weaponDefaultProps } from "@/types/weapon";
import fetchURLData from "@/utils/fetchURLData";

// const weaponCategoryTypes = {
//   Pistols: "EEquippableCategory::Sidearm",
//   SMGs: "EEquippableCategory::SMG",
//   Shotguns: "EEquippableCategory::Shotgun",
//   Rifles: "EEquippableCategory::Rifle",
//   "Sniper Rifles": "EEquippableCategory::Sniper",
//   "Heavy Weapons": "EEquippableCategory::Heavy",
// };

const weaponCategoryAction = {
  PISTOL: "Pistols",
  SMG: "SMGs",
  SHOTGUN: "Shotguns",
  RIFFLE: "Rifles",
  SNIPER: "Sniper Rifles",
  HEAVY: "Heavy Weapons",
  MELEE: "Melee",
};

// type weaponCategory = typeof weaponCategoryTypes
// type weaponCategoryKey = keyof weaponCategory

// type weaponCategoryProps = (typeof weaponCategoryTypes)[weaponCategoryKey]

// const currentWeaponCategoryTypes<weaponCategoryProps> = weaponCategoryTypes;

const filteredWeapon = (
  weaponCategory: string,
  weaponData: Array<weaponDefaultProps>
) => {
  return weaponData && weaponData.length > 0
    ? weaponData.filter(
        (weapon) =>
          weapon.shopData?.category === weaponCategory ||
          weapon.category === `EEquippableCategory::${weaponCategory}`
      )
    : [];
};

export default async function Home() {
  const { data: weaponData } = await fetchURLData("v1/weapons");
  // const { data: weaponData } = weaponsData;

  const arrangedWeapon = {
    pistols: filteredWeapon(weaponCategoryAction.PISTOL, weaponData),
    smgs: filteredWeapon(weaponCategoryAction.SMG, weaponData),
    shotguns: filteredWeapon(weaponCategoryAction.SHOTGUN, weaponData),
    rifles: filteredWeapon(weaponCategoryAction.RIFFLE, weaponData),
    snipers: filteredWeapon(weaponCategoryAction.SNIPER, weaponData),
    heavies: filteredWeapon(weaponCategoryAction.HEAVY, weaponData),
    melees: filteredWeapon(weaponCategoryAction.MELEE, weaponData),
  };

  return (
    <main className="container m-auto bg-zinc-800 p-2 md:p-6 rounded-xl">
      {/* {weaponData.status === 200 && ( */}
      {/* <WeaponSelection weapons={arrangedWeapon} /> */}
      <WeaponContainer weapons={arrangedWeapon} />
      {/* )} */}
    </main>
  );
}
