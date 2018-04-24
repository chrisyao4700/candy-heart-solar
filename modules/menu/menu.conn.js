const getMenuList = () => {
    let menuList = [
        {
            name: '草莓千层',
            iconPath: 'https://s3-us-west-1.amazonaws.com/candy-heart-storage/menu-icon/menu-icon-0.png',
            imgPath: 'https://s3-us-west-1.amazonaws.com/candy-heart-storage/menu-item/menu-item-0.jpg',
            price: '6\'\' $39 | 8\'\' $59 | 10\'\' $79'
        },
        {
            name: '红豆抹茶千层',
            iconPath: 'https://s3-us-west-1.amazonaws.com/candy-heart-storage/menu-icon/menu-icon-1.png',
            imgPath: 'https://s3-us-west-1.amazonaws.com/candy-heart-storage/menu-item/menu-item-1.jpg',
            price: '6\'\' $42 | 8\'\' $62 | 10\'\' $82'
        },
        {
            name: '榴莲千层',
            iconPath: 'https://s3-us-west-1.amazonaws.com/candy-heart-storage/menu-icon/menu-icon-2.png',
            imgPath: 'https://s3-us-west-1.amazonaws.com/candy-heart-storage/menu-item/menu-item-2.jpg',
            price: '6\'\' $45 | 8\'\' $72 | 10\'\' $98'
        },
        {
            name: '椰子千层',
            iconPath: 'https://s3-us-west-1.amazonaws.com/candy-heart-storage/menu-icon/menu-icon-3.png',
            imgPath: 'https://s3-us-west-1.amazonaws.com/candy-heart-storage/menu-item/menu-item-3.jpg',
            price: '6\'\' $39 | 8\'\' $59 | 10\'\'  $79'
        },
        {
            name: '提拉米苏千层',
            iconPath: 'https://s3-us-west-1.amazonaws.com/candy-heart-storage/menu-icon/menu-icon-4.png',
            imgPath: 'https://s3-us-west-1.amazonaws.com/candy-heart-storage/menu-item/menu-item-4.jpg',
            price: '6\'\' $42 | 8\'\' $62 | 10\'\' $82'
        },
        {
            name: '巧克力千层',
            iconPath: 'https://s3-us-west-1.amazonaws.com/candy-heart-storage/menu-icon/menu-icon-5.png',
            imgPath: 'https://s3-us-west-1.amazonaws.com/candy-heart-storage/menu-item/menu-item-5.jpg',
            price: '6\'\' $42 | 8\'\' $62 | 10\'\' $82'
        },
        {
            name: '草莓牛油果奶昔',
            iconPath: 'https://s3-us-west-1.amazonaws.com/candy-heart-storage/menu-icon/menu-icon-6.png',
            imgPath: 'https://s3-us-west-1.amazonaws.com/candy-heart-storage/menu-item/menu-item-6.jpg',
            price: '$ 12'
        },
        {
            name: '芒果奶昔',
            iconPath: 'https://s3-us-west-1.amazonaws.com/candy-heart-storage/menu-icon/menu-icon-7.png',
            imgPath: 'https://s3-us-west-1.amazonaws.com/candy-heart-storage/menu-item/menu-item-7.jpg',
            price: '$ 12'
        },
        {
            name: '草莓蓝莓奶昔',
            iconPath: 'https://s3-us-west-1.amazonaws.com/candy-heart-storage/menu-icon/menu-icon-8.png',
            imgPath: 'https://s3-us-west-1.amazonaws.com/candy-heart-storage/menu-item/menu-item-8.jpg',
            price: '$ 12'
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
            price: '6\'\' $39 | 8\'\' $59 | 10\'\' $79'
        },
        {
            name: 'Matcha Red Bean Mille Crepes',
            iconPath: 'https://s3-us-west-1.amazonaws.com/candy-heart-storage/menu-icon/menu-icon-1.png',
            imgPath: 'https://s3-us-west-1.amazonaws.com/candy-heart-storage/menu-item/menu-item-1.jpg',
            price: '6\'\' $42 | 8\'\' $62 | 10\'\' $82'
        },
        {
            name: 'Durian Mille Crepes',
            iconPath: 'https://s3-us-west-1.amazonaws.com/candy-heart-storage/menu-icon/menu-icon-2.png',
            imgPath: 'https://s3-us-west-1.amazonaws.com/candy-heart-storage/menu-item/menu-item-2.jpg',
            price: '6\'\' $45 | 8\'\' $72 | 10\'\' $98'
        },
        {
            name: 'Coconut Mille Crepes',
            iconPath: 'https://s3-us-west-1.amazonaws.com/candy-heart-storage/menu-icon/menu-icon-3.png',
            imgPath: 'https://s3-us-west-1.amazonaws.com/candy-heart-storage/menu-item/menu-item-3.jpg',
            price: '6\'\' $39 | 8\'\' $59 | 10\'\'  $79'
        },
        {
            name: 'Tiramisu Mille Crepes',
            iconPath: 'https://s3-us-west-1.amazonaws.com/candy-heart-storage/menu-icon/menu-icon-4.png',
            imgPath: 'https://s3-us-west-1.amazonaws.com/candy-heart-storage/menu-item/menu-item-4.jpg',
            price: '6\'\' $42 | 8\'\' $62 | 10\'\' $82'
        },
        {
            name: 'Chocolate Mille Crepes',
            iconPath: 'https://s3-us-west-1.amazonaws.com/candy-heart-storage/menu-icon/menu-icon-5.png',
            imgPath: 'https://s3-us-west-1.amazonaws.com/candy-heart-storage/menu-item/menu-item-5.jpg',
            price: '6\'\' $42 | 8\'\' $62 | 10\'\' $82'
        },
        {
            name: 'Strawberry Avocado Smoothie',
            iconPath: 'https://s3-us-west-1.amazonaws.com/candy-heart-storage/menu-icon/menu-icon-6.png',
            imgPath: 'https://s3-us-west-1.amazonaws.com/candy-heart-storage/menu-item/menu-item-6.jpg',
            price: '$ 12'
        },
        {
            name: 'Mango Smoothie',
            iconPath: 'https://s3-us-west-1.amazonaws.com/candy-heart-storage/menu-icon/menu-icon-7.png',
            imgPath: 'https://s3-us-west-1.amazonaws.com/candy-heart-storage/menu-item/menu-item-7.jpg',
            price: '$ 12'
        },
        {
            name: 'Strawberry Blueberry Smoothie',
            iconPath: 'https://s3-us-west-1.amazonaws.com/candy-heart-storage/menu-icon/menu-icon-8.png',
            imgPath: 'https://s3-us-west-1.amazonaws.com/candy-heart-storage/menu-item/menu-item-8.jpg',
            price: '$ 12'
        }
    ];
    return menuList;

};

module.exports.getMenuList = getMenuList;
module.exports.getEnMenuList = getEnMenuList;