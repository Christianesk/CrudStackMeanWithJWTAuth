
const generator = require('generate-password');

const password = generator.generate({
    length: 15,
    numbers: true
});

module.exports={
    PORT: process.env.PORT || 3000,
    DATABASE: process.env.MONGODB || 'mongodb://localhost/shop',
    SECRET_TOKEN: password,
    URL_FRONTEND: 'http://localhost:4200'
}