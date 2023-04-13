require("isomorphic-fetch");
const sha1 = require("js-sha1");

const USERS_URL = "https://fakes.piecioshka.io/users/";
const EMAIL = "BrandonCrona30@hotmail.com";
const PASSWORD = "Virginia99";

async function makeRequest(url, options) {
  const response = await fetch(url, options);
  return response.json();
}

async function authenticate(email, password) {
  const hashedPassword = sha1(password);
  const users = await makeRequest(USERS_URL);
  const authenticatedUser = users.find((user) => {
    return user.email === email && user.password === hashedPassword;
  });
  console.log({ authenticatedUser });
}

authenticate(EMAIL, PASSWORD);
