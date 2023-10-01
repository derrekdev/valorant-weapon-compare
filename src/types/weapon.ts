export type weaponDefaultProps = {
  uuid: string;
  displayName: string;
  category: string;
  defaultSkinUuid: string;
  displayIcon: string;
  killStreamIcon: string;
  assetPath: string;
  weaponStats: weaponStatsProps;
  shopData?: shopDataProps;
  skins: Array<skinsProps>;
};

export type weaponStatsProps = {
  adsStats?: Array<adsStatsProps>;
  airBurstStats?: Array<airBurstStatsProps>;
  altFireType?: string;
  altShotgunStats?: Array<altShotgunStatsProps>;
  damageRanges?: Array<damageRangesProps>;
  equipTimeSeconds?: number;
  feature?: string;
  fireMode?: string;
  fireRate: number;
  firstBulletAccuracy: number;
  magazineSize: number;
  reloadTimeSeconds: number;
  runSpeedMultiplier: number;
  shotgunPelletCount: number;
  wallPenetration: string;
};

export type shopDataProps = {
  assetPath: string;
  canBeTrashed: boolean;
  category: string;
  categoryText: string;
  cost: number;
  gridPosition?: { row: number; column: number };
  image?: string | null;
  newImage?: string | null;
  newImage2?: string | null;
};

export type adsStatsProps = {
  zoomMultiplier?: number;
  fireRate?: number;
  runSpeedMultiplier?: number;
  burstCount?: number;
  firstBulletAccuracy?: number;
};

export type altShotgunStatsProps = {
  shotgunPelletCount?: number;
  burstRate?: number;
};

export type airBurstStatsProps = {
  shotgunPelletCount?: number;
  burstDistance?: number;
};

export type damageRangesProps = {
  rangeStartMeters: number;
  rangeEndMeters: number;
  headDamage: number;
  bodyDamage: number;
  legDamage: number;
};

export type skinsProps = {
  uuid: string;
  displayName: string;
  themeUuid: string;
  contentTierUuid: string;
  displayIcon: string;
  wallpaper: string;
  assetPath: string;

  chromas: Array<chromasProps>;

  levels: Array<levelsProps>;
};

export type chromasProps = {
  uuid: string;
  displayName: string;
  displayIcon: string;
  fullRender: string;
  swatch: string;
  streamedVideo: string;
  assetPath: string;
};

export type levelsProps = {
  uuid: string;
  displayName: string;
  levelItem: string;
  displayIcon: string;
  streamedVideo: string;
  assetPath: string;
};
