import axios from 'axios';

export const axiosWithAuth = () => {
    const token = JSON.parse(window.localStorage.getItem("token"));

    return axios.create({
        headers: {
            Authorization: `Bearer ${token}`, 
        },
        baseURL: "https://plantapp.herokuapp.com"
    })
}

//need to update baseURL