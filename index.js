import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App/App';
import {Provider} from 'react-redux';
//If you need provider to import react-redux.
import store from './Store';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<>
/* store is given in the provider.in this store we have an state.
it can accessable in all the component.*/
    <Provider store={store}>
      <App></App>
    
    </Provider>

    </>
   
);


