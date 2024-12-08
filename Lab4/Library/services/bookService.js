import express from 'express'
import {Books} from '../app.js'
import { authenticateToken } from './authToken.js';

const router = express.Router();
export default router;

router.get('/', (req, res) => {
    const books = Books.findAll();
    books.then ((books) => {
        if (books.length > 0) {
            return res.json(books);
        } else {
            res.status(404);
            return res.json({
                error: 'No books found'
            });
        }
    })
    .catch ((err) => {
        res.status(500);
        return res.json({
            error: err
        });
    });
});

router.get('/:id', (req, res) => {
    const book = Books.findOne({
        where: {
            BookID: req.params.id,
        },
    });
    book.then ((book) => {
        if (book !== null) {
            return res.json(book);
        } else {
            res.status(404);
            return res.json({
                error: 'No books found'
            });
        }
    })
    .catch ((err) => {
        res.status(500);
        return res.json({
            error: err
        });
    });
});

router.post('/', authenticateToken, (req, res) => {
    Books.create({
        BookName: req.body.BookName,
        BookAuthor: req.body.BookAuthor,
        ReleaseDate: req.body.ReleaseDate
    });
});

router.delete('/:id', authenticateToken, (req, res) => {
    const destPromise = Books.destroy({
        where: {
            BookID: req.params.id,
        },
    });
    destPromise.then ((removedRows) => {
        if (removedRows == 0) {
            res.status(404);
        }
        return res.json({
            removedEntries: removedRows
        });
    })
    .catch ((err) => {
        res.status(500);
        return res.json({
            error: err
        });
    });
});