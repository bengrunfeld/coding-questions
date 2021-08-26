// Print a Pyramid of n stars at the base

const buildPyramid = base => {
  if (base % 2 === 0) {
    console.log("Error - odd numbers only!")
    return
  } 

  let spaces = Math.floor(base / 2)
  const spaceChar = "\xa0"

  let stars = 1
  const star = "*"

  for(let i = 1; i <= base; i = i + 2) {
    console.log(spaceChar.repeat(spaces), star.repeat(stars));
    spaces--;
    stars = stars + 2
  }
}


buildPyramid(9)