// @flow

import assert from 'assert';
import { describe, it } from 'mocha';

import score from '../src/index.js';

describe('check_guessed_score', () => {
  it('test correct guess', () => {
    const guessedScore = '1:0';
    const realScore = '1:0';
    const actual = score(guessedScore, realScore);
    const expected = 2;
    assert.equal(actual, expected, 'If score was guessed correctly function must return 2');
  });
  it('test correct guess that first team win', () => {
    const guessedScore = '3:1';
    const realScore = '1:0';
    const actual = score(guessedScore, realScore);
    const expected = 1;
    assert.equal(actual, expected, 'If winner was guessed correctly function must return 1');
  });
  it('test correct guess that second team win', () => {
    const guessedScore = '3:4';
    const realScore = '1:3';
    const actual = score(guessedScore, realScore);
    const expected = 1;
    assert.equal(actual, expected, 'If winner was guessed correctly function must return 1');
  });
  it('test correct guess about draw', () => {
    const guessedScore = '3:3';
    const realScore = '1:1';
    const actual = score(guessedScore, realScore);
    const expected = 1;
    assert.equal(actual, expected, 'If draw was guessed correctly function must return 1');
  });
  it('test wrong guess', () => {
    const guessedScore = '3:3';
    const realScore = '1:2';
    const actual = score(guessedScore, realScore);
    const expected = 0;
    assert.equal(actual, expected, 'If was made wrong guess function must return 0');
  });
});
