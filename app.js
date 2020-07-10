const express = require('express');
const app = express();
app.use(express.static(__dirname + '/public'));

const PORT = process.env.PORT || 3002 || '0.0.0.0' ;
app.listen(PORT, console.log('silicon badger started ...'));

