import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

import axios from 'axios';

const StripeCheckoutButton = ({ price }) => {
	const priceForStripe = price * 100;
	const publishableKey =
		'pk_test_51KH5qrJM4zuafcC6ksnd1rQTmpp8FgW1WCMbfRwOwRk9zu8g7y3p4OIYOgpLPqDSe5D8HXFAGvIdCObVjz70d1mJ000WO5WrY7';

	const onToken = (token) => {
		axios({
			url: 'payment',
			method: 'post',
			data: {
				amount: priceForStripe,
				token,
			},
		})
			.then((response) => {
				alert('Payment Successful');
			})
			.catch((error) => {
				console.log('Payment Error:', error);
				alert('There was an issue with your payment. Please make sure you use the provided credit card.');
			});
	};

	return (
		<StripeCheckout
			label="Pay Now"
			name="CRWN Clothing Ltd."
			billingAddress
			shippingAddress
			image="https://svgshare.com/i/CUz.svg"
			description={`Your total is $${price}`}
			amount={priceForStripe}
			panelLabel="Pay Now"
			token={onToken}
			stripeKey={publishableKey}
		/>
	);
};

export default StripeCheckoutButton;
