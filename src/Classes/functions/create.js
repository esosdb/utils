const {
  generateUniqueId,
} = require("../../GlobalFunctions/gerenerateUniqueId");

function createData(name, props, value, db) {
  let id = "";
  let crtProps = props;
  if (crtProps.id) {
    id = crtProps.id;
  } else {
    id = generateUniqueId();
  }
  let target = { id: id };
  let propArr = Object.keys(crtProps);
  for (let i = 0; i < propArr.length; i++) {
    if (propArr[i] === "timestamp" && crtProps[propArr[i]]) {
      target["createdAt"] = new Date();
      target["updatedAt"] = new Date();
    } else {
      if (crtProps[propArr[i]].required && value[propArr[i]]) {
        if (crtProps[propArr[i]].type === typeof value[propArr[i]]) {
          target[propArr[i]] = value[propArr[i]];
        } else {
          return console.error(
            `"${propArr[i]}" must be have '${crtProps[propArr[i]].type}' type`
          );
        }
      } else {
        return console.error(`"${propArr[i]}" has undefined value in "value"`);
      }
    }
  }
  return db.set(`${name}s.${target.id}`, target, (cb) => {
    return cb[target.id];
  });
}

module.exports = { createData };
