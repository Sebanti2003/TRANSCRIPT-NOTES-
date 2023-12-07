"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//now we are gonna talk about objects
var User = {
    name: "sebanti",
    age: 12,
    bool: true
};
var func = function () {
    return { name: "seb", age: 23 };
};
var obj = func();
console.log(typeof obj);