const data = require('../database/database');

const Category = (req, res) => {
    // console.log(req.params)
    if (req.params.categoryName) {
        // console.log(`IF-BLOCK`)
        res.send(
            data.database.filter(
                value => value.category === req.params.categoryName
            )
        );
    } else {
        // console.log(`ELSE-BLOCK`)
        res.send(`Error`);
    }
}

module.exports.Category = Category;