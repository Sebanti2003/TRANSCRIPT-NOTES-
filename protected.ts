class Animal {
    protected name: string;
  
    constructor(name: string) {
      this.name = name;
    }
  
    protected makeSound(): void {
      console.log("Generic animal sound");
    }
  }
  
  class Dog extends Animal {
    private breed: string;
  
    constructor(name: string, breed: string) {
      super(name);
      this.breed = breed;
    }
  
    public displayDetails(): void {
      console.log(`Name: ${this.name}`);
      console.log(`Breed: ${this.breed}`);
      // Accessing the protected method from the base class
      this.makeSound();
    }
  }
  //protected means only accessible to itself class and the children class which extends from it only
  const myDog = new Dog("Buddy", "Golden Retriever");
  
  // Accessing the protected property from the base class
//   console.log(`Name (from base class): ${myDog.name}`); // Error (not accessible)
  
  // Accessing the public method from the derived class
  myDog.displayDetails();
  
  // Accessing the protected method from the base class
  // This is allowed because it's accessed within the derived class
//   myDog.makeSound();
  