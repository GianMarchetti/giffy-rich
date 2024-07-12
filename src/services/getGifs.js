import { gf_KEY, gf_URL } from "./setting";

const fromApiResponseToGifs = (apiResponse) => {
  const { data = [] } = apiResponse;
  if (Array.isArray(data)) {
    const gifs = data.map((image) => {
      const { images, title, id } = image;
      const { url } = images.downsized_medium;
      return { title, id, url };
    });
    return gifs;
  }
  return [];
};

export default function getGifs({
  limit = 25,
  rating = "g",
  keyword = "simpsons",
  page = 0,
} = {}) {
  const apiURl = `${gf_URL}/gifs/search?api_key=${gf_KEY}&q=${keyword}&limit=${limit}&offset=${
    page * limit
  }&rating=${rating}&lang=en`;

  return fetch(apiURl)
    .then((res) => res.json())
    .then(fromApiResponseToGifs);
}
