var restify = require('restify');
var fs = require('fs');

// Setup Restify Server
var server = restify.createServer();
server.listen(process.env.port || process.env.PORT || 1234, function () {
   console.log('%s listening to %s', server.name, server.url); 
});

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
server.get('/createPrivateChat/:chatId', function (req, res, next) {
    console.log('%j', req.params);
    res.setHeader('Content-Type', 'application/json');
    res.writeHead(200);
    res.end('{"chatId":"'+ req.params.chatId +'"}');
    next();
    console.log('%j', req.params);
});
server.get('/chatrooms/:query', function(req, res, next) {
    fs.readFile(__dirname + '/chatrooms.html', function (err, data) {
        if (err) {
            next(err);
            return;
        }

        res.setHeader('Content-Type', 'text/html');
        res.writeHead(200);
        res.end(data);
        next();
    });
    return next();
});

server.post('/chatrooms/:query', function(req, res, next) {
    fs.readFile(__dirname + '/chatrooms.html', function (err, data) {
        if (err) {
            next(err);
            return;
        }

        res.setHeader('Content-Type', 'text/html');
        res.writeHead(200);
        res.end(data);
        next();
    });
    return next();
});

server.get('/login/', function(req, res, next) {
     fs.readFile(__dirname + '/login.html', function (err, data) {
        if (err) {
            next(err);
            return;
        }

        res.setHeader('Content-Type', 'text/html');
        res.writeHead(200);
        res.end(data);
        next();
    });
    return next();
});