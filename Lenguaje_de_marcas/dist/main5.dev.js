"use strict";

var l1 = "agua";
var l2 = "cafe"; // que l2 tenga agua y l1 tenga cafe
//imprimirlo

var a;
a = l1;
l1 = l2;
l2 = a;
console.log(l2); //agua

console.log(l1); //cafe