import { copyDeep } from '../object'

export function clone(func) {
  const originalFn = func;

  const newFn = function() {
    return originalFn.apply(func, arguments)
  };

  for (const key in func) {
    if (func.hasOwnProperty(key)) {
      newFn[key] = copyDeep(this[key]);
    }
  }
  return newFn;
}
