export const costFree = (price: number | undefined) => {
  return price && price !== 0 ? `☐${price}` : "free";
};
