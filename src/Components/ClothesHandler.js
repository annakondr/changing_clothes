import {connect} from 'react-redux'
import Clothes from './Clothes';
import {startEdit, progressEdit, cancelEdit, updateList, removeItem, addItem, inputNewItem} from '../redux/actions';

function mapStateToProps(state, ownProps) {
  return {
    clothes: state.clothes,
    edit: state.edit,
    textInput: state.textInput,
    selected: state.selected,
    newItem: state.newItem,
  }
}
function mapDispatchToProps(dispatch) {
  return {
    editClicked: (index) => dispatch(startEdit(index)),
    inputChanged: (input) => dispatch(progressEdit(input)),
    clickEsc: () => dispatch(cancelEdit()),
    clickEnter: (input) => dispatch(updateList(input)),
    removeItem: (index) => dispatch(removeItem(index)),
    inputNewItem: (input) => dispatch(inputNewItem(input)),
    addItem: (newItem) => dispatch(addItem(newItem))
  }
}

const ClothesHandler = connect(mapStateToProps, mapDispatchToProps)(Clothes);

export default ClothesHandler;
