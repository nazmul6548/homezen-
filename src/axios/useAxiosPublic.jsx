import axios from "axios";

const axiosPublic = axios.create({
    // baseURL : "https://real-estate-platform-server-xi.vercel.app"
})
const useAxiosPublic = () => {
    return axiosPublic;
}
export default useAxiosPublic;