var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    Animal.prototype.makeSound = function () {
        console.log("Generic animal sound");
    };
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog(name, breed) {
        var _this = _super.call(this, name) || this;
        _this.breed = breed;
        return _this;
    }
    Dog.prototype.displayDetails = function () {
        console.log("Name: ".concat(this.name));
        console.log("Breed: ".concat(this.breed));
        // Accessing the protected method from the base class
        this.makeSound();
    };
    return Dog;
}(Animal));
var myDog = new Dog("Buddy", "Golden Retriever");
// Accessing the protected property from the base class
//   console.log(`Name (from base class): ${myDog.name}`); // Error (not accessible)
// Accessing the public method from the derived class
myDog.displayDetails();
// Accessing the protected method from the base class
// This is allowed because it's accessed within the derived class
//   myDog.makeSound();
