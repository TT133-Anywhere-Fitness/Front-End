import axios from "axios";

export const axiosWithAuth = () => {
    const token = localStorage.getItem("authToken");
    return axios.create({
        baseURL: "https://anywherrfitness.herokuapp.com/",
        headers: { Authorization: token }
    });
}