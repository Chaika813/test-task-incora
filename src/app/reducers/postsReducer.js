
const initialState = {
    posts: [],
    currentPost: {},
    post: {},
    error: ""
}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_POSTS_SUCCESS':
            return {
                ...state,
                posts: action.posts,
                error: ''
            };
        case 'FETCH_POSTS_ERROR':
            return {
                ...state,
                posts: [],
                error: action.error
            };
        // case 'POST_REQUEST_SUCCESS':
        //     let newState = { ...state }
        //     newState.posts.push(action.post.data)
        //     return newState;
        case 'POST_REQUEST_SUCCESS':
            let newState = { ...state } //copy of existing state
            newState.posts = [...newState.posts, action.post.data]
            return newState;
        case 'POST_REQUEST_ERROR':
            return {
                ...state,
                post: {},
                error: action.error
            };
        case 'CURRENT_POST':
            debugger
            return {
                ...state,
                currentPost: action.currentPost
            }
        default:
            return state;
    }
}