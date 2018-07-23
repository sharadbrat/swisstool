import { defaultGlobalState } from '../defaultState';
import { globalActionTypes as $$ } from './globalActions';
import { actionResolverDecorator } from '../interface';

export function globalReducer(state = defaultGlobalState, action) {
  switch (action.type) {
    case $$.GLOBAL_TOGGLE_NAVIGATION:
      return toggleNavigationResolver(state, action.payload);
    default:
      return state;
  }
}

function toggleNavigationResolver(state, payload) {
  return actionResolverDecorator(state, payload, (s, p) => ({
    ...s,
    isNavigationActive: !s.isNavigationActive
  }));
}
