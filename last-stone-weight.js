/**
 * @param {number[]} stones
 * @return {number}
 */
const iofMax = stones => {
  if (stones.length === 0) return -1
  let maxIdx = 0
  for (let i = 1; i < stones.length; i++) {
    if (stones[i] > stones[maxIdx]) {
      maxIdx = i
    }
  }
  return maxIdx
}

var lastStoneWeight = function(stones) {
    if (stones.length <= 1) return stones[0]
    let stone1 = stones.splice(iofMax(stones), 1);
    let stone2 = stones.splice(iofMax(stones), 1);
    stones.push(stone1 - stone2)
    return lastStoneWeight(stones)
};