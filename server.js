//set up up a node server
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

if (process.env.NODE_ENV !== 'production') require('dotenv').config();

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

const app = express();
const port = process.env.PORT || 5001;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

if (process.env.NODE_ENV === 'production') {
	app.use(express.static(path.join(__dirname, 'client/build')));
}

app.get('*', function (req, res) {
	res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});

app.listen(port, (error) => {
	if (error) throw error;
	console.log('server running on port' + port);
});

app.post('/payment', (req, res) => {
	const body = {
		source: req.nody.token.id,
		amount: req.body.amount,
		currency: 'gbp',
	};

	stripe.charges.create(body, (stripeErr, stripeRes) => {
		if (stripeerr) {
			res.status(500).send({ error: stripeErr });
		} else {
			status(200).send({ success: stripeRes });
		}
	});
});
