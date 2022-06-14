require("isomorphic-fetch");

async function main() {
  const response = await fetch('https://fakes.herokuapp.com/videos');
  const videos = await response.json();
  console.log({ videos });
}

main();
