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


export const addNewPost = (post) => {
    return (dispatch) => {
        service.addNewPost(post).then(response => {
            const post = response;
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

export const updatePost = (post) => {
    return{
        type: "PUT_POST",
        post
    }
}

export const editPost = (post) => {
    debugger
    return (dispatch) => {
        service.updatePost(post).then(response => {
            const updatedPost = response;
            dispatch(updatePost(updatedPost))
        })
    }
}

export const deletePost = (postId) => {
    return (dispatch) => {
        service.deletePost(postId).then(response => {
            dispatch({
                type: "DELETE_POST",
                postId
            })
            alert(`Post with id ${postId} deleted successfully`)
        })
        .catch(error => {
            const errMes = error.message;
            console.log(errMes)
        })
    }
}


export const currentPost = (currentPost) => {
    return{
        type: "CURRENT_POST",
        currentPost
    }
}
