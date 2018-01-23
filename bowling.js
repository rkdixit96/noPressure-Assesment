function getScore(arr) {
  const strikeValue = 10;
  const numberOfFrames = 10;

  // Initializations
  let score = 0;
  const frameSums = [];
  let currFrame = -1;

  for (let i = 0; i < arr.length; i++) {
    if (i % 2 === 0) {
      currFrame += 1;
      frameSums[currFrame] = 0;
    }
    frameSums[currFrame] += arr[i];
  }

  // Sum all frame sums
  for (let j = 0; j < numberOfFrames; j++) {
    score += frameSums[j];
  }

  return score;
}


module.exports = getScore;
