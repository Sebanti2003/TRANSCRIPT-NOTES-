// Generic class representing a simple data holder
// Generic function to echo the input value
function echo<T>(value: T): T {
    return value;
  }
  
  // Using the generic function with different types
  const resultString: string = echo("Hello, TypeScript!");
  const resultNumber: number = echo(42);
  
  console.log(resultString); // Output: Hello, TypeScript!
  console.log(resultNumber); // Output: 42

  
// Generic function to apply a transformation using an arrow function
function mapArray<T, U>(arr: T[], transform: (item: T) => U): U[] {
    return arr.map(transform);
  }
  
  // Example usage with a string array and an arrow function
  const stringArray = ["one", "two", "three"];
  const stringLengths = mapArray(stringArray, (str) => str.length);
  
  console.log(stringLengths); // Output: [3, 3, 5]
  


class Box<T> {
    private value: T;
  
    constructor(value: T) {
      this.value = value;
    }
  
    getValue(): T {
      return this.value;
    }
  }
  
  // Creating instances of the generic class with different types
  const stringBox = new Box<string>("Hello, generics!");
  const numberBox = new Box<number>(42);
  
  console.log(stringBox.getValue()); // Output: Hello, generics!
  console.log(numberBox.getValue()); // Output: 42
  

