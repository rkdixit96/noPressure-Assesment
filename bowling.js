function getScore(arr) {
  const strikeValue = 10;
  const numberOfFrames = 10;

  // Initializations
  let score = 0;
  const frameSums = [];
  let currFrame = 0;
  let frameDone = false;
  const strikeIndex = [];
  let frameCount = 0;
  frameSums[currFrame] = 0;

  for (let i = 0; i < arr.length; i += 1) {
    // Check for strike, if yes push current frame number and strike index to array
    if (arr[i] === strikeValue && frameCount === 0) {
      frameSums[currFrame] += strikeValue;
      frameDone = true;
      strikeIndex.push([i, currFrame]);
    } else {
      frameSums[currFrame] += arr[i];
      frameCount += 1;
    }

    if (frameDone || frameCount === 2) {
      // Add spare bonus
      if (frameSums[currFrame] === strikeValue && frameCount === 2) {
        frameSums[currFrame] += arr[i + 1];
      }
      currFrame += 1;
      frameSums[currFrame] = 0;
      frameCount = 0;
      frameDone = false;
    }
  }

  // Add bonus score for all strike frames
  for (let k = 0; k < strikeIndex.length; k += 1) {
    frameSums[strikeIndex[k][1]] += arr[strikeIndex[k][0] + 1] + arr[strikeIndex[k][0] + 2];
  }

  // Sum all frame sums
  for (let j = 0; j < numberOfFrames; j += 1) {
    score += frameSums[j];
  }


  return score;
}


module.exports = getScore;
