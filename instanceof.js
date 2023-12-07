var Dog = /** @class */ (function () {
    function Dog() {
    }
    Dog.prototype.bark = function () {
        console.log("Woof!");
    };
    return Dog;
}());
var Cat = /** @class */ (function () {
    function Cat() {
    }
    Cat.prototype.meow = function () {
        console.log("Meow!");
    };
    return Cat;
}());
function petSound(pet) {
    if (pet instanceof Dog) {
        pet.bark();
    }
    else if (pet instanceof Cat) {
        pet.meow();
    }
}
var myDog = new Dog();
var myCat = new Cat();
petSound(myDog); // Output: Woof!
petSound(myCat); // Output: Meow!
