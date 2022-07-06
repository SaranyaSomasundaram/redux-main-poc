<h2>REDUX IN REACT JS:</h2>
<hr>
<h3>Installation:</h3><br>
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
<img src="./Screenshot/img.png ">
 <hr>
 
```
<h4>Parent.js(nested component)</h4>
import Child from "../Child/Child ";
import './Parent.css';
function Parent() {
     return (
          <div class="parent">
               <p>welcome to parent component</p>
                 <Child></Child>
          </div>
     )}
export default Parent;

```
<hr>
<h4>child.js</h4>
import Grandchild from "../Grandchild/Grandchild";<br>
import './Child.css'<br>
function Child() {<br>
    return (<br>
        <div class="child"><br>
            <p>welcome to child component</p><br>
            <Grandchild></Grandchild><br>
        </div><br>
    )}<br>
export default Child;<br>
<hr>
<h4>Grandchild.js</h4>
import { useDispatch, useSelector } from 'react-redux';<br>
import { decrement } from '../Action';<br>
import './Grandchild.css'<br>
function Grandchild() {<br>
     //we can access the store(state)in the component using useSelector method.<br>
     const count = useSelector((state) => state.counter)<br>
      //This is where we actually execute the action.<br>
    const dispatch = useDispatch()<br>
     return (<br>
          <div class="grandchild"><br>
               <p>welcome to grandchild component</p><br>
               <h2>counter:{count}</h2>
               <button onClick={() => dispatch(decrement())}>DECREMENT</button><br>
          </div>
     )}<br>
export default Grandchild;<br>
<hr>
<h2>Screenshot:</h2>
<img src="./Screenshot/Capture.png">