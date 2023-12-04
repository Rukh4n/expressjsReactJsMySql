const express = require('express');
const app = express();
const cors = require('cors');
const dbConection = require('./models/dbConection');
const articlesRouter = require('./routers/articlesRouter');

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('hellow world');
});

app.use(articlesRouter);

app.listen(3005, () => {
    console.log(`runing on port 3005`);
    dbConection.authenticate().then(() => {
        console.log('database terhubung')
    }).catch((err) => {
        console.log('terjadi error saat koneksi ke database', err)
        process.exit()
    });
});