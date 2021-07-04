import {ADD_ITEM, CANCELING, EDIT_PROGRESS, EDIT_START,
  INPUT_NEW_ITEM, REMOVE_ITEM, UPDATE_LIST} from './actions';

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
  selected: null,
  newItem: '',
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
    case REMOVE_ITEM:
    return {
      ...state,
      clothes: state.clothes.filter((item) => {
        return state.clothes.indexOf(item) !== action.index;
      }),
      selected: null,
    };
    case INPUT_NEW_ITEM:
      return {
        ...state,
        newItem: action.newItem,
      };
    case ADD_ITEM:
      return {
        ...state,
        clothes: [...state.clothes, action.newItem],
      };
    default:
      return state;
  }
}
