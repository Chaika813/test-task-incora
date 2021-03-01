
const initialState = {
    users: [],
    user: {},
    error: ""
}

export default (state = initialState, action) => {
    switch(action.type) {
        case 'FETCH_USER_REQUEST':
            return{
                ...state
            };
        case 'FETCH_USER_SUCCESS':
            return{
                ...state,
                users: action.users,
                user: {},
                error: ''
            };
        case 'FETCH_USER_ERROR':
            return{
                ...state,
                users: [],
                user: {},
                error: action.error
            };
        case 'CURRENT_USER':
            debugger
            let newState ={...state};
            newState.user = action.user
            return newState;
        default:
            return state;
    }
}