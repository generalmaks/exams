// Validate person name
//Step 1: Rename variables
//Step 2: Rewrite code to not look that ugly

const isValidName = (name) => {
  if(!name || typeof name !== 'string' || name.length === 0 || name === '' || !name.includes(' ')){
    return false
  }
  {
    for (char of name) {
      if (char === ' ') continue;
      if (char.toLowerCase().charCodeAt(0) < 97 || char.toLowerCase().charCodeAt(0) > 122) {
        return false;
      }
    }
    return true;
  }
};

module.exports = isValidate;
