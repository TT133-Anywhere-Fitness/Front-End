import axios from "axios";

export const axiosWithAuth = () => {
    const token = localStorage.getItem("authToken");
    return axios.create({
        baseURL: "",
        headers: { Authorization: token }
    });
}