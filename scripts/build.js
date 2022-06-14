const events = require("../schemas/events.schema.json");
const photos = require("../schemas/photos.schema.json");
const posts = require("../schemas/posts.schema.json");
const products = require("../schemas/products.schema.json");
const tasks = require("../schemas/tasks.schema.json");
const tweets = require("../schemas/tweets.schema.json");
const users = require("../schemas/users.schema.json");
const videos = require("../schemas/videos.schema.json");

const globalSchema = {
  events,
  photos,
  posts,
  products,
  tasks,
  tweets,
  users,
  videos,
};

console.log(JSON.stringify(globalSchema, null, 4));
