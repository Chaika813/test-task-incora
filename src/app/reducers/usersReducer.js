
const initialState = {
    users: [],
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
                error: ''
            };
        case 'FETCH_USER_ERROR':
            return{
                ...state,
                users: [],
                error: action.error
            };
        default:
            return state;
    }
}