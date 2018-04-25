const getMenuList = () => {
    let menuList = [
        {
            name: '草莓千层',
            iconPath: 'https://s3-us-west-1.amazonaws.com/candy-heart-storage/menu-icon/menu-icon-0.png',
            imgPath: 'https://s3-us-west-1.amazonaws.com/candy-heart-storage/menu-item/menu-item-0.jpg',
            price: '6\'\' $39 | 8\'\' $59 | 10\'\' $79',
            des: '<i class="fa fa-star"></i> 使用草莓果酱做成的酸甜口草莓可丽饼<br>' +
            '<i class="fa fa-star"></i> 鲜奶油+酸奶，再搭配草莓果酱做成酸甜平衡的草莓奶油<br>' +
            '<i class="fa fa-star"></i> 加入新鲜草莓果肉增加口感<br>'
        },
        {
            name: '红豆抹茶千层',
            iconPath: 'https://s3-us-west-1.amazonaws.com/candy-heart-storage/menu-icon/menu-icon-1.png',
            imgPath: 'https://s3-us-west-1.amazonaws.com/candy-heart-storage/menu-item/menu-item-1.jpg',
            price: '6\'\' $42 | 8\'\' $62 | 10\'\' $82',
            des: '<i class="fa fa-star"></i> 选用日式特级抹茶粉，口味纯正<br>' +
            '<i class="fa fa-star"></i> 抹茶粉从运输到使用持续低温保鲜，最大程度保证抹茶的新鲜度<br>' +
            '<i class="fa fa-star"></i> 再加入自制蜜豆综合口感<br>'
        },
        {
            name: '榴莲千层',
            iconPath: 'https://s3-us-west-1.amazonaws.com/candy-heart-storage/menu-icon/menu-icon-2.png',
            imgPath: 'https://s3-us-west-1.amazonaws.com/candy-heart-storage/menu-item/menu-item-2.jpg',
            price: '6\'\' $45 | 8\'\' $72 | 10\'\' $98',
            des: '<i class="fa fa-star"></i> 选用猫山王榴莲，口味纯正<br>' +
            '<i class="fa fa-star"></i> 搭配烤杏仁片，丰富口感<br>'
        },
        {
            name: '椰子千层',
            iconPath: 'https://s3-us-west-1.amazonaws.com/candy-heart-storage/menu-icon/menu-icon-3.png',
            imgPath: 'https://s3-us-west-1.amazonaws.com/candy-heart-storage/menu-item/menu-item-3.jpg',
            price: '6\'\' $39 | 8\'\' $59 | 10\'\'  $79',
            des: '<i class="fa fa-star"></i> 椰子口味可丽饼+清爽的椰子奶油<br>' +
            '<i class="fa fa-star"></i> 再搭配椰蓉增加层次感<br>'
        },
        {
            name: '提拉米苏千层',
            iconPath: 'https://s3-us-west-1.amazonaws.com/candy-heart-storage/menu-icon/menu-icon-4.png',
            imgPath: 'https://s3-us-west-1.amazonaws.com/candy-heart-storage/menu-item/menu-item-4.jpg',
            price: '6\'\' $42 | 8\'\' $62 | 10\'\' $82',
            des: '<i class="fa fa-star"></i> 提拉米苏千层，使用提拉米苏所必备的几样食材而做成<br>' +
            '<i class="fa fa-star"></i> 饼皮是根据传统提拉米苏里有的意式浓缩咖啡做成的可丽饼<br>' +
            '<i class="fa fa-star"></i> 马斯卡彭芝士+新鲜蛋黄做成冰淇淋口感的内馅<br>'
        },
        {
            name: '巧克力千层',
            iconPath: 'https://s3-us-west-1.amazonaws.com/candy-heart-storage/menu-icon/menu-icon-5.png',
            imgPath: 'https://s3-us-west-1.amazonaws.com/candy-heart-storage/menu-item/menu-item-5.jpg',
            price: '6\'\' $42 | 8\'\' $62 | 10\'\' $82',
            des: '<i class="fa fa-star"></i> 选用100%可可脂巧克力制作巧克力可丽饼<br>' +
            '<i class="fa fa-star"></i> 70%黑巧克力+有机鲜奶油做成内馅<br>' +
            '<i class="fa fa-star"></i> 使用12种巧克力做成，醇而不腻<br>'
        },
        {
            name: '草莓牛油果奶昔',
            iconPath: 'https://s3-us-west-1.amazonaws.com/candy-heart-storage/menu-icon/menu-icon-6.png',
            imgPath: 'https://s3-us-west-1.amazonaws.com/candy-heart-storage/menu-item/menu-item-6.jpg',
            price: '$ 12',
            des: '<i class="fa fa-star"></i> 只选用新鲜水果<br>' +
            '<i class="fa fa-star"></i> 零糖零水添加，甜味来自水果和酸奶，搭配燕麦更健康<br>' +
            '<i class="fa fa-star"></i> 低脂低卡+饱腹感，是健身爱好者的放心选择<br>'
        },
        {
            name: '芒果奶昔',
            iconPath: 'https://s3-us-west-1.amazonaws.com/candy-heart-storage/menu-icon/menu-icon-7.png',
            imgPath: 'https://s3-us-west-1.amazonaws.com/candy-heart-storage/menu-item/menu-item-7.jpg',
            price: '$ 12',
            des: '<i class="fa fa-star"></i> 只选用新鲜水果<br>' +
            '<i class="fa fa-star"></i> 零糖零水添加，甜味来自水果和酸奶，搭配燕麦更健康<br>' +
            '<i class="fa fa-star"></i> 低脂低卡+饱腹感，是健身爱好者的放心选择<br>'
        },
        {
            name: '草莓蓝莓奶昔',
            iconPath: 'https://s3-us-west-1.amazonaws.com/candy-heart-storage/menu-icon/menu-icon-8.png',
            imgPath: 'https://s3-us-west-1.amazonaws.com/candy-heart-storage/menu-item/menu-item-8.jpg',
            price: '$ 12',
            des: '<i class="fa fa-star"></i> 只选用新鲜水果<br>' +
            '<i class="fa fa-star"></i> 零糖零水添加，甜味来自水果和酸奶，搭配燕麦更健康<br>' +
            '<i class="fa fa-star"></i> 低脂低卡+饱腹感，是健身爱好者的放心选择<br>'
        }
    ];
    return menuList;
};

