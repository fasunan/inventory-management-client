import axios from "axios";

const axiosPublic = axios.create({
    baseURL: 'https://inventory-managment-sarver.vercel.app'
})

const useAxiosPublic = () => {
    return axiosPublic;
};

export default useAxiosPublic;