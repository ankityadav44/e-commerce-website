import axios, { Axios } from "axios"

export const mensProducts = () => {
    let res = axios.get("https://vastra.onrender.com/MensData?_limit=12&_page=1")
    return res
}