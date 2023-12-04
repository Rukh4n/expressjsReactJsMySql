import React from 'react';
import { article, getAllArticle, deleteArticle } from '../../api';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const home = () => {

    const navigate = useNavigate();
    const id = useParams().id;
    const [articles, setArticles] = useState([]);
    useEffect(() => {
        getAllArticle().then((articles) => {
            setArticles(articles)
        })
    }, [])


    return (
        <>
        <div class="d-grid gap-2 mt-2 mb-2">
            <button onClick={() => navigate(`/articles/upload`)} className='btn btn-primary'>Upload</button>
        </div>
            <table className='table'>
                <thead>
                    <tr>
                        <th scope="col">Article</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                {articles.map((article, index) => {
                    return (
                        <>
                            <tr key = {article.index}>
                                <td>{article.title}k</td>
                                <td>
                                    <button onClick={() => navigate(`/articles/detail/${article.id}`)} className='btn btn-success bg-suces'>Detail</button>
                                    <button onClick={() => navigate(`/articles/${article.id}`)} className='btn btn-warning'>Upload</button>
                                    <button onClick={() => deleteArticle(article.id)} className='btn btn-danger'>Hapus</button>
                                </td>
                            </tr>
                            
                        </>
                    )
                })}
            </table>
        </>
    );
};
export default home;