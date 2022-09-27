const CLIENT_ID = "uexSQCfY-iE2JuMjnWlaB3J3sAim8GwaRJ0LkaPWYSI";

export const fetchNewData = async (newPage) => {
  const url = `https://api.unsplash.com/photos/?page=${newPage}&client_id=${CLIENT_ID}`;
  const response = await fetch(url, { method: "get" });
  return response;
};