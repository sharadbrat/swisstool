import { isFunction, isClass, clone } from '../function';
import { isNumber } from '../number';
import { isObject } from './isObject';

export function copyDeep(source) {
  source = {source};

  let copy = JSON.parse(JSON.stringify(source));

  const doCopyOtherThings = (target, source) => {
    const hasPrototype = isFunction(source.hasOwnProperty);
    for(const key in source) {
      if(!hasPrototype || source.hasOwnProperty(key)) {
        switch (true) {
          case isClass(source[key]):
            target[key] = source[key];
            break;
          case isFunction(source[key]):
            target[key] = clone(source[key]);
            break;
          case isObject(source[key]):
            doCopyOtherThings(target[key], source[key]);
            break;
          case Array.isArray(source[key]):
            for(let prop in source[key]) {
              if (source[key].hasOwnProperty(prop) && isNumber(prop)) {
                target[key][prop] = copyDeep(source[key][prop]);
              }
            }

            for(let i in source[key]) {
              doCopyOtherThings(target[key][i], source[key][i]);
            }

            break;
          default:
            break;
        }
      }
    }
  };

  doCopyOtherThings(copy, source);

  return copy.source;
}
