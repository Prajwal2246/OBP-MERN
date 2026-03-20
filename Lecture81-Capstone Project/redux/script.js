const redux = require("redux");
const { createStore, combineReducers } = redux;

//action
//reducer
//store

const initialState = {
  products: [
    { name: "bottle", price: 20, qty: 19 },
    { name: "shirt", price: 100, qty: 29 },
    { name: "charger", price: 10, qty: 20 },
  ],
  boughtProducts: [],
};

const BUY_BOOTLE = "BUY_BOOTLE";
const BUY_SHIRT = "BUY_SHIRT";
const BUY_CHARGER = "BUY_CHARGER";

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_BOOTLE:
      return {
        ...state,
        products: state.products.map((item, idx) =>
          idx === 0 ? { ...item, qty: item.qty - 1 } : item,
        ),
        boughtProducts: [...state.boughtProducts, state.products[0]],
      };
    case BUY_SHIRT:
      return {
        ...state,
        products: state.products.map((item, i) =>
          i === 1 ? { ...item, qty: item.qty - 1 } : item,
        ),
        boughtProducts: [...state.boughtProducts, state.boughtProducts[1]],
      };
    case BUY_CHARGER:
      return {
        ...state,
        products: state.products.map((item, i) =>
          item.qty != 0 ? { ...item, qty: item.qty + 1 } : { ...item, qty: 1 },
        ),
        boughtProducts: [...state.boughtProducts, state.products[2]],
      };
    default:
      return state;
  }
};
// const store = createStore(reducer);

// const unsubscribe = store.subscribe(() => {
//   console.log(store.getState());
// });

// store.dispatch({ type: BUY_CHARGER });
// store.dispatch({ type: BUY_CHARGER });
// store.dispatch({ type: BUY_CHARGER });
// unsubscribe();

// store.dispatch({ type: BUY_CHARGER });
// store.dispatch({ type: BUY_CHARGER });

/* counter store (redux) */
const initialStateCounter = {
  count: 0,
};

const INC = "INC";
const DEC = "DEC";

function counterReducer(state = initialStateCounter, action) {
  switch (action.type) {
    case INC:
      return { ...state, count: state.count + action.payload };
    case DEC:
      return { ...state, count: state.count - action.payload };
    default:
      return state;
  }
}

const rootreducer = combineReducers({
  amazon: productReducer,
  count_app: counterReducer,
});

const counterStore = createStore(rootreducer);

const counterUnsubscribe = counterStore.subscribe(() => {
  console.log(counterStore.getState());
});

counterStore.dispatch({ type: INC, payload: 10 }); //10;
counterStore.dispatch({ type: INC, payload: 1 }); //11
counterStore.dispatch({ type: DEC, payload: 1 }); //10
counterUnsubscribe();
counterStore.dispatch({ type: DEC });
