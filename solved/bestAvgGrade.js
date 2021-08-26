const findBestAvgGrade = (scores) => {
  const students = {};

  scores.forEach((item) => {
    if (!students[item[0]]) {
      students[item[0]] = [item[1]];
      return;
    }

    students[item[0]].push(item[1]);
  });

  return Object.keys(students).reduce((a, b) => {
    const sum = students[b].reduce((accum, item) => accum + parseInt(item), 0);
    const avg = sum / students[b].length;

    return avg > a ? avg : a;
  }, 0);
};

const tests = () => {
  const scores = [
    ["Bobby", "87"],
    ["Charles", "100"],
    ["Eric", "64"],
    ["Charles", "22"],
  ];

  const result = findBestAvgGrade(scores);
  console.log(result);

  if (result === 87) {
    console.log("Pass");
  } else {
    console.log("Fail");
  }
};

tests();
