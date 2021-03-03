import { axiosWithAuth } from '../utils/axiosWithAuth';

export const FETCH_USER_START = "FETCH_USER_START";
export const FETCH_USER_SUCCESS = "FETCH_USER_SUCCESS";
export const FETCH_USER_FAIL = "FETCH_USER_FAIL";

export const EDIT_USER_START = "EDIT_USER_START";
export const EDIT_USER_SUCCESS = "EDIT_USER_SUCCESS";
export const EDIT_USER_FAIL = "EDIT_USER_FAIL";

export const ADD_NEW_PLANT_START = "ADD_NEW_PLANT_START"
export const ADD_NEW_PLANT_SUCCESS = "ADD_NEW_PLANT_SUCCESS";
export const ADD_NEW_PLANT_FAIL = "ADD_NEW_PLANT_FAIL";

export const DELETE_PLANT_START = "DELETE_PLANT_START";
export const DELETE_PLANT_SUCCESS = "DELETE_PLANT_SUCCESS";
export const DELETE_PLANT_FAIL = "DELETE_PLANT_FAIL";

export const EDIT_PLANT_START = "EDIT_PLANT_START";
export const EDIT_PLANT_SUCCESS = "EDIT_PLANT_SUCCESS";
export const EDIT_PLANT_FAIL = "EDIT_PLANT_FAIL";


export const fetchUser = () => {
    return dispatch => {
        dispatch({type: FETCH_USER_START})
        axiosWithAuth()
        .get("/users/userinfo")
        .then((res) => {
            console.log('this is res', res);
            dispatch({type: FETCH_USER_SUCCESS, payload: res.data})
        })
        .catch((err) => {
            console.log(err);
            dispatch({type: FETCH_USER_FAIL, payload: err})
        })
    }
}

export const editUser = (id) => {
    return dispatch => {
        dispatch({type: FETCH_USER_START})
        axiosWithAuth()
        .put(`users/user/${id}`, id)
        .then((res) => {
            console.log("edit user res", res)
            dispatch({type: FETCH_USER_SUCCESS, payload: res.data.id})
        })
        .catch((err) => {
            console.log(err)
            dispatch({ type: EDIT_USER_FAIL, payload: err})
        })
    }
}

export const addPlant = (id) => {
    return dispatch => {
        dispatch ({type: ADD_NEW_PLANT_START})
        axiosWithAuth()
        .post(`/users/plants`, id)
        .then((res) => {
            console.log("Add plant res", res);
            dispatch({type: ADD_NEW_PLANT_SUCCESS, payload: res.data.id})
        })
        .catch((err) => {
            console.log(err)
            dispatch({ type: ADD_NEW_PLANT_FAIL, payload: err})
        })
    }
}

export const deletePlant = (id) => {
    return dispatch => {
        dispatch({type: DELETE_PLANT_START})
        axiosWithAuth()
        .delete(`/users/user/${id}`)
        .then((res) => {
            console.log("delete plant res", res)
            dispatch({type: DELETE_PLANT_SUCCESS, payload: res.data.id})
        })
        .catch((err) => {
            console.log(err)
            dispatch({type: DELETE_PLANT_FAIL, payload: err})
        })
    }
}

export const editPlant = (id) => {
    return dispatch => {
        dispatch({type: EDIT_PLANT_START})
        axiosWithAuth()
        .put(`/updateplant/${id}`, id)
        .then((res) => {
            console.log("edit plant res", res)
            dispatch({type: EDIT_PLANT_SUCCESS, payload: res.data.id})
        })
        .catch((err) => {
            console.log(err);
            dispatch({type: EDIT_USER_FAIL, payload: err})
        })
    }
}

  

