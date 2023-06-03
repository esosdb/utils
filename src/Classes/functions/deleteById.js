function deleteData(name, id, db) {
  try {
    return db.delete(`${name}s.${id}`, (cb) => {
      return true;
    });
  } catch (e) {
    console.error(e.message);
  }
}

module.exports = { deleteData };
