const asynHandler = (reqestHandler) =>{
    (req,res,next) =>{
        Promise.resolve(requestHandler(req,res,next)).catch((err)=>next(err))
    }
}







export {asycHandler}

// const asyncHandler = (fn) => async (req,res,next) => {
//     try{

//     }catch(error){
//         res.status(err.code || 500).json({
//             success: false,
//             message: err.message
//         })
//     }

// }