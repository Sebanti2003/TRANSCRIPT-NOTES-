"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addtwo(num) {
    return 2;
}
//in the above code only number type of data is returned
function getvalue(myval) {
    if (myval > 5) {
        return "true";
    }
    return "false";
}
var gethello = function (s) {
    return "";
};
//here the function is taking a number as its arguments
//if we wanna include more than one datatype as a return type in function we can use union but we will look into it after some lessons.
//map method
var heroes = ["superman", "thor", "spiderman"];
heroes.map(function (hero) {
    return "the name of the hero is ".concat(hero);
});
