
//store is one of the most powerful method in redux;
//All  the state are accessable in the store.we can access anywhere in the nested component
import {createStore} from 'redux';
import counter from './Reducers/Counter';
//createStore method is given in the variable store and we can pass the reducer in createStore method.
const store=createStore(counter);





export default store;