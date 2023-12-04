import React from 'react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { article } from "../../api";
import { useNavigate } from 'react-router-dom';

const detailArticle = () => {
  
  const navigate = useNavigate()

    const [details, setDetails] = useState([]);
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

  return (
    <>
    
    <div class="d-grid gap-2 mt-2 mb-2">
        <button onClick={() => navigate(`/`)} className='btn btn-primary'>Home</button>
    </div>
    <div key={details.id}>
        <h1>{details.title}</h1>
        <p>Di upload pada : {details.createdAt}</p>
        <p>{details.description}</p>
    </div>
    </>
  )
}
export default detailArticle