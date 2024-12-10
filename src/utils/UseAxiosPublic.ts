import axios from "axios"

const axiosPublic = axios.create({
    baseURL: process.env.NEXT_PUBLIC_SERVER_URL
    // withCredentials : true,
})
const UseAxios = () => {
    return axiosPublic
};

export default UseAxios;