"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Product = function Product(id, name, cost) {
   _classCallCheck(this, Product);

   this.id = id;
   this.name = name;
   this.cost = cost;
};

var numbers = [10, 20, 30, 40];
var total = numbers.reduce(function (n1, n2) {
   return n1 + n2;
});