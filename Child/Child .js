import Grandchild from "../Grandchild/Grandchild";
import './Child.css'

function Child() {
    return (
        <div class="child">
            <h2>welcome to child component</h2>
            <Grandchild></Grandchild>
        </div>
    )
}



export default Child;