const express = require('express')
const app = express()
const mongoose = require('mongoose')
app.get('/', (req, res) => res.send('hello world'))



// Uncomment this when the front is deployed
// app.use(function (req, res, next) {
//     res.header('Access-Control-Allow-Origin', '*Frontend React app address goes here*');
//     res.header('Access-Control-Allow-Headers',
//         'Content-Type, X-Requested-With, Origin');
//     res.header('Access-Control-Allow-Methods',
//         'GET, POST, PUT, PATCH, DELETE, OPTIONS');
//     next();
// });

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Our app is running on port ${ PORT }`);
});
