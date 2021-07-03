const port = process.env.PORT || 3000;

const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const sequelize = require('./util/Database');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const errorController = require('./controllers/error');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes);
app.use('/', shopRoutes);

app.use(errorController.get404);

sequelize.sync()
    .then(result => {
        // console.log(result);
        app.listen(port);
    })
    .catch(err => {
        console.log(err);
    });