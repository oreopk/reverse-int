module.exports = function reverse (n) {
    const reversedStr = Math.abs(n).toString().split('').reverse().join('');
  return Number(reversedStr);
}
