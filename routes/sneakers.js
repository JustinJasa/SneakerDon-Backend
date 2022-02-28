const express = require('express');
const router = express.Router();
const SneaksAPI = require('sneaks-api');
const sneaks = new SneaksAPI();

router.get('/popular', async function (req, res) {
	res.header('Access-Control-Allow-Origin', '*');
	res.header(
		'Access-Control-Allow-Headers',
		'Origin, X-Requested-With, Content-Type, Accept'
	);
	sneaks.getMostPopular(12, function (err, products) {
		if (err) {
			console.log(err);
			return res.send('No Popular Products');
		}
		return res.json(products);
	});
});

router.get('/products', async function (req, res) {
	res.header('Access-Control-Allow-Origin', '*');
	res.header(
		'Access-Control-Allow-Headers',
		'Origin, X-Requested-With, Content-Type, Accept'
	);
	sneaks.getMostPopular(40, function (err, products) {
		if (err) {
			console.log(err);
			return res.send('No Popular Products');
		}
		return res.json(products);
	});
});

router.get('/sneakers/:id', async function (req, res) {
	res.header('Access-Control-Allow-Origin', '*');
	res.header(
		'Access-Control-Allow-Headers',
		'Origin, X-Requested-With, Content-Type, Accept'
	);
	const styleId = req.params.id;
	sneaks.getProductPrices(styleId, function (err, products) {
		if (err) {
			console.log(err);
			return res.send('No Popular Products');
		}
		return res.json(products);
	});
});

router.get('/search/:query', async function (req, res) {
	res.header('Access-Control-Allow-Origin', '*');
	res.header(
		'Access-Control-Allow-Headers',
		'Origin, X-Requested-With, Content-Type, Accept'
	);
	const q = req.params.query;
	sneaks.getProducts(q, 20, function (err, products) {
		if (err) {
			console.log(err);
			return res.send('No Popular Products');
		}
		return res.json(products);
	});
});

module.exports = router;
