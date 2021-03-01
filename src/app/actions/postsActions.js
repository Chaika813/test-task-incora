import ApiService from '../ApiService';
const service = new ApiService();

export const postRequestSuccess = (post) => {
    return{
        type: 'POST_REQUEST_SUCCESS',
        post
    }
}

export const postRequestError = (post) => {
    return{
        type: 'POST_REQUEST_ERROR',
        post
    }
}


export const addNewPost = (post, id) => {
    return (dispatch) => {
        service.addNewPost(post, id).then(response => {
            const post = response;
            console.log(post);
            dispatch(postRequestSuccess(post))
        })
        .catch(error => {
            const errMes = error.message;
            dispatch(postRequestError(errMes))
        })
    }
}





export const fetchPostsSuccess = (posts) => {
    return{
        type: "FETCH_POSTS_SUCCESS",
        posts
    }
}

export const fetchPostsError = (error) => {
    return{
        type: "FETCH_POSTS_ERROR",
        error
    }
}

export const fetchPosts = ({id}) => {
    return (dispatch) => {
        service.getUserPosts(id).then(response => {
            const posts = response;
            dispatch(fetchPostsSuccess(posts))
        })
        .catch(error => {
            const errMes = error.message;
            dispatch(fetchPostsError(errMes))
        })
    }
}

export const editPost = (postId, id, title, body ) => {
    return{
        type: "EDIT_COMMENT",
        postId, 
        id, 
        title, 
        body
    }
}

export const deletePost = (postId) => {
    return{
        type: "EDIT_COMMENT",
        postId
    }
}


export const currentPost = (currentPost) => {
    return{
        type: "CURRENT_POST",
        currentPost
    }
}
