import { axiosWithAuth } from '../utils/axiosWithAuth';

export const FETCH_PLANT_START = "FETCH_PLANT_START";
export const FETCH_PLANT_SUCCESS = "FETCH_PLANT_SUCCESS";
export const FETCH_PLANT_FAIL = "FETCH_PLANT_FAIL";

export const FETCH_NEW_PLANT_START = "FETCH_NEW_PLANT_START"
export const FETCH_NEW_PLANT_SUCCESS = "FETCH_NEW_PLANT_SUCCESS";
export const FETCH_NEW_PLANT_FAIL = "FETCH_NEW_PLANT_FAIL";

export const fetchPlants = () => {
    return dispatch => {
        dispatch({type: FETCH_PLANT_START})
        axiosWithAuth()
        .get('/plants')
        .then((res) => {
            console.log('this is res', res);
            dispatch({type: FETCH_PLANT_SUCCESS, payload: res.data})
        })
        .catch((err) => {
            console.log(err);
            dispatch({type: FETCH_PLANT_FAIL, payload: err})
        })
    }
}

export const addPlant = (newPlant) => {
    return dispatch => {
        dispatch ({type: FETCH_NEW_PLANT_START})
        axiosWithAuth()
        .post("/plants", newPlant)
        .then((res) => {
            console.log("Add plant res", res);
            dispatch({type: FETCH_NEW_PLANT_SUCCESS, payload: res.data})
        })
        .catch((err) => {
            console.log(err)
            dispatch({ type: FETCH_NEW_PLANT_FAIL, payload: err})
        })
    }
}

export const deletePlant = (plant) => {
    axiosWithAuth()
    .delete(`/api/colors/${plant.id}`)
    .then((res) => {
        console.log(res)

    })
}


// export const ADD_FEATURES = "ADD_FEATURES";
// export const DELETE_FEATURES = "DELETE_FEATURES";

// export const addFeatures = (id) => {
//     return({
//         type: ADD_FEATURES,
//         payload: id
//     })
// }

// export const deleteFeatures = (id) => {
//     return {type: DELETE_FEATURES, payload: id}
// }

