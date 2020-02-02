
const { User, Book, sequelize } = require('../api/models')

function testSetup() {

    beforeAll(async () => {
        
    })

    beforeEach(async () => {

    })

    afterEach(async () => {

    })

    afterAll(async () => {
        await User.destroy({
            where: {},
            truncate: true
        })

        await Book.destroy({
            where: {},
            truncate: true
        })

        await sequelize.connectionManager.close()
    })
}

module.exports = {
    testSetup
}