const express = require('express');
const dbcont = require('../controller/dbcontroller');

const router = express.Router();

router.get('/button', dbcont.toolTipButtonHandler);
router.get('/image1', dbcont.toolTipImage1Handler);
router.get('/image2', dbcont.toolTipImage2Handler);
router.get('/image3', dbcont.toolTipImage3Handler);


module.exports = router;