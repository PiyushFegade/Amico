export const errorMiddleware = (error,req,res,next) =>{
    error.message = error.message || "Internal server error"

    return res.status(404).json({
        success : false,
        message : error.message
    });
};