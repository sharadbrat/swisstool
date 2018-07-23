import { copyDeep } from '../utils/object';

export function actionResolverDecorator(state, actionPayload, resolver) {
  return resolver(copyDeep(state), actionPayload);
}
