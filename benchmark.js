const siege = require('siege')


siege()
    .on(5000)
    .for(100000).times
    .get('/admin/add-product')
    .attack()