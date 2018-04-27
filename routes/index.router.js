const express = require('express');
const router = express.Router();
const menuConn = require('../modules/menu/menu.conn');

/* GET home page. */
router.get('/', function (req, res, next) {
    res.redirect('/en');
});
router.get('/:language', function (req, res, next) {
    let lan = req.params.language;
    res.render(lan + '/home/page_root.ejs', {
        title: lan === 'ch' ? '唐心蛋糕' : 'Tassie Cake',
        menuItems: lan === 'ch' ? menuConn.getMenuList() : menuConn.getEnMenuList()
    });
});

module.exports = router;
