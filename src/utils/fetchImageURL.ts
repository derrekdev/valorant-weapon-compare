export const fetchImageURL = async (imageURL: string) => {
  const res = await fetch(imageURL);
  // const imageBlob = await res.blob();
  // const imageObjectUrl = URL.createObjectURL(imageBlob);

  console.log("imageObjectUrl", res);

  return res.url;
};
