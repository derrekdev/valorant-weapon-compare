import WeaponContainer from "@/components/WeaponContainer/WeaponContainer";
import { weaponDefaultProps } from "@/types/weapon";
import fetchURLData from "@/utils/fetchURLData";

const weaponCategoryAction = {
  PISTOL: "Pistols",
  SMG: "SMGs",
  SHOTGUN: "Shotguns",
  RIFFLE: "Rifles",
  SNIPER: "Sniper Rifles",
  HEAVY: "Heavy Weapons",
  MELEE: "Melee",
};

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

const sortWeapons = (
  weaponSort1st: weaponDefaultProps,
  weaponSort2nd: weaponDefaultProps
) => {
  if (
    weaponSort1st &&
    weaponSort1st.shopData &&
    weaponSort2nd &&
    weaponSort2nd.shopData
  ) {
    if (weaponSort1st.shopData?.cost > weaponSort2nd.shopData?.cost) return 1;
    else if (weaponSort2nd.shopData?.cost > weaponSort1st.shopData?.cost)
      return -1;
  }

  return 0;
};

export default async function Home() {
  const { data: weaponData } = await fetchURLData("v1/weapons");

  const arrangedWeapon = {
    pistols: filteredWeapon(weaponCategoryAction.PISTOL, weaponData).sort(
      sortWeapons
    ),
    smgs: filteredWeapon(weaponCategoryAction.SMG, weaponData).sort(
      sortWeapons
    ),
    shotguns: filteredWeapon(weaponCategoryAction.SHOTGUN, weaponData).sort(
      sortWeapons
    ),
    rifles: filteredWeapon(weaponCategoryAction.RIFFLE, weaponData).sort(
      sortWeapons
    ),
    snipers: filteredWeapon(weaponCategoryAction.SNIPER, weaponData).sort(
      sortWeapons
    ),
    heavies: filteredWeapon(weaponCategoryAction.HEAVY, weaponData).sort(
      sortWeapons
    ),
    melees: filteredWeapon(weaponCategoryAction.MELEE, weaponData).sort(
      sortWeapons
    ),
  };

  return (
    <main className="container m-auto bg-zinc-800 p-2 md:p-6 rounded-xl">
      <WeaponContainer weapons={arrangedWeapon} />
    </main>
  );
}
