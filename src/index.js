// @flow

const getScore = (data) => {
  try {
    let [first, second] = data.split(':');
    if (first === '' || second === '') {
      throw new SyntaxError('Your data is wrong. Correct format must be "5:5"');
    }
    if (isNaN(first) || isNaN(second)) {
      throw new SyntaxError('Score must be a number. Correct format must be "5:5"');
    }
    first = Number(first);
    second = Number(second);
    if (first < 0 || second < 0) {
      throw new SyntaxError('The score can\'t be less than 0. Correct format must be "5:5"');
    }
    return [first, second];
  }
  catch (e) {
    console.log(e);
  }
};

const score = (guessedScore, realScore) => {
  try {
    const [guessedScoreFirst, guessedScoreSecond] = getScore(guessedScore);
    const [realScoreFirst, realScoreSecond] = getScore(realScore);
    if (guessedScoreFirst === realScoreFirst && guessedScoreSecond === realScoreSecond) {
      return 2;
    } else if (guessedScoreFirst === guessedScoreSecond && realScoreFirst === realScoreSecond) {
      return 1;
    } else if (guessedScoreFirst < guessedScoreSecond && realScoreFirst < realScoreSecond) {
      return 1;
    } else if (guessedScoreFirst > guessedScoreSecond && realScoreFirst > realScoreSecond) {
      return 1;
    }
    return 0;
  } catch (e) {
    if (e.name === SyntaxError) {
      console.log(e);
    }
  }
};

export default score;
