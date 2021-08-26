const findFirstUniqueChar = string => {
  const chars = string.split("")

   return chars.reduce((a, b, i) => {
    if (a !== "") return a

    return (b !== chars[i - 1] && b !== chars[i + 1]) ? b : ""
   }, "")
}

const tests = () => {
  const firstUniqueChar = findFirstUniqueChar("aabbccdee")

  console.log('Result:', firstUniqueChar)

  if (firstUniqueChar === "d") {
    console.log("Tests passed")
  } else {
    console.log("Tests failed")
  }
}

tests()