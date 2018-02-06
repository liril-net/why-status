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
	"./206.yaml": 10,
	"./300.yaml": 11,
	"./301.yaml": 12,
	"./302.yaml": 13,
	"./303.yaml": 14,
	"./304.yaml": 15,
	"./305.yaml": 16,
	"./306.yaml": 17,
	"./307.yaml": 18
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

module.exports = {"en":{"brief":"No Content","description":"The server has fulfilled the request but does not need to return an entity-body, and might want to return updated metainformation. The response *MAY* include new or updated metainformation in the form of entity-headers, which if present *SHOULD* be associated with the requested variant.\n\nIf the client is a user agent, it *SHOULD NOT* change its document view from that which caused the request to be sent. This response is primarily intended to allow input for actions to take place without causing a change to the user agent's active document view, although any new or updated metainformation *SHOULD* be applied to the document currently in the user agent's active view.\n\nThe 204 response *MUST NOT* include a message-body, and thus is always terminated by the first empty line after the header fields.\n"}}

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = {"en":{"brief":"Reset Content","description":"The server has fulfilled the request and the user agent *SHOULD* reset the document view which caused the request to be sent. This response is primarily intended to allow input for actions to take place via user input, followed by a clearing of the form in which the input is given so that the user can easily initiate another input action. The response *MUST NOT* include an entity.\n"}}

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = {"en":{"brief":"Reset Content","description":"The server has fulfilled the partial `GET` request for the resource. The request *MUST* have included a Range header field indicating the desired range, and *MAY* have included an If-Range header field to make the request conditional.\n\nThe response *MUST* include the following header fields:\n\n  - Either a Content-Range header field indicating\n    the range included with this response, or a multipart/byteranges\n    Content-Type including Content-Range fields for each part. If a\n    Content-Length header field is present in the response, its\n    value *MUST* match the actual number of OCTETs transmitted in the\n    message-body.\n  - Date\n  - ETag and/or Content-Location, if the header would have been sent\n    in a 200 response to the same request\n  - Expires, Cache-Control, and/or Vary, if the field-value might\n    differ from that sent in any previous response for the same\n    variant\n\nIf the 206 response is the result of an If-Range request that used a strong cache validator, the response *SHOULD NOT* include other entity-headers. If the response is the result of an If-Range request that used a weak validator, the response *MUST NOT* include other entity-headers; this prevents inconsistencies between cached entity-bodies and updated headers. Otherwise, the response *MUST* include all of the entity-headers that would have been returned with a 200 (OK) response to the same request.\n\nA cache *MUST NOT* combine a 206 response with other previously cached content if the ETag or Last-Modified headers do not match exactly.\n\nA cache that does not support the Range and Content-Range headers *MUST NOT* cache 206 (Partial) responses.\n"}}

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = {"en":{"brief":"Multiple Choices","description":"The requested resource corresponds to any one of a set of representations, each with its own specific location, and agent- driven negotiation information is being provided so that the user (or user agent) can select a preferred representation and redirect its request to that location.\n\nUnless it was a HEAD request, the response *SHOULD* include an entity containing a list of resource characteristics and location(s) from which the user or user agent can choose the one most appropriate. The entity format is specified by the media type given in the Content- Type header field. Depending upon the format and the capabilities of\n\nthe user agent, selection of the most appropriate choice *MAY* be performed automatically. However, this specification does not define any standard for such automatic selection.\n\nIf the server has a preferred choice of representation, it *SHOULD* include the specific URI for that representation in the Location field; user agents *MAY* use the Location field value for automatic redirection. This response is cacheable unless indicated otherwise.\n"}}

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = {"en":{"brief":"Moved Permanently","description":"The requested resource has been assigned a new permanent URI and any future references to this resource *SHOULD* use one of the returned URIs. Clients with link editing capabilities ought to automatically re-link references to the Request-URI to one or more of the new references returned by the server, where possible. This response is cacheable unless indicated otherwise.\n\nThe new permanent URI *SHOULD* be given by the Location field in the response. Unless the request method was HEAD, the entity of the response *SHOULD* contain a short hypertext note with a hyperlink to the new URI(s).\n\nIf the 301 status code is received in response to a request other than GET or HEAD, the user agent *MUST NOT* automatically redirect the request unless it can be confirmed by the user, since this might change the conditions under which the request was issued.\n\n  Note: When automatically redirecting a POST request after\n  receiving a 301 status code, some existing HTTP/1.0 user agents\n  will erroneously change it into a GET request.\n"}}

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = {"en":{"brief":"Found","description":"The requested resource resides temporarily under a different URI. Since the redirection might be altered on occasion, the client *SHOULD* continue to use the Request-URI for future requests. This response is only cacheable if indicated by a Cache-Control or Expires header field.\n\nThe temporary URI *SHOULD* be given by the Location field in the response. Unless the request method was HEAD, the entity of the response *SHOULD* contain a short hypertext note with a hyperlink to the new URI(s).\n\nIf the 302 status code is received in response to a request other than GET or HEAD, the user agent *MUST NOT* automatically redirect the request unless it can be confirmed by the user, since this might change the conditions under which the request was issued.\n\n  Note: RFC 1945 and RFC 2068 specify that the client is not allowed\n  to change the method on the redirected request.  However, most\n  existing user agent implementations treat 302 as if it were a 303\n  response, performing a GET on the Location field-value regardless\n  of the original request method. The status codes 303 and 307 have\n  been added for servers that wish to make unambiguously clear which\n  kind of reaction is expected of the client.\n"}}

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = {"en":{"brief":"See Other","description":"The response to the request can be found under a different URI and *SHOULD* be retrieved using a GET method on that resource. This method exists primarily to allow the output of a POST-activated script to redirect the user agent to a selected resource. The new URI is not a substitute reference for the originally requested resource. The 303 response *MUST NOT* be cached, but the response to the second (redirected) request might be cacheable.\n\nThe different URI *SHOULD* be given by the Location field in the response. Unless the request method was HEAD, the entity of the response *SHOULD* contain a short hypertext note with a hyperlink to the new URI(s).\n\n  Note: Many pre-HTTP/1.1 user agents do not understand the 303\n  status. When interoperability with such clients is a concern, the\n  302 status code may be used instead, since most user agents react\n  to a 302 response as described here for 303.\n"}}

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = {"en":{"brief":"Not Modified","description":"If the client has performed a conditional GET request and access is allowed, but the document has not been modified, the server *SHOULD* respond with this status code. The 304 response *MUST NOT* contain a message-body, and thus is always terminated by the first empty line after the header fields.\n\nThe response *MUST* include the following header fields:\n\n  - Date, unless its omission is required\n\nIf a clockless origin server obeys these rules, and proxies and clients add their own Date to any response received without one, caches will operate correctly.\n\n  - ETag and/or Content-Location, if the header would have been sent\n    in a 200 response to the same request\n  - Expires, Cache-Control, and/or Vary, if the field-value might\n    differ from that sent in any previous response for the same\n    variant\n\nIf the conditional GET used a strong cache validator, the response *SHOULD NOT* include other entity-headers. Otherwise (i.e., the conditional GET used a weak validator), the response *MUST NOT* include other entity-headers; this prevents inconsistencies between cached entity-bodies and updated headers.\n\nIf a 304 response indicates an entity not currently cached, then the cache *MUST* disregard the response and repeat the request without the conditional.\n\nIf a cache uses a received 304 response to update a cache entry, the cache *MUST* update the entry to reflect any new field values given in the response.\n"}}

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = {"en":{"brief":"Use Proxy","description":"The requested resource *MUST* be accessed through the proxy given by the Location field. The Location field gives the URI of the proxy. The recipient is expected to repeat this single request via the proxy. 305 responses *MUST* only be generated by origin servers.\n\nNote: RFC 2068 was not clear that 305 was intended to redirect a\nsingle request, and to be generated by origin servers only.  Not\nobserving these limitations has significant security consequences.\n"}}

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = {"en":{"brief":"(Unused)","description":"The 306 status code was used in a previous version of the specification, is no longer used, and the code is reserved.\n"}}

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = {"en":{"brief":"Temporary Redirect","description":"The requested resource resides temporarily under a different URI. Since the redirection *MAY* be altered on occasion, the client *SHOULD* continue to use the Request-URI for future requests. This response is only cacheable if indicated by a Cache-Control or Expires header field.\n\nThe temporary URI *SHOULD* be given by the Location field in the response. Unless the request method was HEAD, the entity of the response *SHOULD* contain a short hypertext note with a hyperlink to the new URI(s) , since many pre-HTTP/1.1 user agents do not understand the 307 status. Therefore, the note *SHOULD* contain the information necessary for a user to repeat the original request on the new URI.\n\nIf the 307 status code is received in response to a request other than GET or HEAD, the user agent *MUST NOT* automatically redirect the request unless it can be confirmed by the user, since this might change the conditions under which the request was issued.\n"}}

/***/ })
/******/ ]);
});