// Emma is playing a new mobile game that starts with consecutively 
// numbered clouds. Some of the clouds are thunderheads and others 
// are cumulus. She can jump on any cumulus cloud having a number that 
// is equal to the number of the current cloud plus or . 
// She must avoid the thunderheads. Determine the minimum number of 
// jumps it will take Emma to jump from her starting postion to the 
// last cloud. It is always possible to win the game. For each game, 
// Emma will get an array of clouds numbered if they are safe or if 
// they must be avoided. For example, indexed from. The number on each 
// cloud is its index in the list so she must avoid the clouds at indexes
// and . She could follow the following two paths:  or . The first path 
// takes  jumps while the second takes .


const c = [0, 0, 1, 0, 0, 1, 0];

let i = 0;

const shortestPathSteps = c.reduce((a, b, j) => {
  if (i === c.length - 1) return a;

  const cloudPlusOne = c[i + 1];
  const cloudPlusTwo = c[i + 2];

  if (cloudPlusTwo === 0) {
    i = i + 2;
    return a + 1;
  }

  if (cloudPlusOne === 0) {
    i = i + 1;
    return a + 1;
  }

  throw "Should not get here";
}, 0);

console.log(shortestPathSteps);

/*

SOLUTION:
Always take 2 steps forward if you can.

*/
