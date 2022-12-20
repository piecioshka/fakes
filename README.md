# fakes

Use `json-server` to build CRUD service with fake data.

## Demo 🚀

* <https://fakes.piecioshka.io>
  * With persistence
  * Use [@typicode](https://github.com/typicode/) package [json-server](https://github.com/typicode/json-server)
* <https://my-json-server.typicode.com/piecioshka/fakes/>
  * Without persistence
  * Use [@typicode](https://github.com/typicode/) service [my-json-server](https://my-json-server.typicode.com)

## Usage

```bash
curl https://fakes.piecioshka.io/videos
```

[Example in JavaScript](/demo/request.demo.js)

## Auth

Passwords are hashed using [SHA1](https://en.wikipedia.org/wiki/SHA-1).

* Online generator: https://github.com/emn178/js-sha1
* npm package: https://www.npmjs.com/package/js-sha1

[Example in JavaScript](/demo/auth.demo.js)

## How to run on production with `PM2`?

1. Create a file `ecosystem.config.js`
2. Run command:

  ```bash
  > cd fakes/
  > pm2 start ecosystem.config.js
  ```

## How to run local?

```bash
PORT=4000 npm start
```

## How to rebuild?

1. Select one of the schemas (`schemas/` directory)
2. Open https://json-schema-faker.js.org/
3. Paste copied schema to the left
4. Click the button on the right "Generate"
5. Copy result from the right
6. ... and paste to `db.json`
7. Deploy

## Tools to generate random values

* https://fakerjs.dev/
  + https://cdnjs.cloudflare.com/ajax/libs/Faker/3.1.0/faker.js
* https://chancejs.com/
