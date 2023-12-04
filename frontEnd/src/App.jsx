import 'animate.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/home';
import UploadArticle from './pages/uploadArticles';
import EditArticle from './pages/editArticle';
import DetailArticle from './pages/detailArticle';
import Navbar from './componens/navbar';
import Footer from './componens/footer';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/articles/upload" element={<UploadArticle />} />
            <Route path="/articles/:id" element={<EditArticle />} />
            <Route path="/articles/detail/:id" element={<DetailArticle />} />
          </Routes>

        </div>
        <Footer />
      </BrowserRouter>
    </>)
}

export default App