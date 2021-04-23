console.clear();

//...//
//Use a "new" before Function() 
//means create a empty object {} and "this" in Function() will point to the empty Object {}
//
//When useing the Function.prototype to create an object {}
//javascript create the only one object in memory, 
//no matter how many var Fu = Function(); was copyed.
//It's better then create an object in Function itself.

function Person(firstname, lastname) {
    console.log(this);    
    // Person {}
    //     firstname: "Irene"
    //     lastname: "Ho"
    //     __proto__: Object
    this.firstname = firstname;
    this.lastname = lastname;
    console.log("This function is invoked.");
}

Person.prototype.printFullName = function() {
    console.log(this.firstname + " " + this.lastname);
};
// __proto__:
//     printFullName: ƒ ()
//     constructor: ƒ Person(firstname, lastname)
//     __proto__: Object

console.log("-------------------------");
const irene = new Person("Irene", "Ho");
console.log("typeof(irene): " + typeof(irene));

console.log("-------------------------");
const sandra = new Person("Sandra", "Kao");
console.log(sandra);

console.log("-------------------------");
irene.printFullName();
