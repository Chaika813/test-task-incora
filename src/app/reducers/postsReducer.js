
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
        case 'POST_REQUEST_SUCCESS':
            let newState = { ...state }
            newState.posts = [...newState.posts, action.post.data]
            return newState;
        case 'POST_REQUEST_ERROR':
            return {
                ...state,
                post: {},
                error: action.error
            };
        case 'CURRENT_POST':
            return {
                ...state,
                currentPost: action.currentPost
            };
        case "PUT_POST":
            return {
                ...state,
                currentPost: action.post.data
            };
        case 'DELETE_POST':
            return {
                ...state,
                posts: state.posts.filter(x => x.id !== action.postId),
                currentPost: {}
            }
        default:
            return state;
    }
}