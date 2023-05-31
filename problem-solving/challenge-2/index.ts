export const diceFacesCalculator = (
  dice1: number,
  dice2: number,
  dice3: number
): number => {
  const diceArr = [dice1, dice2, dice3];
  const count: number[] = [];

  if((dice1 < 1 || dice2 < 1 || dice3 < 1) || (dice1 > 6 || dice2 > 6 || dice3 > 6)) throw new Error('Dice out of number range')

  for(const num of diceArr) {
    count[num] = count[num] ? count[num] + 1 : 1
  }

  if(count.includes(1) && !count.includes(2)) return Math.max(...diceArr)
  if(count.includes(2)) return dice1 * 2
  if(count.includes(3)) return dice1 * 3

  return 0;
};
