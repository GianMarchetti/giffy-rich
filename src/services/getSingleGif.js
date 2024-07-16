import { gf_KEY, gf_URL } from "./setting";

const fromApiResponseToGifs = (apiResponse) => {
  const { data } = apiResponse;
  const { images, title, id } = data;
  const { url } = images.downsized_medium;
  return { title, id, url };
};

export default function getSingleGif({ id }) {
  return fetch(`${gf_URL}/gifs/${id}?api_key=${gf_KEY}`)
    .then((res) => res.json())
    .then(fromApiResponseToGifs);
}
