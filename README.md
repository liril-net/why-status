[![npm][npm]][npm-url]
[![deps][deps]][deps-url]

<div align="center">
  <h1>Why Stauts</h1>
  <p>🤔Tell me what is the meaning of this status?</p>
</div>

<h2 align="center">Install</h2>

```bash
npm install -g why-status
```

<h2 align="center">Usage</h2>

Just input `ws code [lang]`, and you will see what is the meaning of `code`.

```bash
ws 101
# why-status 101
```

This should print some text like below:

```
Switching Protocols

The server understands and is willing to comply with the client's request, via the Upgrade message header field, for a change in the application protocol being used on this connection. The server will switch protocols to those defined by the response's Upgrade header field immediately after the empty line which terminates the 101 response.

The protocol SHOULD be switched only when it is advantageous to do so. For example, switching to a newer version of HTTP is advantageous over older versions, and switching to a real-time, synchronous protocol might be advantageous when delivering resources that use such features.
```

<h2 align="center">Language</h2>

Currently we only support language below, it will be greate if you can give me some help.

- zh
- en

<h2 align="center">Code</h2>

**Reference:**
- http://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html
- http://www.w3.org/Protocols/rfc2616/rfc2616-sec6.html#sec6.1.1

### Informational 1xx
Request received, continuing process

- [x] 100: 'Continue'
- [x] 101: 'Switching Protocols'

### Successful 2xx
The action was successfully received, understood, and accepted

- [ ] 200: 'OK'
- [ ] 201: 'Created'
- [ ] 202: 'Accepted'
- [ ] 203: 'Non-Authoritative Information'
- [ ] 204: 'No Content'
- [ ] 205: 'Reset Content'
- [ ] 206: 'Partial Content'
- [ ] 207: 'Multi Status' # WebDAV; RFC 4918
- [ ] 208: 'Already Reported' # WebDAV; RFC 5842
- [ ] 226: 'IM Used' # RFC 3229

### Redirection 3xx
Further action must be taken in order to complete the request

- [ ] 300: 'Multiple Choices'
- [ ] 301: 'Moved Permanently'
- [ ] 302: 'Found'
- [ ] 303: 'See Other'
- [ ] 304: 'Not Modified'
- [ ] 305: 'Use Proxy' # since HTTP/1.1
- [ ] 306: 'Switch Proxy'
- [ ] 307: 'Temporary Redirect' # since HTTP/1.1
- [ ] 308: 'Permanent Redirect' # RFC 7538

### Client Error 4xx
The request contains bad syntax or cannot be fulfilled

- [ ] 400: 'Bad Request'
- [ ] 401: 'Unauthorized'
- [ ] 402: 'Payment Required'
- [ ] 403: 'Forbidden'
- [ ] 404: 'Not Found'
- [ ] 405: 'Method Not Allowed'
- [ ] 406: 'Not Acceptable'
- [ ] 407: 'Proxy Authentication Required'
- [ ] 408: 'Request Time-out'
- [ ] 409: 'Conflict'
- [ ] 410: 'Gone'
- [ ] 411: 'Length Required'
- [ ] 412: 'Precondition Failed'
- [ ] 413: 'Request Entity Too Large'
- [ ] 414: 'Request-URI Too Large'
- [ ] 415: 'Unsupported Media Type'
- [ ] 416: 'Requested Range not Satisfiable'
- [ ] 417: 'Expectation Failed'

Any attempt to brew coffee with a teapot should result in the error
code "418 I'm a teapot". The resulting entity body MAY be short and
stout.

- [ ] 418: 'I\'m a teapot' # RFC 2324
- [ ] 421: 'Misdirected Request'
- [ ] 422: 'Unprocessable Entity'
- [ ] 423: 'Locked'
- [ ] 424: 'Failed Dependency'
- [ ] 426: 'Upgrade Required'
- [ ] 428: 'Precondition Required' # RFC 6585
- [ ] 429: 'Too Many Requests'
- [ ] 431: 'Request Header Fields Too Large' # RFC 6585
- [ ] 451: 'Unavailable For Legal Reasons'

### Server Error 5xx
The server failed to fulfill an apparently valid request

- [ ] 500: 'Internal Server Error'
- [ ] 501: 'Not Implemented'
- [ ] 502: 'Bad Gateway'
- [ ] 503: 'Service Unavailable'
- [ ] 504: 'Gateway Time-out'
- [ ] 505: 'HTTP Version not Supported'
- [ ] 506: 'Variant Also Negotiates' # RFC 2295
- [ ] 507: 'Insufficient Storage'
- [ ] 508: 'Loop Detected' # WebDAV; RFC 5842
- [ ] 510: 'Not Extended' # RFC 2774
- [ ] 511: 'Network Authentication Required' # RFC 6585

<h2 align="center">Thanks</h2>

Sincere thanks to the follwing projects:

- [node-http-status](https://github.com/adaltas/node-http-status/blob/master/src/index.litcoffee)


<h2 align="center">Maintainers</h2>

<table>
  <tbody>
    <tr>
      <td align="center">
        <img width="150" height="150"
        src="https://avatars3.githubusercontent.com/u/16029685?v=3&s=150">
        </br>
        <a href="https://github.com/liril-net">Cyril Su</a>
      </td>
    </tr>
  <tbody>
</table>

[npm]: https://img.shields.io/npm/v/why-status.svg
[npm-url]: https://npmjs.com/package/why-status

[deps]: https://david-dm.org/liril-net/why-status/status.svg
[deps-url]: https://david-dm.org/liril-net/why-status
