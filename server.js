const express = require('express');
const app = express();
const cors = require('cors');

const PORT = process.env.PORT || 8080;

app.get('/', (req, res) => {
	res.send('HELLO THERE');
});

app.listen(PORT, () => {
	console.log(`Server is running at http://localhost:${PORT}`);
});

//Middleware
app.use(cors());
//Allows us to access request.body to access JSON data

app.use(express.json());

//api paths to get fetch data for sneakers

//api paths to get popular products
app.get('/popular', require('./routes/sneakers'));
app.get('/products', require('./routes/sneakers'));

//api path to get pricing information for individual sneakers
app.get('/sneakers/:id', require('./routes/sneakers'));

app.get('/search/:query', require('./routes/sneakers'));
