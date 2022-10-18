const strength = (passLength, hasUp, hasNum, hasSym) => {
  let score = 0;
  score = hasUp ? score + 5 : score;
  score = hasNum ? score + 5 : score;
  score = hasSym ? score + 5 : score;

  let strengthscore = score + parseInt(passLength);

  if (strengthscore > 35) {
    return {
      score: "VERY STRONG",
      scoreArr: [1, 1, 1, 1],
    };
  } else if (strengthscore > 30) {
    return {
      score: "STRONG",
      scoreArr: [1, 1, 1, 0],
    };
  } else if (strengthscore > 25) {
    return {
      score: "MEDIUM",
      scoreArr: [1, 1, 0, 0],
    };
  } else {
    return {
      score: "WEAK",
      scoreArr: [1, 0, 0, 0],
    };
  }
};

export default strength;
