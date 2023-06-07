const { Database } = require("esosdb");
const db = new Database({ path: "./esosdb/db.json", space: 2 });
const { Schema, connect } = require("./src");
connect(db);

const User = new Schema(
  "user",
  {
    name: { type: "string", required: true },
    age: { type: "number", required: true },
  },
  true
);

User.create(
  {
    name: "esosdb",
    age: 1,
  },
  (data) => {
    console.log("New user created");
  }
);

User.findById("xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx", (data) => {
  console.log(data);
});

User.findByElement({ name: "esosdb" }, (data) => {
  console.log(data);
});

User.updateById("xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx", { age: 1 }, (data) => {
  console.log(data);
});

User.deleteById("xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx", (data) => {
  console.log(data);
});
