function findByElement(name, element, db) {
  try {
    var property = Object.keys(element)[0];
    var value = element[property];
    let allData = db.get(`${name}s`);
    let foundData;
    Object.keys(allData).forEach((key) => {
      let dataElement = allData[key];
      if (dataElement[property] === value) {
        foundData = dataElement;
      }
    });
    return foundData;
  } catch (e) {
    console.log(e.message);
  }
}

module.exports = { findByElement };
