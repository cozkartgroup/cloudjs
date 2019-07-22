/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Hapi = __webpack_require__(1);
	var Log = __webpack_require__(2);
	var subscriber_1 = __webpack_require__(4);
	var Inert = __webpack_require__(5);
	var server = new Hapi.Server();
	var Server = (function () {
	    function Server() {
	    }
	    Server.prototype.options = function (settings) {
	        this.serverSettings = settings;
	    };
	    Server.prototype.start = function () {
	        server.connection({
	            address: this.serverSettings.host,
	            port: this.serverSettings.port,
	            routes: {
	                files: {
	                    relativeTo: this.serverSettings.filesPath
	                }
	            }
	        });
	        server.register(Inert, function () { });
	        server.route({
	            method: 'GET',
	            path: '/{filename}',
	            handler: function (request, reply) {
	                reply.file(request.params['filename']);
	            }
	        });
	        //server.route(this.serverSettings.routes);
	        server.start(function (error) {
	            if (error)
	                throw Log.error(error);
	            Log.info('Server running at: ' + server.info.uri);
	        });
	    };
	    Server.prototype.stop = function (timeout) {
	        Log.info('Server is stopping...');
	        server.stop({ timeout: timeout });
	    };
	    Server.prototype.subscribe = function (subscribers) {
	        subscribers.forEach(function (sub) {
	            subscriber_1.subscriberService.add(sub);
	            Log.plain('Registering subscriber: ' + sub.name);
	        });
	    };
	    Server.prototype.publish = function (publisher) {
	        Log.info('PUBLISH: ' + publisher.name);
	        subscriber_1.subscriberService.publish(publisher);
	    };
	    Server.prototype.registerRequest = function (request) {
	        return null;
	    };
	    return Server;
	}());
	exports.Server = Server;


/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = require("hapi");

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var ColorLog = __webpack_require__(3);
	var cError = ColorLog.red.bold;
	var cInfo = ColorLog.green.bold;
	var cWarn = ColorLog.yellow;
	var cPlain = ColorLog.whiteBright;
	exports.error = function (msg) { return console.log(cError(msg)); };
	exports.info = function (msg) { return console.log(cInfo(msg)); };
	exports.warn = function (msg) { return console.log(cWarn(msg)); };
	exports.plain = function (msg) { return console.log(cPlain(msg)); };


/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = require("cli-color");

/***/ },
/* 4 */
/***/ function(module, exports) {

	"use strict";
	var SubscriberService = (function () {
	    function SubscriberService() {
	        this.subscribers = [];
	    }
	    SubscriberService.prototype.add = function (subscriber) {
	        this.subscribers.push(subscriber);
	    };
	    SubscriberService.prototype.remove = function (subscriber) {
	        var subscriberIndex = this.subscribers.indexOf(subscriber);
	        if (subscriberIndex >= 0) {
	            this.subscribers.splice(subscriberIndex, 1);
	        }
	    };
	    SubscriberService.prototype.publish = function (publisher) {
	        this.subscribers.forEach(function (sub) {
	            if (sub.name === publisher.name) {
	                sub.func(publisher.data);
	            }
	        });
	    };
	    return SubscriberService;
	}());
	exports.SubscriberService = SubscriberService;
	;
	exports.subscriberService = new SubscriberService();


/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = require("inert");

/***/ }
/******/ ]);