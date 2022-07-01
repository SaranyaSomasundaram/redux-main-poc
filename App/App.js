
import { useDispatch, useSelector } from 'react-redux';
import { increment } from '../Action';
import Parent from '../Parent/Parent';
import './App.css';


function App() {

     const count = useSelector((state) => state.counter)

     const dispatch = useDispatch();
     return (
          <div class="app">

               <h2>counter:{count}</h2>

               <button onClick={() => dispatch(increment())}>INCREMENT</button>
               <Parent></Parent>

          </div>
     )

}

export default App;









