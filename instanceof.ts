class Dog {
    bark(): void {
      console.log("Woof!");
    }
  }
  
class Cat {
    meow(): void {
      console.log("Meow!");
    }
  }
  
  function petSound(pet: Dog | Cat): void {
    if (pet instanceof Dog) {
      pet.bark();
    } else if (pet instanceof Cat) {
      pet.meow();
    }
  }
  
  const myDog = new Dog();
  const myCat = new Cat();
  
  petSound(myDog); // Output: Woof!
  petSound(myCat); // Output: Meow!
export {}