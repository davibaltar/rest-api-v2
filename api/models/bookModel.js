
module.exports = (sequelize, DataTypes) => {
    const Book = sequelize.define('Book', {
        title: {
            type: DataTypes.STRING,
            validate: {
                len: {
                    args: 3,
                    msg: "title must be atleast 3 characters in length"
                }
            }
        },
        author: {
            type: DataTypes.STRING,
            validate: {
                len: {
                    args: 3,
                    msg: "author must be atleast 3 characters in length"
                }
            }
        },
        createdAt: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW
        },
        updatedAt: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW
        }
    })

    return Book
}