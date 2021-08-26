const findIndex = (arr, places, startIndex) => {
  if (startIndex + places < arr.length - 1) return startIndex + places - 1;

  // return (startIndex + places) % arr.length;

  const newIndex = (startIndex + places) % arr.length;
  return newIndex === 0 ? arr.length - 1 : newIndex - 1;
};

const elect = (arr, songLength, startIndex) => {
  console.log("->", arr, songLength, startIndex);

  if (arr.length === 1) return arr[0];

  const index = findIndex(arr, songLength, startIndex);

  console.log("=>", index);

  const newArr = [...arr];
  newArr.splice(index, 1);

  return elect(newArr, songLength, index);
};

const electStudent = (numStudents, songLength) => {
  const arr = [...new Array(numStudents)].map((item, i) => i + 1);

  return elect(arr, songLength, 0);
};

const tests = () => {
  const numStudents = 2;
  const songLength = 2;

  const result = electStudent(numStudents, songLength);
  console.log(result);

  if (false) {
    console.log("Pass");
  } else {
    console.log("Fail");
  }
};

tests();

/**
 * A group of students are sitting in a circle. The teacher is electing a new class president.
 * The teacher does this by singing a song while walking around the circle. After the song is
 * finished the student at which the teacher stopped is removed from the circle.
 *
 * Starting at the student next to the one that was just removed, the teacher resumes singing and walking around the circle.
 * After the teacher is done singing, the next student is removed. The teacher repeats this until only one student is left.
 *
 * A song of length k will result in the teacher walking past k students on each round. The students are numbered 1 to n. The teacher starts at student 1.
 *
 * For example, suppose the song length is two (k=2). And there are four students to start with (1,2,3,4). The first
 * student to go would be `2`, after that `4`, and after that `3`. Student `1` would be the next president in this example.
 *
 * @param n the number of students sitting in a circle.
 * @param k the length (in students) of each song.
 * @return the number of the student that is elected.
 */
