// Generic class representing a simple data holder
// Generic function to echo the input value
function echo(value) {
    return value;
}
// Using the generic function with different types
var resultString = echo("Hello, TypeScript!");
var resultNumber = echo(42);
console.log(resultString); // Output: Hello, TypeScript!
console.log(resultNumber); // Output: 42
// Generic function to apply a transformation using an arrow function
function mapArray(arr, transform) {
    return arr.map(transform);
}
// Example usage with a string array and an arrow function
var stringArray = ["one", "two", "three"];
var stringLengths = mapArray(stringArray, function (str) { return str.length; });
console.log(stringLengths); // Output: [3, 3, 5]
var Box = /** @class */ (function () {
    function Box(value) {
        this.value = value;
    }
    Box.prototype.getValue = function () {
        return this.value;
    };
    return Box;
}());
// Creating instances of the generic class with different types
var stringBox = new Box("Hello, generics!");
var numberBox = new Box(42);
console.log(stringBox.getValue()); // Output: Hello, generics!
console.log(numberBox.getValue()); // Output: 42
