const router = require('express').Router();

const { stripeController } = require('../../controllers');
const { chargeUser } = stripeController();

router.post('/payment', chargeUser);
module.exports = router;
