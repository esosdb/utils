let database;

async function connect(db) {
  database = db;
}

function getDatabase() {
  return database;
}

module.exports = { connect, getDatabase };
