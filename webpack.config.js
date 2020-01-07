console.log("WEBPACK ROOT CONFIG::", process.env.NODE_ENV)
switch(process.env.NODE_ENV) {
    case 'prod':
    case 'production' :
            console.log("WEBPACK ROOT CONFIG:: production")
            module.exports = require('./config/webpack/webpack.prod');
    case 'dev':
    case 'development' :
            console.log("WEBPACK ROOT CONFIG:: dev")
            module.exports = require('./config/webpack/webpack.dev');
}