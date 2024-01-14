// Sum all number values in dict
//Step 1: Change variables types
//Step 2: Remove unused statements

count = (obj) => {
  let sum = 0;
  const keys = Object.keys(obj);
  keys.forEach((key) => {
    const value = obj[key];
    if (typeof value === 'number') sum += value;
  });
  return sum;
};

module.exports = count;
