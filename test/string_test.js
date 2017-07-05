'use strict';

var assert = require('chai').assert;
var expect = require('chai').expect;
require('../String.js');

describe('String unit test', function () {
   describe('reverse() function testing', function () {
      it('Reverse String "Hello world !"', function () {
         expect('Hello world !'.reverse()).to.equal('! dlrow olleH');
      });

      it('Reverse String "Martin Luther King"', function () {
         expect('Martin Luther King'.reverse()).to.equal('gniK rehtuL nitraM');
      });
   });

   describe('camelcase() function testing', function () {
      it('Camelcase String "hello world!"', function () {
         expect('hello world!'.camelcase()).to.equal('Hello World!');
      });

      it('Camelcase String "nguyen ba hung"', function() {
         expect('nguyen ba hung'.camelcase()).to.equal('Nguyen Ba Hung');
      });
   });
});