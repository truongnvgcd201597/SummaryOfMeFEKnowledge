const redux = require('redux');
const createStore = redux.createStore;
const applyMiddleware = redux.applyMiddleware;
const thunkMiddleware = require('redux-thunk').default;
const axios = require('axios');
const logger = require('redux-logger');

// 1. Initial State:
const initialState = {
    loading: false,
    data: [],
    error: '',  
}

// 2. Define Action:
const FETCH_USER_REQUEST = 'FETCH_USER_REQUEST'
const FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS'
const FETCH_USER_FAILURE = 'FETCH_USER_FAILURE'

// 3. Define Action Creator:
const fetchUserRequest = ()=>{
    return{
        type: FETCH_USER_REQUEST,
    }
}

const fetchUserSuccess = (users)=>{
    return{
        type: FETCH_USER_SUCCESS,
        payload: users,
    }
}

const fetchUserFailure = (errors)=>{
    return{
        type: FETCH_USER_FAILURE,
        error: errors,
    }
}

// 4. Define Reducer:
const reducer = (state = initialState, action)=>{
    switch(action.type){
        case FETCH_USER_REQUEST:
            return{
                ...state,
                loading: true,
            }
        case FETCH_USER_SUCCESS:
            return{
                loading: false,
                data: action.payload,
                error: '',
            }
        case FETCH_USER_FAILURE:
            return{
                loading: false,
                data: [],
                error: action.error,
            }
        default: return state
    }
}

const fetchUser = ()=>{
   return function(dispatch){
        dispatch(fetchUserRequest());
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response=>{
            // response.data is the array of users
            const users = response.data.map(user=>user.id);
            dispatch(fetchUserSuccess(users));
        })
        .catch(error=>{
            // error.message is the error description
            console.log(error);
            dispatch(fetchUserFailure(error.message));
        })
   }
}
const store = createStore(reducer, applyMiddleware(thunkMiddleware));
store.subscribe(()=>{console.log(store.getState())});
store.dispatch(fetchUser());