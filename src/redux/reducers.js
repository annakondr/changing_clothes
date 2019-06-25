import {CANCELING, EDIT_PROGRESS, EDIT_START, UPDATE_LIST} from './actions';

const list = [
  'Apron',
  'Belt',
  'Cardigan',
  'Dress',
  'Earrings',
  'Fur coat',
  'Gloves',
  'Hat',
];

const initialState = {
  clothes: list,
  edit: false,
  textInput: '',
  selected: null
};

export function getNextState(state = initialState, action) {
  switch (action.type) {
    case EDIT_START:
      return {
        ...state,
        edit: true,
        selected: action.index
      };
    case EDIT_PROGRESS:
      return {
        ...state,
        textInput: action.input
      };
    case CANCELING:
      return {
        ...state,
        selected: null
      };
    case UPDATE_LIST:
      if (state.textInput === '') {
        return {
          ...state,
          clothes: [...state.clothes].filter((item, index) => {
            return state.selected !== index
          }),
          selected: null
        };
      }
      return {
        ...state,
        clothes: [...state.clothes].map((item, index) => {
          if (state.selected !== index) {
            return item
          } else {
            return state.textInput
          }
        }),
        edit: false,
        selected: null
      };
    default:
      return state;
  }
}
