const data = require('../database/database');

const Article = (req, res) => {
    const { ID, categoryName } = req.params;
    // console.log(ID, categoryName)
    if (ID && categoryName) {
        res.send(
            data.database.filter(
                article => article.id === ID && article.category === categoryName
            )
        );

    } else {
        res.send(`NO DATA FOUND`);
    }
}

module.exports.Article = Article;