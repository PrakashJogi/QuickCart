import { combineReducers } from "redux";
import { cart_reducer } from "./reducer";

const root_reducer = combineReducers({
        cart_reducer
});

export default root_reducer;



//for using multiple reducer in App