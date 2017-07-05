'use strict';

String.prototype.reverse = function () {
   var result = '';
   for (let i = this.length - 1; i >= 0; i--) {
      result += this[i];
   }
   return result;
};

String.prototype.camelcase = function () {
   var prevChar;
   var result = '';
   for (let i = 0; i < this.length; i++) {
      var currentChar = this[i];
      if (i === 0 || prevChar === ' ') {
         result += currentChar.toUpperCase();
      } else {
         result += currentChar;
      }
      prevChar = currentChar;
   }
   return result;
};

module.exports = String;