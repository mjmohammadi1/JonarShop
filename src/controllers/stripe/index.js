const { ApiError } = require('../../utils');
const {stripeService} = require('../../services');

const chargeUser = async(req,res,next)=>{
	try{
		const paymentResult = stripeService.chargeUser(req.body);
		res.status(201).json({paymentResult});
	}catch(err){
		next(err);
	}
};

module.exports={chargeUser};