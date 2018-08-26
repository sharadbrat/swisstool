import { isString } from '../string';

export function isNumber(n) {
  if(isString(n)) {
    n = n.replace(/,/g, '');
  }
  const parsed = parseFloat(n);
  return !isNaN(parsed) && isFinite(n);
}
