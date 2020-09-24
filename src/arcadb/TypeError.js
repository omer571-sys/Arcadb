const ErrorClient = ClientMessage => { throw new TypeError(ClientMessage); };

module.exports.CreateError = function(error) {
	if(!error) ErrorClient("Looks like something went wrong! 505!!!");
	this.error = error; // Constructor Completed!
	ErrorClient(error);
}
