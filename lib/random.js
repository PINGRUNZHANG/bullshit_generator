// 返回一定范围内的整数，用来控制随机生成的文章和段落的长度范围；
export function randomInt(min = 0, max = 100) {
  const p = Math.random();
  return Math.floor(min * (1 - p) + max * p);
}

// 函数能够从语料库的数组中随机地选择元素，并返回。
export function createRandomPicker(arr) {
  arr = [...arr]; // copy 数组，以免修改原始数据
  function randomPick() {
    const len = arr.length - 1;
    const index = randomInt(0, len);
    const picked = arr[index];
    [arr[index], arr[len]] = [arr[len], arr[index]];
    return picked;
  }
  randomPick(); // 抛弃第一次选择结果
  return randomPick;
}