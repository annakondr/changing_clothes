import React from 'react';
import './Clothes.css'

function Clothes(props) {
  const {clothes, edit, textInput, selected} = props;

  return (
    <div className="block">
      <ul>
        {clothes.map((item, index) => {
          if (!edit || index !== selected) {
            return (
              <li key={item}>
                <span className="item">{item}</span>
                <button onClick = {() => props.editClicked(index)}> Edit </button>
              </li>)
          } else {
            return (
              <li key={item} className={edit ? 'selected' : ''}>
                <input type='text' defaultValue={item}
                       onChange={(event) => props.inputChanged(event.target.value)}
                       onKeyDown={(event) => {
                         if(event.key === 'Enter') {
                           props.clickEnter(textInput)
                         } else if(event.key === 'Escape') {
                           props.clickEsc()
                         }
                       }
                       }
                />
                <button disabled={true}> Edit </button>
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
