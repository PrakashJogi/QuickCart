import { createStore } from "redux";
import root_reducer from "./Redux/main";

const store = createStore(
    root_reducer
);

export default store;