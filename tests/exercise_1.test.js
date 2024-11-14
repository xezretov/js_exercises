const {
  formatPhoneNumber,
  truncateString,
  replaceWordInText,
  isStringEmpty,
  extractPriceFromText,
  createHashTag,
  changeTextCase
} = require('../src/1.String/exercise_1.js');
const {expect} = require("chai");

describe('Exercise 1', () => {
  describe('isStringEmpty Function', () => {
    it('isStringEmpty(\'abc\'); => false', () => {
      expect(isStringEmpty('abc')).to.equal(false);
    });
  });
});