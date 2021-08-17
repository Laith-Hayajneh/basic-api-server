'use strict';
const express = require('express');
const server = express();

const notFoundHandler = require('./error-handlers/404');
const errorHandler = require('./error-handlers/500');
// const browserMiddleware = require('./middleware/');
const loggerMeddleware = require('./middleware/logger');
const validator=require('./middleware/validator')
server.use(express.json());

const foodRoutes = require('./routes/food');
const clothesRoutes = require('./routes/clothes');

app.use(foodRoutes);
app.use(clothesRoutes);





// app.use(browserMiddleware);// using app.use will apply the middleware to all the access points
server.use(loggerMeddleware);


// http://localhost:3001/person?name=laith
server.get('/person',validator)

server.get('/', (req, res) => {
    res.status(200).send("working fine")
});

server.get('/bad',(req,res,next)=>{
    next('error from bad end point')
})

server.use('*', notFoundHandler);
server.use(errorHandler)

function start(port) {
    server.listen(port, () => { console.log(`listining on ${port}`) });

}


module.exports = {
    start,
    server
}