import axios from "../api/Axiosconfig";
import { loaduser } from "./userSlice";

export const asyncgetuser =()=> async (dispatch,getState) => {
    try {
        const res = await axios.get("/users")
        console.log(res.data)
        dispatch(loaduser(res.data))
    } catch (err) {
        console.log(err)
    }

}