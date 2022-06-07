# fakes

Use `json-server` to build CRUD service with fake data.

## Demo 🚀

* <https://fakes.herokuapp.com>
  * With persistence
  * Use [@typicode](https://github.com/typicode/) package [json-server](https://github.com/typicode/json-server)
* <https://my-json-server.typicode.com/piecioshka/fakes/>
  * Without persistence
  * Use [@typicode](https://github.com/typicode/) service [my-json-server](https://my-json-server.typicode.com)

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
7. Deploy to Heroku

## Tools to generate random values

* https://fakerjs.dev/
  + https://cdnjs.cloudflare.com/ajax/libs/Faker/3.1.0/faker.js (is used on https://json-schema-faker.js.org/)
* https://chancejs.com/
