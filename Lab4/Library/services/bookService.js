import express from 'express'
import {Books} from '../app.js'

const router = express.Router();
export default router;

// HTTP logic
router.get('/', (req, res) => {
    const books = Books.findAll();
    books.then ((books) => {
        if (books.length > 0) {
            return res.json(books);
        } else {
            res.status(404);
            return res.json('No books found');
        }
    })
    .catch ((error) => {
        res.status(500);
        return res.json('Error ', error);
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
            return res.json('Book not found');
        }
    })
    .catch ((error) => {
        res.status(500);
        return res.json('Error ', error);
    });
});

router.post('/', (req, res) => {
    Books.create({
        BookName: req.body.BookName,
        BookAuthor: req.body.BookAuthor,
        ReleaseDate: req.body.ReleaseDate
    });
});

router.delete('/:id', (req, res) => {
    const destPromise = Books.destroy({
        where: {
            BookID: req.params.id,
        },
    });
    destPromise.then ((removedRows) => {
        if (removedRows > 0) {
            return res.json('Entries removed: ' + removedRows);
        } else {
            res.status(404);
            return res.json('Did not find any matching entry');
        }
    })
    .catch ((error) => {
        res.status(500);
        return res.json('Error ', error);
    });
});