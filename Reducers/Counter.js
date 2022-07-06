//If user action is update,the updateing proccess are given in the reducer.<br>
//Initial value of state is given in the variable initialState.<br>
const initialState = { counter: 0, name: "" }
const counter = (state = initialState, action) => {
    switch (action.type) {
        case "increment":
            //using spred operator to get the previous values in the state.
            return { ...state, counter: state.counter + 1 };
        case "decrement":
            return { ...state, counter: state.counter - 1 };
        default:
            return state;
    }
}


export default counter;