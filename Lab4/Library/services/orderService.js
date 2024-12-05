import express from 'express'
import {Orders, Books} from '../app.js'

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
            res.status(404);
            return res.json('No matching orders found');
        }
    })
    .catch ((error) => {
        res.status(500)
        return res.json('Error while getting user orders, ' + error);
    });
})

router.post('/', (req, res) => {
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
                if (createdOrder) {
                    return res.json(createdOrder.OrderID);
                } else {
                    res.status(500);
                    return res.json('Failed to add new order');
                }
            })
            .catch ((error) => {
                res.status(500);
                return res.json('Error while adding new order ' + error);
            });
        } else {
            res.status(404);
            return res.json('This book does not exist');
        }
    })
    .catch ((error) => {
        res.status(500);
        return res.json('Error occured while searching for book ' + error);
    });
})

router.delete('/:id', (req, res) => {
    const destPromise = Orders.destroy({
        where: {
            OrderID: req.params.id,
        },
    });
    destPromise.then ((removedRows) => {
        if (removedRows > 0) {
            return res.json('Entries removed: ' + removedRows);
        } else {
            res.status(404);
            return res.json('Did not find any matching entries');
        }
    })
    .catch ((error) => {
        res.status(500);
        return res.json('Error ' + error);
    })
})

router.patch('/:id', (req, res) => {
    const ord = Orders.findOne({
        where: {
            OrderID: req.params.id,
        },
    });

    ord.then ((order) => {
        if (order !== null)
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
    })
    .catch ((error) => {
        res.status(500);
        return res.json('Error ' + error);
    })
})