const  validateDto = (schemaValidator)=>{
	return (req,res,next)=>{
		const isValid = schemaValidator(req.body);
		if(!isValid){
			const errors = schemaValidator.errors;
			return res.status(400).json(errors);
		}
		next();
	};
};

module.exports= validateDto;