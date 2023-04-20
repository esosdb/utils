function findData(name, id, db) {
  try {
    return db.get(`${name}s.${id}`);
  } catch (e) {
    return console.error(e.message);
  }
}
module.exports = { findData };
