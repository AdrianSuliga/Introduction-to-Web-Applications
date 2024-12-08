import express from 'express'
import {Orders, Books} from '../app.js'
import { authenticateToken } from './authToken.js';

const router = express.Router();
export default router;

router.get('/:id', (req, res) => {
    const userOrders = Orders.findAll({
        where: {
            UserID: req.params.id,
        },
    });
    userOrders.then ((ords) => {
        if (ords.length > 0) {
            return res.json(ords);
        } else {
            return res.json({
                info: 'User has no orders'
            });
        }
    })
    .catch ((err) => {
        res.status(500)
        return res.json({
            error: err
        });
    });
})

router.post('/', authenticateToken, (req, res) => {
    const book = Books.findOne({
        where: {
            BookID: req.body.BookID,
        },
    });
    book.then ((bookFound) => {
        if (bookFound !== null) {
            const ord = Orders.create({
                UserID: req.body.UserID,
                BookID: req.body.BookID,
                Quantity: req.body.Quantity
            });

            ord.then ((createdOrder) => {
                if (createdOrder !== null) {
                    return res.json(createdOrder.OrderID);
                } else {
                    res.status(500);
                    return res.json({error: 'Failed to add new order'});
                }
            })
            .catch ((err) => {
                res.status(500);
                return res.json({error: err});
            });
        } else {
            res.status(404);
            return res.json({error: 'This book does not exist'});
        }
    })
    .catch ((err) => {
        res.status(500);
        return res.json({error: err});
    });
})

router.delete('/:id', authenticateToken, (req, res) => {
    const destPromise = Orders.destroy({
        where: {
            OrderID: req.params.id,
        },
    });
    destPromise.then ((removedRows) => {
        return res.json({entriesRemoved: removedRows});
    })
    .catch ((err) => {
        res.status(500);
        return res.json({error: err});
    })
})

router.patch('/:id', authenticateToken, (req, res) => {
    const ord = Orders.findOne({
        where: {
            OrderID: req.params.id,
        },
    });

    ord.then ((order) => {
        if (order === null) {
            res.status(404);
            return res.json({error: 'order with this id does not exist'});
        }

        if ("UserID" in req.body) {
            order.UserID = req.body.UserID;
        }

        if ("BookID" in req.body) {
            order.BookID = req.body.BookID;
        }

        if ("Quantity" in req.body) {
            order.Quantity = req.body.Quantity;
        }

        order.save();
        return res.json({info: 'order patched'});
    })
    .catch ((err) => {
        res.status(500);
        return res.json({error: err});
    })
})