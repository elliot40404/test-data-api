const express = require('express');
const app = express();
const cors = require('cors')
app.use(express.urlencoded({ extended: false, limit: '150mb' }));
app.use(express.json())
app.use(cors(
    {origin: '*'}
))
app.options('*', cors())

const num = () => {
    return Math.floor(Math.random() * 100/2)
}

app.get('/api/data', (req, res) => {
    res.send({a: num(), b: num(), c: num()});
});

app.listen(process.env.PORT || 8081, () => {
    console.log('Listening on http://localhost:8081');
});