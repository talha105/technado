import axios from "axios";
import config from "../config/config.json"
import {FETCH_BLOGS} from "./types";


export const fetchBlogs=(page)=>async(dispatch)=>{
    const blogs=await axios.get(config.BLOGS_URL,{params:{page:`${page}`}});
    dispatch({
        type:FETCH_BLOGS,
        payload:blogs.data
    });
}
export const deleteBlog=(id)=>async(dispatch)=>{
    const blogs=await axios.delete(`${config.BLOGS_URL}/${id}`);

}
export const editBlog=(data,id)=>async(dispatch)=>{
    data.id=31;
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0');
    var yyyy = today.getFullYear();
    today = mm + '/' + dd + '/' + yyyy;
    data.created_at=today
    data.updated_at=today
    const blogs=await axios.put(`${config.BLOGS_URL}/${id}`,data);

}
export const createBlog=(data)=>async(dispatch)=>{
    const blogs=await axios.post(`${config.BLOGS_URL}`,data);

}