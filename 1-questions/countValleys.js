const path = "DDUUDDUUUUDD";

let altitude = 0;

const numValleys = path.split("").reduce((a, b, i) => {
  const valleys = altitude === 0 && b === "D" ? ++a : a;

  if (b === "U") altitude++;
  if (b === "D") altitude--;

  return valleys;
}, 0);

console.log("=>", numValleys);

/* 
  Every step is either up (U) or down (D). Each U increments the altitude
  by one and each D decrements the altitude by one.

  A mountain is any series of steps that occurs above altitude 0, and a 
  valley is any series of steps that occurs below altitude 0

  Count the number of valleys in a path.
  
  Solution:
  If you are at altitude 0 and you start a D, increment the number of valleys

*/
