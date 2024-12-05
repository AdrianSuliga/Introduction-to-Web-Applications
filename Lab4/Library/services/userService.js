import express from 'express'
import {Users} from '../app.js'

const router = express.Router();
export default router;

router.post('/register', (req, res) => {
    const existingUser = Users.findOne({
        where: {
            UserMail: req.body.UserMail,
            UserPassword: req.body.UserPassword
        }
    });

    existingUser.then ((user) => {
        if (user !== null) {
            return res.json('User already registered');
        } else {
            const newUser = Users.create({
                UserMail: req.body.UserMail,
                UserPassword: req.body.UserPassword
            });

            newUser.then ((usr) => {
                if (usr !== null) {
                    return res.json(usr.UserID);
                } else {
                    res.status(500);
                    return res.json('Failed to create new user');
                }
            })
            .catch ((error) => {
                res.status(500);
                return res.json('Error ' + error);
            })
        }
    })
    .catch ((error) => {
        res.status(500);
        return res.json('Error while searching user database ' + error);
    })
})

router.post('/login', (req, res) => {
    const existingUser = Users.findOne({
        where: {
            UserMail: req.body.UserMail
        }
    });

    existingUser.then ((user) => {
        if (user === null) {
            res.status(404);
            return res.json('User does not exist');
        }

        if (req.body.UserPassword == user.UserPassword) {
            return res.json('User successfully logged in');
        } else {
            res.status(401);
            return res.json('Wrong credentials');
        }
    })
    .catch ((error) => {
        res.status(500);
        res.send('Error ' + error);
    })
})