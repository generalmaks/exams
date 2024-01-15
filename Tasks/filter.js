// Filter Array by type name
//Step 1: Rename function and variables
//Step 2: Rewriting a code for a better understanding

filterByType = (unfilteredArray, filterType) => {
  let filteredArray = [];
  for (const It of unfilteredArray) {
    if (typeof It == filterType) {
      filteredArray.push(It);
    }
  }
  return filteredArray;
};

module.exports = filterByType;
