const express = require('express');
const router = express.Router();  // allowing to create multiple end-points for the api

router.use("/sirenBlog", require('./home')); // appending home route
router.use("/sirenBlog", require('./category')); // appending category route
router.use("/sirenBlog", require('./article')); // appending article route

module.exports = router;