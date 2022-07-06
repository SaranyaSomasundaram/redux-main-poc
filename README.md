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
<img src='./Screenshot/images.png />
 <hr>

<h4>Parent.js(nested component)</h4>
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
<h4>child.js</h4>
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
<h4>Grandchild.js</h4>
import { useDispatch, useSelector } from 'react-redux';<br>
import { decrement } from '../Action';<br>
import './Grandchild.css'<br>
function Grandchild() {<br>
     //we can access the store(state)in the component using useSelector method.<br>
    <h4> const count = useSelector((state) => state.counter)</h4>
      //This is where we actually execute the action.<br>
    <h4> const dispatch = useDispatch();</h4>
     return (<br>
          <div class="grandchild"><br>
               <h2>welcome to grandchild component</h2><br>
               <h2>counter:{count}</h2>
               <button onClick={() => dispatch(decrement())}>DECREMENT</button><br>
          </div>
     )
     }<br>
export default Grandchild;<br>
<hr>
<h2>Screenshot:</h2>
<img src="./Screenshot/Capture.png">