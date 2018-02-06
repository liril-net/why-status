(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["WhyStatus"] = factory();
	else
		root["WhyStatus"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

const dict = {}
const req = __webpack_require__(1)
const regexp = /\.\/(\d+)\.yaml$/
req.keys().forEach(file => {
  const [, code] = regexp.exec(file)
  dict[code] = req(file)
})

function query(code, locale = 'en') {
  const message = dict[code]
  if (!message) return -1

  return message[locale] || -2
}

module.exports = {
  dict,
  query
}


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./100.yaml": 2,
	"./101.yaml": 3,
	"./200.yaml": 4,
	"./201.yaml": 5,
	"./202.yaml": 6,
	"./203.yaml": 7,
	"./204.yaml": 8,
	"./205.yaml": 9,
	"./206.yaml": 10
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 1;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = {"en":{"brief":"Continue","description":"The client *SHOULD* continue with its request. This interim response is used to inform the client that the initial part of the request has been received and has not yet been rejected by the server. The client *SHOULD* continue by sending the remainder of the request or, if the request has already been completed, ignore this response. The server *MUST* send a final response after the request has been completed.\n"}}

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = {"en":{"brief":"Switching Protocols","description":"The server understands and is willing to comply with the client's request, via the `Upgrade` message header field, for a change in the application protocol being used on this connection. The server will switch protocols to those defined by the response's `Upgrade` header field immediately after the empty line which terminates the 101 response.\n\nThe protocol *SHOULD* be switched only when it is advantageous to do so. For example, switching to a newer version of HTTP is advantageous over older versions, and switching to a real-time, synchronous protocol might be advantageous when delivering resources that use such features.\n"},"zh":{"brief":"协议切换","description":"服务器根据 `Upgrade` 消息头字段理解了客户端想要更改本次连接使用的应用协议的请求，并愿意遵守这一请求。随后，在收到中断 `101` 响应的空行后，服务器会根据 `Upgrade` 消息头字段定义的值切换协议。\n\n协议 *应当* 仅在有利的情况下切换。例如，切换到较新版本的 HTTP，或者在分发实时同步的资源时切换到一个实时同步的协议。\n"}}

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = {"en":{"brief":"OK","description":"The request has succeeded. The information returned with the response is dependent on the method used in the request, for example:\n\n*GET* an entity corresponding to the requested resource is sent in the response;\n\n*HEAD* the entity-header fields corresponding to the requested resource are sent in the response without any message-body;\n\n*POST* an entity describing or containing the result of the action;\n\n*TRACE* an entity containing the request message as received by the end server.\n"}}

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = {"en":{"brief":"Created","description":"The request has been fulfilled and resulted in a new resource being created. The newly created resource can be referenced by the URI(s) returned in the entity of the response, with the most specific URI for the resource given by a Location header field. The response *SHOULD* include an entity containing a list of resource characteristics and location(s) from which the user or user agent can choose the one most appropriate. The entity format is specified by the media type given in the Content-Type header field. The origin server *MUST* create the resource before returning the 201 status code. If the action cannot be carried out immediately, the server *SHOULD* respond with 202 (Accepted) response instead.\n\nA 201 response *MAY* contain an `ETag` response header field indicating the current value of the entity tag for the requested variant just created.\n"}}

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = {"en":{"brief":"Accepted","description":"The request has been accepted for processing, but the processing has not been completed. The request might or might not eventually be acted upon, as it might be disallowed when processing actually takes place. There is no facility for re-sending a status code from an asynchronous operation such as this.\n\nThe 202 response is intentionally non-committal. Its purpose is to allow a server to accept a request for some other process (perhaps a batch-oriented process that is only run once per day) without requiring that the user agent's connection to the server persist until the process is completed. The entity returned with this response *SHOULD* include an indication of the request's current status and either a pointer to a status monitor or some estimate of when the user can expect the request to be fulfilled.\n"}}

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = {"en":{"brief":"Non-Authoritative Information","description":"The returned metainformation in the entity-header is not the definitive set as available from the origin server, but is gathered from a local or a third-party copy. The set presented *MAY* be a subset or superset of the original version. For example, including local annotation information about the resource might result in a superset of the metainformation known by the origin server. Use of this response code is not required and is only appropriate when the response would otherwise be 200 (OK).\n"}}

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = {"en":{"brief":"No Content","description":"The server has fulfilled the request but does not need to return an entity-body, and might want to return updated metainformation. The response *MAY* include new or updated metainformation in the form of entity-headers, which if present *SHOULD* be associated with the requested variant.\n\nIf the client is a user agent, it *SHOULD* NOT change its document view from that which caused the request to be sent. This response is primarily intended to allow input for actions to take place without causing a change to the user agent's active document view, although any new or updated metainformation *SHOULD* be applied to the document currently in the user agent's active view.\n\nThe 204 response *MUST NOT* include a message-body, and thus is always terminated by the first empty line after the header fields.\n"}}

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = {"en":{"brief":"Reset Content","description":"The server has fulfilled the request and the user agent *SHOULD* reset the document view which caused the request to be sent. This response is primarily intended to allow input for actions to take place via user input, followed by a clearing of the form in which the input is given so that the user can easily initiate another input action. The response *MUST NOT* include an entity.\n"}}

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = {"en":{"brief":"Reset Content","description":"The server has fulfilled the partial `GET` request for the resource. The request *MUST* have included a Range header field indicating the desired range, and *MAY* have included an If-Range header field to make the request conditional.\n\nThe response *MUST* include the following header fields:\n\n  - Either a Content-Range header field indicating\n    the range included with this response, or a multipart/byteranges\n    Content-Type including Content-Range fields for each part. If a\n    Content-Length header field is present in the response, its\n    value *MUST* match the actual number of OCTETs transmitted in the\n    message-body.\n  - Date\n  - ETag and/or Content-Location, if the header would have been sent\n    in a 200 response to the same request\n  - Expires, Cache-Control, and/or Vary, if the field-value might\n    differ from that sent in any previous response for the same\n    variant\n\nIf the 206 response is the result of an If-Range request that used a strong cache validator, the response *SHOULD* NOT include other entity-headers. If the response is the result of an If-Range request that used a weak validator, the response *MUST NOT* include other entity-headers; this prevents inconsistencies between cached entity-bodies and updated headers. Otherwise, the response *MUST* include all of the entity-headers that would have been returned with a 200 (OK) response to the same request.\n\nA cache *MUST NOT* combine a 206 response with other previously cached content if the ETag or Last-Modified headers do not match exactly.\n\nA cache that does not support the Range and Content-Range headers *MUST NOT* cache 206 (Partial) responses.\n"}}

/***/ })
/******/ ]);
});