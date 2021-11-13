const stripe = require('stripe')(process.env.STRIPE_KEY);
const { ApiError } = require('../../utils');

module.exports = ({} = {}) => {
  return {
    async chargeUser(params) {
      const PAYMENT_CURRENCY = 'usd';
      const { tokenId, amount } = params;
      try {
        const result = await stripe.charges.create({
          source: tokenId,
          amount,
          currency: PAYMENT_CURRENCY,
        });
        return result;
      } catch (err) {
        throw ApiError.internal('Payment error');
      }
    },
  };
};
