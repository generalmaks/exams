// Count words in a string
//Step 1: Remove useless code
//Step 2: Rename variables and function

wordsCount = function (String) {
  wordsInString = 0;
  flag = false;
  for (char of String) {
    if (!flag) {
      if (char !== ' ') {
        flag = true;
        wordsInString++;
      }
    } else {
      if (char === ' ') {
        flag = false;
      }
    }
  }
  return wordsInString;
};

console.log(wordsCount("a a a a a a bb b"));
module.exports = wordsCount;
