
const GLOBAL_TOGGLE_NAVIGATION = 'swisstool.global.toggle_navigation';

export const globalActionTypes = {
  GLOBAL_TOGGLE_NAVIGATION
};

export function globalToggleNavigationAction(payload) {
  return {
    type: GLOBAL_TOGGLE_NAVIGATION,
    payload
  }
}
