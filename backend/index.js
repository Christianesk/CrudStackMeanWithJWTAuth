
const mongoose = require('mongoose');
const app = require('./app');
const config = require('./config');


//connection database
mongoose.connect(config.DATABASE, { useNewUrlParser: true })
    .then(db => {
        console.log('DB is connected');
        //server
        app.listen(config.PORT, () => {
            console.log(`API REST corriendo puerto ${config.PORT}`);
        });
    })
    .catch(err => console.log(err));
   mongoose.set('useCreateIndex', true);



