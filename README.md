<h2>REDUX IN REACT JS:</h2>
<hr>
<h3>Instilation:</h3><br>
1.npx create-react-app(create the react application)<br>
2.npm install redux(add the redux packages in react)<br>
3.npm install react-redux(it is used to get the {Provider})<br>
<hr>
<h3>REDUX:</h3><br>

1.Redux is an opensource js library for creating webpage.<br>
2.Redux is an statemanagement tool.<br>
3.If you get the data from serverside it is very easy to manage and also distribute using Redux.<br>
4.Redux is also used to avoid the prop drilling.<br>
<hr>
<h3>STRUCTURE:</h3><br>
.Action(in which operation user wants to be performed (read,delete,update))<br>
.Reducer<br>
.Store<br>
.Dispatch (it is execute the action)<br>
  
 <h3>Action:</h3><br>
 //User can perform this action increment or decrement;<br>
  export const increment = () => {<br>
    return {<br>
        type: "increment"<br>
    }<br>
}<br>

export const decrement = () => {<br>
    return {<br>
        type: "decrement"<br>
    }<br>
}<br>
<h3>Reducer:</h3><br>
//If user action is update,the updateing proccess are given in the reducer.<br>
//Initial value of state is given in the variable initialState.<br>
const initialState = { counter:0 }<br>
<h4>const counter = (state = initialState, action) </h4>=> {<br>
    switch (action.type) {<br>
        case "increment":<br>
        //using spred operator to get the previous values in the state.<br>
            return { ...state, counter: state.counter + 1 };<br>
        case "decrement":<br>
            return { ...state, counter: state.counter - 1 };<br>
        default:<br>
            return state;<br>
    }<br>
}<br>
export default counter;<br>

<h3>Store:</h3><br>
//store is one of the most powerful method in redux;<br>
//All  the state are accessable in the store.we can access anywhere in the nested component.<br>
import {createStore} from 'redux';<br>
import counter from './Reducers/Counter';<br>
//In redux we have an creatStore method.<br>
//createStore method is given in the variable store and we can pass the reducer in createStore method.<br>
//This store is imported in index.js file.<br>

<h4>const store=createStore(counter);<h4><br>
export default store;<br>
<hr>
index.js(react dom renderer)<br>

import React from 'react';<br>
import ReactDOM from 'react-dom/client';<br>
import App from './App/App';<br>
//If you need provider to import react-redux.<br>
import {Provider} from 'react-redux';<br>
import store from './Store';<br>

const root = ReactDOM.createRoot(document.getElementById('root'));<br>
root.render(<br>
<><br>
// store is given in the provider.in this store we have an state.it can accessable in all the component<br>
    <Provider store={store}><br>
      <App></App><br>
    
    </Provider><br>

    </><br>
   
);<br>

<h3>Dispatch:<h3><br>
App.js<br>
import { useDispatch, useSelector } from 'react-redux';<br>
import { increment } from '../Action';<br>
import Parent from '../Parent/Parent';<br>
import './App.css';<br>


function App() {<br>
    //we can access the store(state)in the component using useSelector method.<br>
     <h4>const count = useSelector((state) => state.counter)</h4><br>
     //This is where we actually execute the action.<br>
    <h4> const dispatch = useDispatch();</h4><br>
     return (<br>
          <div class="app"><br>

               <h2>counter:{count}</h2><br>

               <button onClick={() => dispatch(increment())}>INCREMENT</button><br>
               //nested component
               <Parent></Parent>

          </div>
     )

}<br>

export default App;<br>
<hr>
<h4>Parent.js(nested component)</h4><br>
import Child from "../Child/Child ";<br>
import './Parent.css';<br>

function Parent() {<br>
     return (<br>
          <div class="parent"><br>
               <h2>welcome to parent component</h2><br>

               <Child></Child><br>

          </div><br>
     )

}<br>

export default Parent;<br>
<hr>
<h4>child.js</h4><br>
import Grandchild from "../Grandchild/Grandchild";<br>
import './Child.css'<br>

function Child() {<br>
    return (<br>
        <div class="child"><br>
            <h2>welcome to child component</h2><br>
            <Grandchild></Grandchild><br>
        </div><br>
    )
}<br>

export default Child;<br>
<hr>
<h4>Grandchild.js</h4><br>
import { useDispatch, useSelector } from 'react-redux';<br>
import { decrement } from '../Action';<br>
import './Grandchild.css'<br>


function Grandchild() {<br>
     //we can access the store(state)in the component using useSelector method.<br>
    <h4> const count = useSelector((state) => state.counter)</h4><br>
      //This is where we actually execute the action.<br>
    <h4> const dispatch = useDispatch();</h4><br>
     return (<br>
          <div class="grandchild"><br>
               <h2>welcome to grandchild component</h2><br>

               <h2>counter:{count}</h2><br>


               <button onClick={() => dispatch(decrement())}>DECREMENT</button><br>


          </div>
     )

}<br>

export default Grandchild;<br>
<hr>
<h2>Screenshot:</h2>
<img src="./Screenshot/Capture.png">