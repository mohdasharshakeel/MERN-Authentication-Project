import jwt from "jsonwebtoken"

const userAuth = async (req, res, next) => {
    const { token } = req.cookies;

    if (!token) {
        return res.json({success:false, message : "Not authorization login again"})
    }

    try {
        const tokenDecoded = jwt.verify(token, process.env.JWT_SECRET)
        
        if (tokenDecoded.id) {
            req.body.userId = tokenDecoded.id;

        } else {
             return res.json({success:false, message:"Not Authorized Login again"})
        }

        next();
        
    } catch (error) {
        res.json({
            success: false,
            message: error.message

        })
    }
}

export default userAuth;