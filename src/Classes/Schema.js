const { getDatabase } = require("../GlobalFunctions/connect");
const { createData } = require("./functions/create");
const { findData } = require("./functions/findById");
const { updateData } = require("./functions/updateById");
const { findByElement } = require("./functions/findByElement");
const { deleteData } = require("./functions/deleteById");

class Schema {
  name;
  db;
  props;
  timestamp;
  constructor(name, props, timestamp) {
    let database = getDatabase();
    if (!database)
      return console.error(
        "Database not found, use connect() to connect to database"
      );
    this.name = name;
    this.db = getDatabase();
    this.props = props;
    this.timestamp = timestamp;
    return this;
  }
  create(value, callback = () => {}) {
    return callback(
      createData(this.name, this.props, value, this.db, this.timestamp)
    );
  }
  findById(id, callback = () => {}) {
    return callback(findData(this.name, id, this.db));
  }
  findByElement(element, callback = () => {}) {
    return callback(findByElement(this.name, element, this.db));
  }
  updateById(id, value, callback = () => {}) {
    return callback(
      updateData(this.name, id, this.props, value, this.db, this.timestamp)
    );
  }
  deleteById(id, callback = () => {}) {
    return callback(deleteData(this.name, id, this.db));
  }
}

module.exports = { Schema };
