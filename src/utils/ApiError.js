class ApiError extends Error {
    constructor(statusCode,message="An error occurred",errors=[],stack="") { //these are the default values for the parameters
        super(message); //call the parent class constructor with the message parameter
        this.statusCode = statusCode;
        this.errors = errors;
        this.message = message;
        this.success = false;

        if(stack)  {
            this.stack = stack;
        }else{
            Error.captureStackTrace(this, this.constructor);
        }
    }
}
export default ApiError;