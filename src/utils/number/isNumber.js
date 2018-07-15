export function isNumber(n) {
  if(String.isString(n)) {
    n = n.replace(/,/g, '');
  }
  const parsed = parseFloat(n);
  return !isNaN(parsed) && isFinite(n);
}
