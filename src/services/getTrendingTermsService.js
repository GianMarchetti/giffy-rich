import { gf_KEY, gf_URL } from "./setting";

const fromApiResponseToGifs = (apiResponse) => {
  const { data = [] } = apiResponse;
  return data;
};

export default function getTrendingTerms() {
  const apiURl = `${gf_URL}/trending/searches?api_key=${gf_KEY}`;

  return fetch(apiURl)
    .then((res) => res.json())
    .then(fromApiResponseToGifs);
}
