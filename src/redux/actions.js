export const EDIT_START = 'START EDIT';
export const EDIT_PROGRESS = 'PROGRESS EDIT';
export const CANCELING = 'EDIT ESC';
export const UPDATE_LIST = 'EDIT ENTER';
export const REMOVE_ITEM = 'REMOVE ITEM';

export function startEdit(index) {
  return {
    type: EDIT_START,
    index
  };
}

export function progressEdit(input) {
  return {
    type: EDIT_PROGRESS,
    input
  };
}

export function cancelEdit() {
  return {
    type: CANCELING
  };
}

export function updateList() {
  return {
    type: UPDATE_LIST
  };
}

export function removeItem(index) {
  return {
    type: REMOVE_ITEM,
    index
  };
}
