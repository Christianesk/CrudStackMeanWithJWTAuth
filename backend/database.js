const mongoose = require('mongoose');


mongoose.set('URI_DB', process.env.MONGODB || 'mongodb://localhost/shop');


mongoose.connect(mongoose.get('URI_DB'))
.then( db => console.log('DB is connected'))
.catch(err =>console.log(err));


module.exports=mongoose;