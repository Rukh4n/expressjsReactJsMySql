import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const uploadArticle = () => {
  
  const apiLink = "http://localhost:3005"
  const navigate = useNavigate()

  const [data, setData] = useState({
    title: "",
    slug: "",
    description: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const fixTitle = data.title;
    const fixSlug = fixTitle.split(" ").join("-")+Math.random();
    const fixDescription = data.description;
    console.log(fixTitle);
    console.log(fixSlug);
    console.log(fixDescription);
    try {
      const response = await axios.post(`${apiLink}/articles`, {
        title : fixTitle,
        slug : fixSlug,
        description: fixDescription,
      });
      if (response.status === 200) {
        console.log("data berhasil di masukan")
      }
    } catch (error) {
        console.log(error);
    }
    navigate("/")
  };

  return (
    <>
    
    <div class="d-grid gap-2 mt-2 mb-2">
        <button onClick={() => navigate('/')} className='btn btn-primary'>Home</button>
    </div>
    <form onSubmit={handleSubmit} acceptCharset="/">
      <div className="pt-3">
      <input
        type="text"
        name="title"
        placeholder="Judul"
        className="form-control m-3"
        onChange={(e) => setData({ ...data, title: e.target.value })}
      />
      <textarea
        type="text"
        name="description"
        placeholder="Deskripsi dari artikel tersebut"
        className="form-control =3"
        onChange={(e) => setData({ ...data, description: e.target.value })}
      />
      <button type="submit" className="btn btn-primary m-3">Submit</button>
      </div>
    </form>
    </>
  );
};

export default uploadArticle;
