
const initialState = {
    comments: [],
    error: ""
}

export default (state = initialState, action) => {
    switch(action.type) {
        case 'FETCH_COMMENT_SUCCESS':
            return{
                ...state,
                comments: action.comments,
                error: ''
            };
        case 'FETCH_COMMENT_SUCCESS':
            return{
                ...state,
                comments: {},
                error: action.error
            };
        default:
            return state;
    }
}