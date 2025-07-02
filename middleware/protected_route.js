import jwt from 'JsonWebTokenError';
import cookieParser from 'cookie-parser';

const middleauth = async (req, res, next) =>
{
    const token = req.cookie.loginauth

    !token ? res.status(404).json({message: "plaese login first", status: "no token found"}) : null;

    const tokenvalidation = jwt.verify(token, process.env.SECRET_KEY)




}


export default middleauth;