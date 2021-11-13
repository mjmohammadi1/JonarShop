const { stripeService } = require('../../services');
module.exports = ({ _stripeService = stripeService } = {}) => {
  return {
    async chargeUser(req, res, next) {
      try {
        const paymentResult = await _stripeService().chargeUser(req.body);
        res.status(201).json(paymentResult);
      } catch (err) {
        next(err);
      }
    },
  };
};
