const { createData } = require("./functions/create");
const { findData } = require("./functions/find");
const { updateData } = require("./functions/update");

class Schema {
  name;
  db;
  props;
  constructor(name, props, db) {
    this.name = name;
    this.db = db;
    this.props = props;
    console.log(db);
    return this;
  }
  create(value, callback = () => {}) {
    return callback(createData(this.name, this.props, value, this.db));
  }
  findById(id, callback = () => {}) {
    return callback(findData(this.name, id, this.db));
  }
  updateById(id, value, callback = () => {}) {
    return callback(updateData(this.name, id, this.props, value, this.db));
  }
  deleteById(id, callback = () => {}) {
    return callback(updateData(this.name, id, this.db));
  }
}

module.exports = { Schema };
