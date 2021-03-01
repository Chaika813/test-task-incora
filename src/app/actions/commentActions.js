import ApiService from '../ApiService';
const service = new ApiService();



export const fetchCommentSuccess = (comments) => {
    return{
        type: 'FETCH_COMMENT_SUCCESS',
        comments
    }
}

export const fetchCommentError = (error) => {
    return{
        type: 'FETCH_COMMENT_ERROR',
        error
    }
}

export const fetchComments = ({postId}) => {
    return (dispatch) => {
        service.getComments(postId).then(response => {
            const comments = response;
            dispatch(fetchCommentSuccess(comments))
        })
        .catch(error => {
            const errMes = error.message;
            dispatch(fetchCommentError(errMes))
        })
    }
}