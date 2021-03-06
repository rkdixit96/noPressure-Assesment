function verifyInput(arr1, strikeValue, numberOfFrames) {
  if (arr1.length < numberOfFrames) {
    return false;
  }
  if (arr1.length > 21) {
    return false;
  }
  for (let l = 0; l < arr1.length; l += 1) {
    if (arr1[l] > strikeValue) {
      return false;
    }
    if (arr1[l] < 0) {
      return false;
    }
  }

  return true;
}

function getScore(arr) {
  const strikeValue = 10;
  const numberOfFrames = 10;

  if (!verifyInput(arr, strikeValue, numberOfFrames)) {
    return null;
  }

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
