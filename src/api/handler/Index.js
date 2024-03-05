import axios from "axios";

export  const getData = async (url)=>{
    return await axios.get(url)
}

export const postData = async (url)=>{
    return await axios.post(url)
}

export const putData = async (url)=>{
    return await axios.put(url)
}

export const delData = async (url)=>{
    return await axios.delete(url)
}