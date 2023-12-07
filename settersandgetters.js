var Rectangle = /** @class */ (function () {
    function Rectangle(width, height) {
        this._width = width;
        this._height = height;
    }
    Object.defineProperty(Rectangle.prototype, "width", {
        // Getter for width
        get: function () {
            return this._width;
        },
        // Setter for width
        set: function (value) {
            if (value > 0) {
                this._width = value;
            }
            else {
                console.error("Width must be greater than 0");
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Rectangle.prototype, "height", {
        // Getter for height
        get: function () {
            return this._height;
        },
        // Setter for height
        set: function (value) {
            if (value > 0) {
                this._height = value;
            }
            else {
                console.error("Height must be greater than 0");
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Rectangle.prototype, "area", {
        // Getter for area
        get: function () {
            return this._width * this._height;
        },
        enumerable: false,
        configurable: true
    });
    return Rectangle;
}());
// Creating an instance of Rectangle
var rectangle = new Rectangle(5, 10);
// Using getters
console.log("Width:", rectangle.width); // Output: 5
console.log("Height:", rectangle.height); // Output: 10
console.log("Area:", rectangle.area); // Output: 50
// Using setters
rectangle.width = 8;
rectangle.height = 12;
console.log("New Width:", rectangle.width); // Output: 8
console.log("New Height:", rectangle.height); // Output: 12
console.log("New Area:", rectangle.area); // Output: 96
// Trying to set invalid values
rectangle.width = -5; // Error message: Width must be greater than 0
rectangle.height = 0; // Error message: Height must be greater than 0
