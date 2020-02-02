
module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        username: {
            type: DataTypes.STRING,
            validate: {
                len: {
                    args: 3,
                    msg: "username must be atleast 3 characters in length"
                }
            }
        },
        password: {
            type: DataTypes.STRING,
            validate: {
                len: {
                    args: 3,
                    msg: "password must be atleast 3 characters in length"
                }
            }
        },
        email: {
            type: DataTypes.STRING,
            validate: {
                isLowercase: true,
                len: {
                    args: 5,
                    msg: "email must be atleast 5 characters in length"
                },
                fn: function (val) {
                    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                    if (!re.test(String(val).toLowerCase()))
                        throw new Error("Please fill a valid email address");
                }
            }
        },
        urlImg: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: 'https://.../profile.png'
        },
        firstName: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: ''
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: ''
        },
        about: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: 'About me'
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

    return User
}