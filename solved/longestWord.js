

const findLongestWord = (word, dict) => {
  const wordObj = {}
  let longestWord = ""
  let maxLength = 0

  const wordArr = word.split("")

  wordArr.forEach(item => wordObj[item] = true)

  dict.forEach(item => {
    const letters = item.split("")

    const wordContainsLetters = letters.reduce((isMatch, letter) => {
      return wordObj[letter] ? true : false;
    }, true)

    if (wordContainsLetters) {
      if (letters.length > maxLength) {
        longestWord = item
      }
    }
  })

  return longestWord
}

const tests = () => {
  // const dict = ["to", "toe", "toes", "otto", "oteto"]
  //const string = "ote"

  const dict = ["to","toe","toes","doe","dog","god","dogs","book","banana"]
  const string = "dsetog"

  const result = findLongestWord(string, dict)

  console.log(result)

  if (result === dict[4]) {
    console.log("Tests pass")
  } else {
    console.log("Tests fail")
  }
}

tests()