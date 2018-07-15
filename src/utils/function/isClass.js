import { isFunction } from './isFunction';

export function isClass(smth) {
  return isFunction(smth) && /^class\s/.test(Function.prototype.toString.call(smth));
}