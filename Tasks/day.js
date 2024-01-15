// Get day number
//Step 1: Remove let i
//Step 2: Rename variables and function name


let daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

parseDay = (Str) => {
  for (i = 0; i < daysOfWeek.length; i++) {
    if (Str.startsWith(daysOfWeek[i].toLowerCase())) {
      return i + 1;
    }
  }
    return -1;
};


module.exports = parseDay;
