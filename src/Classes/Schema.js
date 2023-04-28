const { getDatabase } = require("../GlobalFunctions/connect");
const { createData } = require("./functions/create");
const { findData } = require("./functions/find");
const { updateData } = require("./functions/update");
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
  updateById(id, value, callback = () => {}) {
    return callback(
      updateData(this.name, id, this.props, value, this.db, this.timestamp)
    );
  }
  deleteById(id, callback = () => {}) {
    return callback(updateData(this.name, id, this.db));
  }
}

module.exports = { Schema };