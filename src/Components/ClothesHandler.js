import {connect} from 'react-redux'
import Clothes from './Clothes';
import {startEdit, progressEdit, cancelEdit, updateList, removeItem} from '../redux/actions';

function mapStateToProps(state, ownProps) {
  return {
    clothes: state.clothes,
    edit: state.edit,
    textInput: state.textInput,
    selected: state.selected
  }
}
function mapDispatchToProps(dispatch) {
  return {
    editClicked: (index) => dispatch(startEdit(index)),
    inputChanged: (input) => dispatch(progressEdit(input)),
    clickEsc: () => dispatch(cancelEdit()),
    clickEnter: (input) => dispatch(updateList(input)),
    removeItem: (index) => dispatch(removeItem(index))
  }
}

const ClothesHandler = connect(mapStateToProps, mapDispatchToProps)(Clothes);

export default ClothesHandler;
