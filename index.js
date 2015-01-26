/**
  * Simple express SSL enabled static file server snippet
  * jens a. ewald, muthesius kunsthochschule, 2015
  *
  * Note 1: Don't forget to run `npm install` ;)
  * Note 2: Run `npm run gen-crt` to generate a self-signed certificate
  * Note 3: The server can simply be started with `npm start`
  */
var express = require('express')
    , app = express()
    , HOST = "127.0.0.1"
    , PORT = 8080
    , httpapp = express()
    , fs = require('fs')
    , options = {
        key: fs.readFileSync('server.key'),
        cert: fs.readFileSync('server.crt'),
        requestCert: true
    }
  , server = require('https').createServer(options, app);

app.use("/", express.static(__dirname + '/public'));

server.on('error', function (e) {
  if (e.code == 'EADDRINUSE') {
    console.log('Address in use, retrying...');
    setTimeout(function () {
      server.close();
      server.listen(PORT, HOST);
    }, 1000);
  }
});

server.listen(PORT, HOST, function () {
  console.log("Server running on https://"+HOST+":"+PORT)
});
