import React from "react";
import axios from "axios";

const api = "http://localhost:3005"


const getAllArticle = async () => {
    try{
        const respons = await axios.get(`${api}/articles`)
        return respons.data
    }catch(error) {
        console.log(error)
    }
};

const article = async (id) => {   
   try {
    const respons = await axios.get(`http://localhost:3005/articles/${id}`);
    console.log(respons.data)
    return respons.data;
  } catch (error) {
    console.log(error);
  }
};
const deleteArticle = async(id) => {
  try{
    await axios.delete(`${api}/articles/${id}`)
    getAllArticle()
  }catch (error) {
    console.log(error)
  }
}

export { getAllArticle, article, deleteArticle};