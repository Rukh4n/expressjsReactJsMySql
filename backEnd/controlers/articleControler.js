const articlesModel = require('../models/articleModel')
// yang mengontrol semua pemanggilan data article dari database
const getArticles = async(req, res) => {
    try{
        const respons = await articlesModel.findAll();
        res.status(200).json(respons);
    }catch(error){
        console.log(error.message);
    };
};

// yang mengontrol pemanggilan article yang di pilih oleh pengunjung
const getArticlesById = async(req, res) => {
    try{
        const respons = await articlesModel.findOne({
            where : {
                id: req.params.id
            }
        });
        res.status(200).json(respons);
    }catch(error){
        console.log(error.message);
    };
};

// yang mengontrol upload article oleh admin web
const createArticles = async (req, res) => {
    try {
        const createArticles = await articlesModel.create(req.body);
        res.status(200).json({    
            success: true,
            createArticles
        });
    }catch (err) {
            res.status(500).json({
            success: false,
            error: err.message
        });
    };
};

// yang mengontrol edit article oleh admin
const editArticle = async (req, res) => {
    try {
        const editArticle = await articlesModel.update(req.body, {
            where : {
                id : req.params.id 
            }
        });
        res.status(200).json({
            success: true,
            editArticle
        });
    }catch (err) {
            res.status(500).json({
            success: false,
            error: err.message
        });
    };
};

// yang mengontrol apabila admin menghapus artikel
const deletArticle = async (req, res) => {
    try {
        const deletArticle = await articlesModel.destroy({
            where : {
                id : req.params.id 
            }
        });
        res.status(200).json({
            success: true,
            deletArticle
        });
    }catch (err) {
            res.status(500).json({
            success: false,
            error: err.message
        });
    };
};

// mengexport semua method di atas agar dapat di pakai di luar file ini
module.exports = {
    getArticles,
    getArticlesById,
    createArticles,
    editArticle,
    deletArticle 
};