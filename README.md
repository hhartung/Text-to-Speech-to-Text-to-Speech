# express-ssl-starter-kit
A simple SSL enabled express.js server with certificate generate helper script

## How to use the server

* Open your terminal and `cd` into this directory
* Don't forget to run `npm install` ;) (once is enough)
* Run `npm run gen-crt` to generate a self-signed certificate (works only on Unix systems! No windows, sorry)
* The server can simply be started with `npm start`

### Note on security

**THIS IS NOT A PRODUCTION READY SYSTEM!** This code is just for tinkering arround and prototyping purposes, in which it is unavoidable to serve content over SSL. If you need SSL on a production system, please make sure you understand the underlying technology and learn how to setup an SSL server properly!
**Do not ever commit you private key in this repo!**

## I wnat to use this for my own project

Simply _fork_ this repo on Github and continue to work from there. Pull-Request are welcome :)
