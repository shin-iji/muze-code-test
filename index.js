// Length of the Nested Array
exports.getLength = (array) => {
  let length = 0;
  array.forEach((arr) => {
    if (Array.isArray(arr)) {
      length += this.getLength(arr);
    } else {
      length += 1;
    }
  });
  return length;
};

// Recursion: Palindrome Word
exports.isPalindrome = (word) => {
  // Loop for check word is all lowercase
  for (let i = 0; i < word.length; i++) {
    if (word[i] === word[i].toUpperCase()) {
      return false;
    }
  }

  let firstChar = word[0];
  let lastChar = word[word.length - 1];
  let middleChar = word.slice(1, word.length - 1);

  if (word.length < 2) {
    return true;
  }

  if (firstChar === lastChar) {
    return this.isPalindrome(middleChar);
  }

  return false;
};

// Temperature Converter
exports.convert = (temp) => {
  let val = temp.split("°")[0];
  let tempType = temp.split("°")[1]; // C or F

  if (tempType === "C") {
    let f = (val * 9) / 5 + 32;
    return `${Math.round(f)}°F`;
  } else if (tempType === "F") {
    let c = ((val - 32) * 5) / 9;
    return `${Math.round(c)}°C`;
  } else {
    return "Error";
  }
};

// Plant Trees
exports.plantTrees = (w, l, g) => {
  let trees = [];
  let length = w * 2 - 2 + (l * 2 - 2);
  let tree = 0;

  for (let i = 0; i < length; i++) {
    trees.push(0);
  }

  let i = 0;
  while (i < length) {
    trees[i] = 1;
    tree += 1;
    i += g + 1;
  }

  if (tree === length) {
    return tree;
  } else if (trees[0] === 1 && trees[w - 1] === 1 && trees[w + l - 2] === 1 && trees[w + l + w - 3] === 1) {
    return tree;
  } else if (trees[0] === 1 && trees[w + l - 2] === 1) {
    return tree;
  } else {
    return 0;
  }
};
