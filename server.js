const port = process.env.PORT || 8888;
const express = require('express');
const cors = require('cors');

const server = express();

server.use(cors());

server.use('/api/v1', require('./routes'));

server.listen(port, () => {
    console.log(`Application is running on http://localhost:${port}`);
});