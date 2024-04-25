// Your code here

class Person {

  constructor(firstName, lastName, age) {

    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;

  }

  introduce() {

    console.log(`Hi, I'm ${this.firstName} ${this.lastName} and I'm ${this.age} years old.`);

  }

  static introducePeople(...people) {

    if(!Array.isArray(people)) {

      return Error("introducePeople only takes an array as an argument.");

    }

    let arePeople = people.every(aPerson => aPerson instanceof Person);

    if(!arePeople) {

      throw new Error("All items in array must be Person class instances.")
    } else {

    introduce(arePeople);

    };

  }
}


/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = Person;
} catch {
  module.exports = null;
}
