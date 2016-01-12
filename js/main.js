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
