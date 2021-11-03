const stripe = require('stripe')(process.env.STRIPE_KEY);

const chargeUser = (params)=>{
	
	const PAYMENT_CURRENCY = 'usd';
	const {tokenId,amount} = req.body;

	stripe.charges.create({
		source:tokenId,
		amount,
		currency:PAYMENT_CURRENCY
	}, (stripeErr, stripeRes)=>{
			if(stripeErr){
				throw ApiError.internal(stripeErr);
			}else{
				return stripeRes;
			}
	});
};

module.exports={chargeUser};