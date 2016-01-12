(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports = function(url, successHandler, errorHandler) {
  var xhr = typeof XMLHttpRequest != 'undefined'
    ? new XMLHttpRequest()
    : new ActiveXObject('Microsoft.XMLHTTP');
  xhr.open('get', url, true);
  xhr.onreadystatechange = function() {
    var status;
    var data;
    // https://xhr.spec.whatwg.org/#dom-xmlhttprequest-readystate
    if (xhr.readyState == 4) { // `DONE`
      status = xhr.status;
      if (status == 200) {
        data = JSON.parse(xhr.responseText);
        successHandler && successHandler(data);
      } else {
        errorHandler && errorHandler(status);
      }
    }
  };
  xhr.send();
};

},{}],2:[function(require,module,exports){
module.exports = function(url, callback) {

  var returnScript, fName, uniqueSubstring, id;

  // Need a random name to avoid collisions:
  uniqueSubstring = ((new Date()).getTime()).toString();
  id = uniqueSubstring.substr(uniqueSubstring.length - 4) + Math.floor(Math.random()*1001);
  fName = "jsonCallback_" + id;

  returnScript = document.createElement('script');
  returnScript.id = id;
  returnScript.src = url + (url.indexOf("?") > -1 ? "&" : "?") + 'callback=' + fName;
  returnScript.async = true;
  document.getElementsByTagName('head')[0].appendChild(returnScript);

  window[fName] = function(data) {
    callback(data); window[fName] = null;
    // Clean up a bit
    console.log("loading complete, removing: " + id);
    document.getElementById(id).remove()
  }
  // How to handle errors? use a setTimeOut to delay and then window[fName] = null;
  // ...or (don't think this works in IE tho):
  returnScript.onerror = function() {
    window[fName] = null;
    // plus whatever add. error handling you want
  }

};

},{}],3:[function(require,module,exports){
var jsonpCaller = require('./jsonp'),
  jsonCaller = require('./json'),
  stringToInt = require('./parseInt');

// To Do: convert the following into unit tests.

// can also loop through and jsonp for all posts, i.e.

// pure jsonp request
// for (var i = 1; i <= 20; i++) {
//   (function(index) {
//     setTimeout(jsonpCaller, (index * 500), "http://jsonplaceholder.typicode.com/posts/" + index, function(data) {
//       console.log("this jsonpCaller function was called at: " + index + " seconds.");
//       console.log(data);
//     });
//   })(i);
// }

// jsonCaller('http://jsonplaceholder.typicode.com/posts/1', function(data) {
//   console.log(data);
// }, function(status) {
//   console.log("Error: " + status);
// });
//
// console.log(parseInt('73124920911'));

},{"./json":1,"./jsonp":2,"./parseInt":4}],4:[function(require,module,exports){
module.exports = function(numString) {

  // ensure that the parameter is a string before conversion.
  if (typeof numString == "string") {

    // since we are mapping each place or the number (power or base 10)
    // we need to split the array by place and reverse, since we decided to
    // iterate starting from index 0, moving up powers of 10.
    var stringArr = numString.split("").reverse();

    // initialize our number since we are adding by a factor of each exponent
    var num = 0;

    for (i = 0; i < stringArr.length; i++) {
      var stringChar = stringArr[i];

      // retrieve character code form ascii
      var charCode = stringChar.charCodeAt(0);

      // if you subtract 48 from the character code of a base 10 number in 
      // ascii you will obtain the value of that code.
      // then simply multiple by the exponent of the place within the number
      num = num + ((charCode - 48) * (Math.pow(10, i)));
    }

    return num;

  }
};

},{}]},{},[3]);
