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
