const word = "tea";

const list = ["eat", "bate", "ate", "mate"];

const isAnagram = (word1, word2) => {
  if (word1.length !== word2.length) return false;

  const word1Letters = word1.split("").sort();
  const word2Letters = word2.split("").sort();

  return word1Letters.reduce(
    (a, b, i) => (b !== word1Letters[i] ? false : a),
    true
  );
};

const anagrams = list.reduce(
  (a, b) => (isAnagram(word, b) ? [...a, b] : a),
  []
); 

console.log(anagrams);
