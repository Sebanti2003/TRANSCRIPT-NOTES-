function printIfNumber(value: string | number): void {
    if (typeof value === "number") {
      console.log("It's a number:", value.toFixed(2));
    } else {
      console.log("It's not a number:", value.toUpperCase());
    }
  }
  
  printIfNumber(42);      // Output: It's a number: 42.00
  printIfNumber("hello"); // Output: It's not a number: HELLO
  