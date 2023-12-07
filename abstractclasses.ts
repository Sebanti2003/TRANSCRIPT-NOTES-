abstract class takephoto{
    constructor(
        public cameramode:string,
        public filter:string

    ){}
}
// const obj=new takephoto("clich","filtered");//remove the abstract the error will also remove


//but we can use the child form of it and no error is shown in this case
class photo extends takephoto{

}
const objj=new photo("clich","filtered");

abstract class Shape {
    // Abstract method without implementation
    abstract calculateArea(): number;
  
    // Regular method with implementation
    displayArea(): void {
      const area = this.calculateArea();
      console.log(`Area: ${area}`);
    }
  }
  
  class Circle extends Shape {
    // Implementation of the abstract method
    private radius: number;
  
    constructor(radius: number) {
      super();
      this.radius = radius;
    }
  
    calculateArea(): number {
      return Math.PI * Math.pow(this.radius, 2);
    }
  }
  
  class Rectangle extends Shape {
    // Implementation of the abstract method
    private width: number;
    private height: number;
  
    constructor(width: number, height: number) {
      super();
      this.width = width;
      this.height = height;
    }
  
    calculateArea(): number {
      return this.width * this.height;
    }
  }
  
  // Creating instances and using the abstract class
  const circle = new Circle(5);
  const rectangle = new Rectangle(4, 6);
  
  circle.displayArea();     // Output: Area: 78.53981633974483
  rectangle.displayArea();  // Output: Area: 24
  
//when we give abstract we cannot make objects from the class and we cant use it like that
export {}