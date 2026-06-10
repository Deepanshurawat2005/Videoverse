class ApiResponse {
    constructor(statusCode, message="Success", data) {
        this.statusCode = statusCode;
        this.success = true //since this is a success response, we set success to true;
        this.message = message;
        this.data = data;
    }
}
export default ApiResponse;