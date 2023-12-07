"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var seatchoice;
(function (seatchoice) {
    seatchoice[seatchoice["PUSH"] = 10] = "PUSH";
    seatchoice[seatchoice["PULL"] = 22] = "PULL";
    seatchoice[seatchoice["DELETE"] = 90] = "DELETE";
})(seatchoice || (seatchoice = {}));
var first = seatchoice.PUSH;
console.log(first);
