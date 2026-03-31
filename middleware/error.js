class ErrorHandler extends Error{
    constructor(message, statusCode){
        super(message || "Internal Server Error");
        this.statusCode = statusCode;
     
    }
};


export const errorHandler = (err, req, res , next)=>{
   err.message = err.message;
   err.statusCode = err.statusCode;
   

   if(err.code === 11000){
    err.message =`Duplicate ${Object.keys(err.keyValue)} entered`;
    err= new ErrorHandler(err.message, 400);
   }

   if(err.name === "jsonWebTokenError"){
    const message = `Json web token is invalid, try again`;
    err = new ErrorHandler(message, 400);
   };

   if(err.name === "TokenExpiredError"){
    const message = `Json web token is Expired, try to loginagain`;
    err = new ErrorHandler(message, 400);
   }

   if(err.name === "castError"){
    const message =` Invalid ${err.path}`;
    err = new ErrorHandler(message, 400);
   }


   const errorMessage = err.errors ? Object.values(err.errors).map((error) => error.message).join(" ") : err.message;

    res.status(err.statusCode).json({
        success:false,
        message:errorMessage,
    });
  
};


export default ErrorHandler;