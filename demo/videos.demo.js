require("isomorphic-fetch");

const VIDEOS_URL = "https://fakes.piecioshka.io/videos";

async function makeRequest(url, options) {
  const response = await fetch(url, options);
  return response.json();
}

async function main() {
  const videos = await makeRequest(VIDEOS_URL);
  console.log(JSON.stringify(videos, null, 4));
}

main();
