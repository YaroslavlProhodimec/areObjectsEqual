// const obj1 = { b: 2, a: 1 };
// const sortedJsonString1 = JSON.stringify(obj1, Object.keys(obj1).sort());
//
// console.log(sortedJsonString1, "sortedJsonString1");
//

const areObjectsEqual = (obj1, obj2) => {
  const sortKeyOne = Object.keys(obj1).sort();
  const sortKeyTwo = Object.keys(obj2).sort();

  if (sortKeyOne.length !== sortKeyTwo.length) {
    return false;
  }

  for (let i = 0; i < sortKeyOne.length; i++) {
    let char = sortKeyOne[i];

    if (obj1[char] !== obj2[char]) {
      return false;
    }
  }
  return true;
};
const obj1 = { b: 2, a: 1 };
const obj2 = { a: 1, b: 2 };
const obj3 = { a: 1, b: 3 };

console.log(areObjectsEqual(obj1, obj2));
console.log(areObjectsEqual(obj1, obj3));
