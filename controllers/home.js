const data = require('../database/database');

const Home = (req, res) => {
    res.send(data.database);
}

module.exports.Home = Home;