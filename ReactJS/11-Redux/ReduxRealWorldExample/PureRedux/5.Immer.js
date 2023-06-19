const { createStore, bindActionCreators, combineReducers } = require('redux');
const produce = require('immer').produce;

const initialState = {
    name: 'John',
    address: {
        street: '123 Fake St',
        city: 'Faketon',
        state: 'MA',
    },
}

const STREET_UPDATED = 'STREET_UPDATED';

const streetUpdated = (street) => {
    return {
        type: STREET_UPDATED,
        payload: street,
    };
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case STREET_UPDATED:
            // return {
            //     ...state,
            //     address: {
            //         ...state.address,
            //         street: action.payload,
            //     },
            // };
            return produce(state, (draft) => {
                draft.address.street = action.payload;
            });
        default:
            return state;
    }
};

const store = createStore(reducer);
console.log('Initial state', store.getState());

const unsubscribe = store.subscribe(() => console.log('Updated state', store.getState()));
store.dispatch(streetUpdated('456 Fake St'));
unsubscribe();