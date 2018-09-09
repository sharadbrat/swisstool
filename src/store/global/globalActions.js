const GLOBAL_TOGGLE_NAVIGATION = 'swisstool.global.toggle_navigation';
const GLOBAL_SET_INSTALL_PROMPT_ACTIVE = 'swisstool.global.set_install_prompt';

export const globalActionTypes = {
  GLOBAL_TOGGLE_NAVIGATION,
  GLOBAL_SET_INSTALL_PROMPT_ACTIVE
};

export function globalToggleNavigationAction(payload) {
  return {
    type: GLOBAL_TOGGLE_NAVIGATION,
    payload
  };
}

export function globalSetInstallPromptActiveAction(payload) {
  return {
    type: GLOBAL_SET_INSTALL_PROMPT_ACTIVE,
    payload
  };
}
