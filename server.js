var express = require('express');
var app = express();

app.get('/', function(request, response){
    response.send('Hello MGT-656! Code code code');
});

app.get('/excited-sandpiper', function(request, response){
    response.send('The sandpiper is lose');
});

app.listen(
    process.env.PORT || 4000,
    process.env.IP || 'localhost'
    );
        
