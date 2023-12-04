import React from "react";
import axios from "axios";
import { article } from "../../api";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const editArticle = () => {
  
  const [details, setDetails] = useState([]);
  const navigate = useNavigate()
  const [data, setData] = useState({
    title: "",
    slug: "",
    description: "",
  });

  const apiLink = "http://localhost:3005";

  const id = useParams().id;

  useEffect(() => {
    const fetchData = async () => {
      const articleDetails = await article(id);
      setDetails(articleDetails);
      setData({
        title: articleDetails.title,
        slug: articleDetails.slug,
        description: articleDetails.description,
      });
    };

    fetchData();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const fixTitle = data.title;
    const fixSlug = fixTitle.split(" ").join("-") + Math.random();
    const fixDescription = data.description;

    try {
      const response = await axios.patch(
        `${apiLink}/articles/${id}`,
        {
          title: fixTitle,
          slug: fixSlug,
          description: fixDescription,
        }
      );

      if (response.status === 200) {
        console.log("Data berhasil diubah");
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
      <form onSubmit={handleSubmit}>
        <div className="pt-3">
        <input
          type="text"
          name="title"
          value={data.title}
          className="form-control m-3"
          onChange={(e) => setData({ ...data, title: e.target.value })}
          />
        <textarea
          type="text"
          name="description"
          value={data.description}
          className="form-control m-3"
          onChange={(e) => setData({ ...data, description: e.target.value })}
        />
        <button type="submit" className="btn btn-primary">Update</button>
        </div>
      </form>
    </>
  );
};

export default editArticle;
