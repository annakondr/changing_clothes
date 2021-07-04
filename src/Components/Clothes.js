import React from 'react';
import './Clothes.css'

function Clothes(props) {
  const {clothes, edit, textInput, selected, newItem, inputChanged,
    addItem, editClicked, clickEnter, clickEsc, removeItem, inputNewItem} = props;

  return (
    <div className="block">
      <input type='text' value={newItem} className="addItem"
             onChange={(event) => inputNewItem(event.target.value)}/>
      <button onClick = {() => {addItem(newItem); inputNewItem('');}}> Add </button>
      <ul>
        {clothes.map((item, index) => {
          if (!edit || index !== selected) {
            return (
              <li key={item}>
                <span className="item">{item}</span>
                <button onClick = {() => editClicked(index)}> Edit </button>
              </li>)
          } else {
            return (
              <li key={item} className={edit ? 'selected' : ''}>
                <label><input type='text' defaultValue={item}
                       onChange={(event) => inputChanged(event.target.value)}
                       onKeyDown={(event) => {
                         if(event.key === 'Enter') {
                           clickEnter(textInput);
                           inputChanged('')
                         } else if(event.key === 'Escape') {
                           clickEsc()
                         }
                       }}
                />
                <button disabled={true}> Edit </button>
                <a href="#?" className="remove" onClick={() => removeItem(index)}>&times;</a>
                  <br/><small>Click Enter to save changes</small></label>
              </li>
            )
          }
        })
        }
      </ul>
    </div>

  )
}

export default Clothes;
