export default async function fetchURLData(url: string) {
  try {
    const dataQuery = await fetch(`${process.env.DATA_API_URL}${url}`, {
      cache: "no-store",
    });

    if (!dataQuery.ok) {
      throw new Error("Failed to fetch data");
    }
    return await dataQuery.json();
  } catch (err) {
    return {
      data: {
        status: 500,
        error: "error",
      },
    };
  }
}
