function deleteData(name, id, db) {
  try {
    db.delete(`${name}s.${id}`, (cb) => {
      return true;
    });
  } catch (e) {
    console.error(e.message);
  }
}
