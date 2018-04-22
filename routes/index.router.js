const express = require('express');
const router = express.Router();
const menuConn = require('../modules/menu/menu.conn');

/* GET home page. */
router.get('/', function (req, res, next) {
    res.redirect('/en');
});
router.get('/:language', function (req, res, next) {
    res.render(req.params.language + '/home/page_root.ejs', {
        title: 'Tassie Cake',
        menuItems: req.params.language === 'ch'?  menuConn.getMenuList(): menuConn.getEnMenuList()
    });
});

module.exports = router;
