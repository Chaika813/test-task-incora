import ApiService from '../ApiService';
const service = new ApiService();

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

export const currentUser = (user) => {
    return{
        type: "CURRENT_USER",
        user
    }
}