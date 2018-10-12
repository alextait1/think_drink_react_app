import { shuffle } from './';

describe('util tests', () => {
  describe('shuffle tests', () => {
    it('does not return the same order of elements', () => {
      const actual = shuffle([1, 2, 3, 4], 0.5);
      const expected = [1, 2, 3, 4];
      expect(actual).not.toEqual(expected);
    });

    it('returns the expected order given the same randomizer', () => {
      const actual = shuffle([1, 2, 3, 4], 0.5);
      const expected = [1, 4, 2, 3];
      expect(actual).toEqual(expected);
    });
  });
});
