import React from 'react';
import {createStore} from 'redux';
import {Provider} from 'react-redux'
import {getNextState} from './redux/reducers';
import ClothesHandler from './Components/ClothesHandler';


const store = createStore(getNextState);

function App() {
  return (
    <Provider store={store}>
      <ClothesHandler />
    </Provider>
  );
}

export default App;
