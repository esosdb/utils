function updateData(name, id, props, value, db) {
  let valueArr = Object.keys(value);
  let target = db.get(`${name}s.${id}`);
  if (!target) return console.error(`Not found ${name} with "${id}"`);
  for (let i = 0; i < valueArr.length; i++) {
    if (props[valueArr[i]].type === typeof value[valueArr[i]]) {
      target[valueArr[i]] = value[valueArr[i]];
      if (props.timestamp) {
        target["updatedAt"] = new Date();
      }
    } else {
      return console.error(
        `"${valueArr[i]}" type is not a "${props[valueArr[i]].type}"`
      );
    }
  }
  return db.set(`${name}s.${id}`, target, (cb) => {
    return cb[target.id];
  });
}

module.exports = { updateData };
