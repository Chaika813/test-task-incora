
const initialState = {
    posts: [],
    post: {},
    error: ""
}

export default (state = initialState, action) => {
    debugger
    switch(action.type) {
        
        case 'FETCH_POSTS_REQUEST':
            return{
                ...state
            };
        case 'FETCH_POSTS_SUCCESS':
            return{
                ...state,
                posts: action.posts,
                error: ''
            };
        case 'FETCH_POSTS_ERROR':
            return{
                ...state,
                posts: [],
                error: action.error
            };
        case 'POST_REQUEST_SUCCESS':
            let newState = state.posts.concat(action.post.data);
            return newState;
        case 'FPOST_REQUEST_ERROR':
            return{
                ...state,
                post: {},
                error: action.error
            };
        // case 'ADD_NEW_POST':
        //     let newState = state.posts;
        //     newState.push(action.post);
        //     return newState;
        default:
            return state;
    }
}