const getEnMenuList = () => {
    let menuList = [
        {
            name: 'Strawberry Mille Crepes',
            iconPath: 'https://s3-us-west-1.amazonaws.com/candy-heart-storage/menu-icon/menu-icon-0.png',
            imgPath: 'https://s3-us-west-1.amazonaws.com/candy-heart-storage/menu-item/menu-item-0.jpg',
            price: '6\'\' $39 | 8\'\' $59 | 10\'\' $79',
            des: '<i class="fa fa-star"></i> The crepes are made with natural strawberry jam.<br>' +
            '<i class="fa fa-star"></i> The strawberry cream is made with yogurt and strawberry jam. <br>' +
            '<i class="fa fa-star"></i> Adding some fresh strawberries for taste.<br>'
        },
        {
            name: 'Matcha Red Bean Mille Crepes',
            iconPath: 'https://s3-us-west-1.amazonaws.com/candy-heart-storage/menu-icon/menu-icon-1.png',
            imgPath: 'https://s3-us-west-1.amazonaws.com/candy-heart-storage/menu-item/menu-item-1.jpg',
            price: '6\'\' $42 | 8\'\' $62 | 10\'\' $82',
            des: '<i class="fa fa-star"></i> We use pure taste Japanese Matcha powder.<br>' +
            '<i class="fa fa-star"></i> The Matcha powder is kept in low temperature all-time to ensure its freshness.<br>' +
            '<i class="fa fa-star"></i> Adding homemade honey beans to improve the taste.<br>'
        },
        {
            name: 'Durian Mille Crepes',
            iconPath: 'https://s3-us-west-1.amazonaws.com/candy-heart-storage/menu-icon/menu-icon-2.png',
            imgPath: 'https://s3-us-west-1.amazonaws.com/candy-heart-storage/menu-item/menu-item-2.jpg',
            price: '6\'\' $45 | 8\'\' $72 | 10\'\' $98',
            des: '<i class="fa fa-star"></i> The cream is made with values durian.<br>' +
            '<i class="fa fa-star"></i> Adding baked almond slices for more texture.<br>'
        },
        {
            name: 'Coconut Mille Crepes',
            iconPath: 'https://s3-us-west-1.amazonaws.com/candy-heart-storage/menu-icon/menu-icon-3.png',
            imgPath: 'https://s3-us-west-1.amazonaws.com/candy-heart-storage/menu-item/menu-item-3.jpg',
            price: '6\'\' $39 | 8\'\' $59 | 10\'\'  $79',
            des: '<i class="fa fa-star"></i> Soft coconut crepes + fresh coconut cream.<br>' +
            '<i class="fa fa-star"></i> Topped with shredded coconut stuffing<br>'
        },
        {
            name: 'Tiramisu Mille Crepes',
            iconPath: 'https://s3-us-west-1.amazonaws.com/candy-heart-storage/menu-icon/menu-icon-4.png',
            imgPath: 'https://s3-us-west-1.amazonaws.com/candy-heart-storage/menu-item/menu-item-4.jpg',
            price: '6\'\' $42 | 8\'\' $62 | 10\'\' $82',
            des: '<i class="fa fa-star"></i> Made of several ingredients necessary for Tiramisu.<br>' +
            '<i class="fa fa-star"></i> The crepes are made with traditional Italian espresso.<br>' +
            '<i class="fa fa-star"></i> The cream is made with cheese and fresh egg yolk. <br>'
        },
        {
            name: 'Chocolate Mille Crepes',
            iconPath: 'https://s3-us-west-1.amazonaws.com/candy-heart-storage/menu-icon/menu-icon-5.png',
            imgPath: 'https://s3-us-west-1.amazonaws.com/candy-heart-storage/menu-item/menu-item-5.jpg',
            price: '6\'\' $42 | 8\'\' $62 | 10\'\' $82',
            des: '<i class="fa fa-star"></i> The crepes are made with 100% cocoa chocolate.<br>' +
            '<i class="fa fa-star"></i> The cream is made with 70% dark chocolate and organic whipped cream.<br>' +
            '<i class="fa fa-star"></i> This cake contains 12 different kinds of chocolate. <br>'
        },
        {
            name: 'Strawberry Avocado Smoothie',
            iconPath: 'https://s3-us-west-1.amazonaws.com/candy-heart-storage/menu-icon/menu-icon-6.png',
            imgPath: 'https://s3-us-west-1.amazonaws.com/candy-heart-storage/menu-item/menu-item-6.jpg',
            price: '$ 12',
            des: '<i class="fa fa-star"></i> No sugar and water added, all smoothies are made with fresh organic fruits, yogurt, and oatmeal.<br>' +
            '<i class="fa fa-star"></i> This is a low fat, low calorie dessert, very healthy for gym lovers.<br>'
        },
        {
            name: 'Mango Smoothie',
            iconPath: 'https://s3-us-west-1.amazonaws.com/candy-heart-storage/menu-icon/menu-icon-7.png',
            imgPath: 'https://s3-us-west-1.amazonaws.com/candy-heart-storage/menu-item/menu-item-7.jpg',
            price: '$ 12',
            des: '<i class="fa fa-star"></i> No sugar and water added, all smoothies are made with fresh organic fruits, yogurt, and oatmeal.<br>' +
            '<i class="fa fa-star"></i> This is a low fat, low calorie dessert, very healthy for gym lovers.<br>'
        },
        {
            name: 'Strawberry Blueberry Smoothie',
            iconPath: 'https://s3-us-west-1.amazonaws.com/candy-heart-storage/menu-icon/menu-icon-8.png',
            imgPath: 'https://s3-us-west-1.amazonaws.com/candy-heart-storage/menu-item/menu-item-8.jpg',
            price: '$ 12',
            des: '<i class="fa fa-star"></i> No sugar and water added, all smoothies are made with fresh organic fruits, yogurt, and oatmeal.<br>' +
            '<i class="fa fa-star"></i> This is a low fat, low calorie dessert, very healthy for gym lovers.<br>'
        }
    ];
    return menuList;

};

module.exports.getMenuList = getMenuList;
module.exports.getEnMenuList = getEnMenuList;