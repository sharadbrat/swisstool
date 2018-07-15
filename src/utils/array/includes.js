export function includes(arr, smth) {
  return !!arr.map(item => item === smth).find(item => item);
}
