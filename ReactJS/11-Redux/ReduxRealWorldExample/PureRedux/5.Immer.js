const redux = require('redux');
const createStore = redux.createStore;
const getState = redux.getState;
const subscribe = redux.subscribe;
const dispatch = redux.dispatch;

const STREET_UPDATED = 'STREET_UPDATED';

const initialState = {
    name: 'John',
    address: {
        street: '123 Main St',
        city: 'New York',
        state: 'NY',
    },
}

const updateStreet = (street)=>{
    return {
        type: 'STREET_UPDATED',
        payload: street,
    }
}

const reducer = (state = initialState, action) =>{
    switch(action.type){
        case STREET_UPDATED:
            return{
                ...initialState,
                address:{
                    ...state.address,
                    city: action.payload,
                }
            }
    }
}

const store = createStore(reducer);
const unsubscribe = store.subscribe(()=>{
    console.log('State', store.getState());
})

store.dispatch(updateStreet('96 Huan Duc Luong'));
unsubscribe();