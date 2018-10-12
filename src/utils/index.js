export const shuffle = (a, randomizer) => {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(randomizer * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
};
