const express = require('express');
const app = express();

//app.use(express.bod());
var router = require('./router');

app.use('/', router);




app.listen(3000, function () {
	console.log('Example app listening on port 3000!')
});

