const redux = require('redux');
const createStore = redux.createStore;
const getState = redux.getState;
const subscribe = redux.subscribe;
const dispatch = redux.dispatch;
const bindActionCreators = redux.bindActionCreators; // This is a function that takes an object of action creators 
// and wraps them in a dispatch call so they can be invoked directly.

const CAKE_ORDERED = 'CAKE_ORDERED';
const CAKE_RESTOCKED = 'CAKE_RESTOCKED';

const OrderCake = (quantity = 1) => {
    return {
        type: CAKE_ORDERED,
        quantity,
    }
}

const RestockCake = (quantity = 1) => {
    return {
        type: CAKE_RESTOCKED,
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
        case CAKE_RESTOCKED:
            return {
                ...state,
                numOfCake: state.numOfCake + action.quantity,
            }
        default:
            return state;
    }
}

const store = createStore(reducer);
const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
})
// store.dispatch({
//     type: CAKE_ORDERED,
//     quantity: 2,
// });
// store.dispatch(OrderCake(2));
// store.dispatch(RestockCake(10))
const actions = bindActionCreators({OrderCake, RestockCake}, store.dispatch);
actions.OrderCake();
actions.RestockCake(10);
unsubscribe();