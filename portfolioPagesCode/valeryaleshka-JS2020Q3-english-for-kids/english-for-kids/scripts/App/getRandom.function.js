export default function getRandom() {
  const randomNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8];
  const newRandom = [];
  for (let j = 8; j > 0; j--) {
    const randInd = Math.floor(Math.random() * j);
    const randElem = randomNumbers.splice(randInd, 1)[0];
    newRandom.push(randElem);
  }

  return newRandom;
}
