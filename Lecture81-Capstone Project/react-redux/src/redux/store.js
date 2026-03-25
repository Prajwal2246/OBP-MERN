import { createStore } from "redux";
import { reducer } from "./count/reducer";



export const store = createStore(reducer);



