"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//in the case of function the type reference from earlier is really important and nessessary
function addtwo(num) {
    return num + 2;
}
addtwo(5); //any is a problem in typescript
function addtwoo(num) {
    return num + 2;
}
addtwoo(5); // now it is automatically returning an number type of data
function signup(name, email, password) {
}
// signup(1,2,3);//it will show problem
function signupp(name, email, password) {
    if (password === void 0) { password = 3; }
}
