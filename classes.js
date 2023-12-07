var Classone = /** @class */ (function () {
    function Classone(email, name) {
        var _this = this;
        this.display = function () {
            console.log(_this.name, _this.email);
        };
        this.email = email;
        this.name = name;
    }
    return Classone;
}());
var c1 = new Classone("h@h.com", "sebanti");
c1.display();
