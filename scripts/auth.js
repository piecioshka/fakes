require("isomorphic-fetch");
const sha1 = require("js-sha1");

async function auth(login, password) {
  const hashedPassword = sha1(password);
  const response = await fetch("https://fakes.piecioshka.io/users/");
  const users = await response.json();
  const authorizedUser = users.find((user) => {
    return user.login === login && user.password === hashedPassword;
  });
  console.log({ authorizedUser });
}

auth("kepgaw", "Yesenia123");
