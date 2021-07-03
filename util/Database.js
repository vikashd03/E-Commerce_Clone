const Sequelize = require('sequelize')

const sequelize = new Sequelize('node-complete', 'root', '9487788033', {
    dialect: 'mysql',
    host: 'localhost'
});

module.exports = sequelize;



//old code// 
//===========================================================================================================================//

// const mysql = require('mysql2');

// const pool = mysql.createPool({
//     host: 'localhost',
//     user: 'root',
//     database: 'node-complete',
//     password: '9487788033'
// });

// module.exports = pool.promise();