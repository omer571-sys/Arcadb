const ErrorClient = ClientMessage => {
	throw new TypeError(ClientMessage);
};

module.exports.CreateError = function(error) {
	if(!error) ErrorClient("505!");
	this.error = error; // Contructor Done!
	ErrorClient(error);
}