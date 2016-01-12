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
