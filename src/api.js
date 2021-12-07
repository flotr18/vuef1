const express = require('express')
const app = express()
const port = 3000
const f1drivers = require('./assets/f12021drivers.json')


const cors = require('cors')

app.use(cors())



app.listen(port, () =>
    console.log('Eagle has landed on port 3000!'),
);

app.get('/api/f1drivers', function (req, res) {
    res.header("Content-Type",'application/json');
    res.send(JSON.stringify(f1drivers));
});






