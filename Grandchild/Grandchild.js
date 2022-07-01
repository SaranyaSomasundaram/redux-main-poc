import { useDispatch, useSelector } from 'react-redux';
import { decrement } from '../Action';
import './Grandchild.css'


function Grandchild() {

     const count = useSelector((state) => state.counter)
     const dispatch = useDispatch();
     return (
          <div class="grandchild">
               <h2>welcome to grandchild component</h2>

               <h2>counter:{count}</h2>


               <button onClick={() => dispatch(decrement())}>DECREMENT</button>


          </div>
     )

}

export default Grandchild;
