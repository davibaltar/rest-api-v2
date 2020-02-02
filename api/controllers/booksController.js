
const { Book } = require('../models')

/*******/
/* GET */
/*******/

// Returns all books
exports.get = (req, res, next) => {
    try {
        Book.findAll({ limit: 1000 }).then((books) => {
            return res.status(200).json({ status: 'success', message: null, data: books })
        })
    } catch (err) {
        return res.status(500).json({ status: 'fail', message: err.toString(), data: null })
    }
}

// Returns a book by ID
exports.getById = async (req, res, next) => {
    try {
        const book = await Book.findOne({ where: { id: req.params.id } })
        return res.status(200).json({ status: 'success', message: null, data: book })
    } catch (err) {
        return res.status(500).json({ status: 'fail', message: err.toString(), data: null })
    }
}

// Returns a book title by ID
exports.getTitleById = async (req, res, next) => {
    try {
        const book = await Book.findOne({ where: { id: req.params.id } })
        return res.status(200).json({ status: 'success', message: null, data: book ? book.title : null })
    } catch (err) {
        return res.status(500).json({ status: 'fail', message: err.toString(), data: null })
    }
}

/********/
/* POST */
/********/

// Create a new book
exports.post = async (req, res, next) => {
    try {
        var body = req.body
        if (!body.title || !body.author)
            return res.status(400).json({ status: 'fail', message: "Missing parameter", data: null })

        const newBook = await Book.create({ title: body.title, author: body.author })

        if (!newBook)
            return res.status(400).json({ status: 'fail', message: 'Failed to register', data: null })
        return res.status(201).json({ status: 'success', message: null, data: newBook })

    } catch (err) {
        return res.status(500).json({ status: 'fail', message: err.toString(), data: null })
    }
}

/**********/
/* UPTADE */
/**********/

// Update a book by ID
exports.put = async (req, res, next) => {
    try {
        var body = req.body
        const bookBefore = await Book.findOne({ where: { id: req.params.id } })
        if (bookBefore)
            Book.update({
                title: body.title || bookBefore.title,
                author: body.author || bookBefore.author
            }, {
                where: { id: req.params.id }
            }).then(async book => {
                if (!book || book[0] == 0)
                    return res.status(200).json({ status: 'fail', message: null, data: null })

                const bookVerify = await Book.findOne({ where: { id: req.params.id } })
                return res.status(200).json({ status: 'success', message: null, data: bookVerify })
            }).catch(err => {
                return res.status(400).json({ status: 'fail', message: err.toString(), data: null })
            })
        else
            return res.status(200).json({ status: 'fail', message: 'Not found', data: null })
    } catch (err) {
        return res.status(500).json({ status: 'fail', message: err.toString(), data: null })
    }
}

/**********/
/* DELETE */
/**********/

// Delete a book by ID
exports.delete = async (req, res, next) => {
    try {
        const bookBefore = await Book.findOne({ where: { id: req.params.id } })
        if (bookBefore)
            Book.destroy({
                where: { id: req.params.id }
            }).then(function (rowDeleted) {
                if (rowDeleted === 1)  // Deleted successfully
                    return res.status(200).json({ status: 'success', message: null, data: bookBefore })
                return res.status(400).json({ status: 'fail', message: 'Error deleting', data: null })
            }, function (err) {
                return res.status(400).json({ status: 'fail', message: err.toString(), data: null })
            })
        else
            return res.status(200).json({ status: 'fail', message: 'Not found', data: null })
    } catch (err) {
        return res.status(500).json({ status: 'fail', message: err.toString(), data: null })
    }
}