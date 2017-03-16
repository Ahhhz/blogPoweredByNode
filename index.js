//include express
const express = require('express');

// static file server
const serveStatic = require('serve-static');

// api routes
const api = require('./apiRoutes');

//create an express application
const app = express();


app.use('/', serveStatic( 'src', {
	'index': [ 'index.html' ]
}));

app.use('/api',  api);

//have the application listen on a specific port
app.listen(3000, () => {
    console.log('Example app listening on port 3000!');
});
