var express = require('express');
var router = express.Router();
var menuConn = require('../modules/menu/menu.conn');

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('home/page_root.ejs', {
        title: 'Tassie Cake',
        menuItems: menuConn.getMenuList()
    });
});

module.exports = router;
