require("isomorphic-fetch");

async function main() {
  const response = await fetch('https://fakes.piecioshka.io/videos');
  const videos = await response.json();
  console.log({ videos });
}

main();
