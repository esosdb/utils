# @esosdb/utils

## Description

Utils for esosdb

## Table of contents

- [Example Uses](#examples)
  - [Setup](#setup)
  - [create a data](#create)
  - [find a data by id](#findbyid)
  - [update a data by id](#updatebyid)
  - [delete a data by id](#deletebyid)

## Badges

[![NPM Downloads](https://img.shields.io/npm/dt/@esosdb/utils.svg?style=flat-square)](https://www.npmjs.com/package/@esosdb/utils)

## Install

> npm i @esosdb/utils

## Setup

CommonJS

```js
const { DataBase } = require("esosdb");
const { Schema, connect } = require("@esosdb/utils");
const db = new DataBase({
  path: "./esosdb/db.json", // this is default, can write the what you want
  space: 2, //shold be a number (default:0)
});
connect(db);
const { UserSchema } = require("./schemas/UserSchema.js"); //You must be import after connect() function
```

EsModule

```js
import { DataBase } from "esosdb";
import { Schema, connect } from "@esosdb/utils";
const db: DataBase = new DataBase({
  path: "./esosdb/db.json", // this is default, can write the what you want
  space: 2, //shold be a number (default:0)
});
connect(db);
import { UserSchema } from "./schemas/UserSchema.js"; //You must be import after connect() function
```

## Examples

- First example - create a schema

`new Schema("it's schema name and must be string",{"props' names":{type:string|boolean|number|object,required:boolean}},"timestamps must be boolean")`

```js
// ./schemas/UserSchema.js
let userProps = {
  name: { type: "string", required: true },
  age: { type: "number", required: true },
};

let User = new Schema("user", userProps, true);

module.exports = { User };
```

### create

- Create a data on User Schema

`User.create(value,callback?)`

```js
User.create({ name: "Esos", age: 1 }, (cb) => {
  console.log(cb); //return {id:"xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",name:"Esos",age:1,updatedAt:1970-01-01T01:00:00.000Z,createdAt:1970-01-01T01:00:00.000Z}
});
```

### findById

- Find a data by id on User Schema

`User.findById(id,callback?)`

```js
User.findById(
  "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx" /* it's created by automatically, you can create as manually, just add to Schema*/,
  (cb) => {
    console.log(cb); //return {name:"Esos", age:1}
  }
);
```

### updateById

- Update a data by id on User Schema

`User.updateById(id,new values,callback?)`

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

- Delete a data by id on User Schema

`User.deleteById(id,callback?)`

```js
User.deleteById("xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx", (cb) => {
  console.log(cb); //return true
});
```

### esosdb