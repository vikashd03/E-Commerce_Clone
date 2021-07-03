const Sequelize = require('sequelize');

const sequelize = require('../util/Database');

const Product = sequelize.define('product', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    title: {
        type: Sequelize.STRING,
        allowNull: false
    },
    price: {
        type: Sequelize.DOUBLE,
        allowNull: false
    },
    imageUrl: {
        type: Sequelize.STRING,
        allowNull: false
    },
    description: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

module.exports = Product;



//old code using mysql2//
//===========================================================================================================================//

// const Cart = require('./cart');

// const db = require('../util/Database');

// module.exports = class Product {
//   constructor(id, title, imageUrl, description, price) {
//     this.id = id;
//     this.title = title;
//     this.imageUrl = imageUrl;
//     this.description = description;
//     this.price = price;
//  }

//   save() {
//       return db.execute('INSERT INTO products (title,imageUrl,description,price) VALUES (?,?,?,?)',
//       [this.title,this.imageUrl,this.description,this.price])
//   }

//   static deleteById(id) {

//   }

//   static fetchAll() {
//     return db.execute('SELECT * FROM products')
//   }

//   static findById(id) {
//     return db.execute('SELECT * FROM products WHERE products.id = ?',[id]);
//   }
// };