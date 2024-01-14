// Generate random password

//Step 1: Change variables type
//Step 2: Use += instead of key = key +...

const GeneratePassword = (alphabet, length) => {
  const MAX = alphabet.length;
  let key = '';
  for (let i = 0; i < length; i++) {
    const Index = Math.floor(Math.random() * MAX);
    key += alphabet[Index];
  }
  return key;
};

module.exports = GeneratePassword;
