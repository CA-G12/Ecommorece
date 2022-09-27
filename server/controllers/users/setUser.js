const bcrypt = require('bcrypt');
const { setUserQuery } = require('../../database/queries');

const setUser = (req, res, next) => {
    console.log('its setUser controller')
    const {
        firstName, lastName, email, password, imgUrl
    } = req.body;
    bcrypt.hash(password, 10)
        .then(
            (hashedPassword) => {
                setUserQuery({
                    firstName, lastName, email, hashedPassword, imgUrl
                }).then((data) => {
                    if (data.rowCount) {
                        req.body.userId = data.rows[0].id;
                        res.json({
                            msg:`logged in with ${data.rows[0].id}`
                        })
                    }

                }).catch((err) => {
                    next(err);
                });
            },
        );
};

module.exports = setUser;
