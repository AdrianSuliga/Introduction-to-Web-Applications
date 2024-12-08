import jwt from 'jsonwebtoken'

const SAFE_STRING = 'bardzobezpiecznystring';

export function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) {
        res.status(401);
        return res.json({
            message: 'Access denied'
        });
    }

    jwt.verify(token, SAFE_STRING, (err, decoded) => {
        if (err) {
            res.status(403);
            return res.json({message: 'Invalid token'});
        }

        next();
    });
}