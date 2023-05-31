# @esosdb/utils

## Description

Utils for esosdb

Do you want more details? Check [Docs](https://esosdb.mbps.tk/esosdb-utils)

## Badges

[![NPM Downloads](https://img.shields.io/npm/dt/@esosdb/utils.svg?style=flat-square)](https://www.npmjs.com/package/@esosdb/utils)

## Install

> npm i @esosdb/utils

## Setup

CommonJS

```js
const { Database } = require("esosdb");
const { Schema, connect } = require("@esosdb/utils");
const db = new Database({
  path: "./esosdb/db.json", // this is default, can write the what you want
  space: 2, //shold be a number (default:0)
});
connect(db);
const { UserSchema } = require("./schemas/UserSchema.js"); //You must be import after connect() function
```

EsModule

```js
import { Database } from "esosdb";
import { Schema, connect } from "@esosdb/utils";
const db = new Database({
  path: "./esosdb/db.json", // this is default, can write the what you want
  space: 2, //shold be a number (default:0)
});
connect(db);
import { UserSchema } from "./schemas/UserSchema.js"; //You must be import after connect() function
```

## Examples

- First example - create a schema

```js
// ./schemas/UserSchema.js
let userProps = {
  name: { type: "string", required: true },
  age: { type: "number", required: true },
  //types are string|number|object|any[]|string[]|number[]
};

let User = new Schema("user", userProps, true);

module.exports = { User };
```

### create

`User.create(value,callback)`

```js
User.create({ name: "Esos", age: 1 }, (cb) => {
  console.log(cb); //return {id:"xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",name:"Esos",age:1,updatedAt:1970-01-01T01:00:00.000Z,createdAt:1970-01-01T01:00:00.000Z}
});
```

### findById

`User.findById(id,callback)`

```js
User.findById(
  "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx" /* it's created by automatically, you can create as manually, just add to Schema*/,
  (cb) => {
    console.log(cb); //return {name:"Esos", age:1}
  }
);
```

### findByElement

`User.findByElement(element,callback)`

```js
User.findByElement({ name: "Esos" }, (cb) => {
  console.log(cb); //return {name:"Esos", age:1}
});
```

### updateById

`User.updateById(id,new values,callback)`

```js
User.updateById(
  "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
  {
    name: "Esosdb",
    age: 2,
  },
  (cb) => {
    console.log(cb); //return {name:"Esosdb", age:2}
  }
);
```

### deleteById

`User.deleteById(id,callback)`

```js
User.deleteById("xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx", (cb) => {
  console.log(cb); //return true
});
```

#### esosdb
