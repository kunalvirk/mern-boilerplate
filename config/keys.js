const keyProd = require('./keys_prod');
const keyDev = require('./keys_dev');

if (process.env.NODE_ENV == 'production') {
    module.exports = keyProd
} else {
    module.exports = keyDev
}