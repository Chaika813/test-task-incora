import SwService from './SwService';
const service = new SwService();


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

export const addNewPost = (post) => {
    return{
        type: 'ADD_NEW_POST',
        post
    }
}

export const postPost = (post, id) => {
    return (dispatch) => {
        service.postPost(post, id).then(response => {
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

export const fetchUserRequest = () => {
    return{
        type: "FETCH_USER_REQUEST"
    }
}

export const fetchUserSuccess = (users) => {
    return{
        type: "FETCH_USER_SUCCESS",
        users
    }
}

export const fetchUserError = (error) => {
    return{
        type: "FETCH_USER_ERROR",
        error
    }
}

export const fetchUsers = () => {
    return (dispatch) => {
        dispatch(fetchUserRequest);
        service.getUsers().then(response => {
            const users = response;
            dispatch(fetchUserSuccess(users))
        })
        .catch(error => {
            const errMes = error.message;
            dispatch(fetchUserError(errMes))
        })
    }
}

export const fetchPostsRequest = () => {
    return{
        type: "FETCH_POSTS_REQUEST"
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
        dispatch(fetchPostsRequest);
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