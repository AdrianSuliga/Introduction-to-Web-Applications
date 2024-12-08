import express from 'express'
import {Users} from '../app.js'
import { authenticateToken } from './authToken.js';

const router = express.Router();
export default router;

router.post('/register', authenticateToken, (req, res) => {
    const existingUser = Users.findOne({
        where: {
            UserMail: req.body.UserMail,
            UserPassword: req.body.UserPassword
        }
    });

    existingUser.then ((user) => {
        if (user !== null) {
            return res.json({info: 'user already registered'});
        } else {
            const newUser = Users.create({
                UserMail: req.body.UserMail,
                UserPassword: req.body.UserPassword
            });

            newUser.then ((usr) => {
                if (usr === null) {
                    res.status(500);
                    return res.json({error: 'failed to create new user'});
                } else {
                    return res.json(usr.UserID);
                }
            })
            .catch ((err) => {
                res.status(500);
                return res.json({error: err});
            })
        }
    })
    .catch ((err) => {
        res.status(500);
        return res.json({error: err});
    })
})

router.post('/login', authenticateToken, (req, res) => {
    const existingUser = Users.findOne({
        where: {
            UserMail: req.body.UserMail
        }
    });

    existingUser.then ((user) => {
        if (user === null) {
            res.status(404);
            return res.json({error: 'user does not exist'});
        }

        if (req.body.UserPassword == user.UserPassword) {
            return res.json({info: 'user successfully logged in'});
        } else {
            res.status(401);
            return res.json({error: 'wrong credentials'});
        }
    })
    .catch ((err) => {
        res.status(500);
        res.send({error: err});
    })
})