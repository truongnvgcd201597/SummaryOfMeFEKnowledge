const redux = require('redux');
const createStore = redux.createStore;
const getState = redux.getState;
const subscribe = redux.subscribe;
const dispatch = redux.dispatch;

const CAKE_ORDERED = 'CAKE_ORDERED';

const OrderCake = (quantity = 1) => {
    return {
        type: CAKE_ORDERED,
        quantity,
    }
}

const initialState = {
    numOfCake: 10,
    anotherProps: 0,
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case CAKE_ORDERED:
            return {
                ...state,
                numOfCake: state.numOfCake - action.quantity,
            }
        default:
            return state;
    }
}

const store = createStore(reducer);
const unsubscribe = store.subscribe(()=>{
    console.log(store.getState());
})
store.dispatch({
        type: CAKE_ORDERED,
        quantity: 2,
});
store.dispatch(OrderCake(2));

unsubscribe();