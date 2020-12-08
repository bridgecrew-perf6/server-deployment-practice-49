module.exports =(error,request,response,next) => {
  response.status(500).send({
    error: 500,
    route: request.path,
    message: `SERVER ERROR: ${error}`});
};