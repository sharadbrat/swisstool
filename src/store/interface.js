import { copyDeep } from '../utils/object';

export class Action {
  constructor(type, payload) {
    this.type = type;
    this.payload = payload;
  }
}

export function actionResolverDecorator(state, actionPayload, resolver) {
  return resolver(copyDeep(state), actionPayload);
}
