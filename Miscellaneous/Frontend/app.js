//topic :  Revisting Js (oops)
const stu1 = {
  name: "aman",
  age: 25,
  marks: 95,
  getMarks: function () {
    return this.marks;
  },
};

const stu2 = {
  name: "omkar",
  age: 35,
  marks: 75,
  getMarks: function () {
    return this.marks;
  },
};

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// topic : object prototype
// JavaScript मध्ये प्रत्येक object कडे एक prototype असतो.
// Prototype म्हणजे object चं पालक / बेस ब्लूप्रिंट.
// ✅ सोप्या भाषेत:
// Object म्हणजे एक मुलगा.
// Prototype म्हणजे त्या मुलाचा बाप (parent).
// जर मुलाकडे एखादी गोष्ट नसेल, तर तो आपल्या बापाकडून (prototype कडून) ती घेतो.
// म्हणजेच, जेव्हा आपण एखाद्या object वर property किंवा method शोधतो आणि ती सापडत नाही, तेव्हा JavaScript आपोआप त्या object च्या prototype मध्ये शोधते.

// -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//topic:  factory function => create for object => (mostly not used )(1st way)
//index1 he live server ne run karaych then inspect then in console => let p1 = PersonMaker("vaishnavi",23);(undefine print hoil)//  p1(name,age talk print hoil)  // p1.talk();(hii , my name is vaishnavi)
//factory madhe diff copy create hote
function PersonMaker(name, age) {
  const person = {
    name: name,
    age: age,
    talk() {
      console.log(`hii , my name is ${this.name}`);
    },
  };
  return person;
}

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//topic : new operatoror ....  good method (complicated syntax)(2nd way)
//constructors = doesn't return anything n start whith capital letters

function Person1(name, age) {
  this.name = name;
  this.age = age;
}

Person1.prototype.talk = function () {
  console.log(`hi, my name is ${this.name}`);
};

let p2 = new Person1("vaishnavi", 23); // same copy create hote p2 la new copy create nhi honar
let p3 = new Person1("rahul", 32);

// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// topic: classes in js => same as new operator this is simple and easy to understand
// class also start whith capital letters
//good method simple syntax)(3rd way)
//incosole = print p1 and p2 object // p4.talk === p5.talk (true) bec same copy use hota

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  talk() {
    console.log(`hi, my name is ${this.name}`);
  }
}

let p4 = new Person("rahul", 12);
let p5 = new Person("ramesh", 52);

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//topic: inheritance
// inconsole(Human) - hum1.name //(omkar) print hoil ----hum1.talk();
//incolsole(Student) - // let stu5 = new Student("omkar",25,99); //stu5.marks //(99) print hoil //stu5.talk();//(hi, my name is omkar) print hoil
//inconsole(Teacher) - // let teach1 = new Teacher("rahul",45,"maths"); // teach1.subject //(maths) print hoil //teach1 // teach1.talk();//(hi, my name is rahul) print hoil

class Human {
  constructor(name, age) {
    console.log("person class constructors");
    this.name = name;
    this.age = age;
  }
  talk() {
    console.log(`Hi, My name is ${this.name}`);
  }
}

// let hum1 = new Human("omkar",25);

class Student extends Human {
  constructor(name, age, marks) {
    console.log("student class constructors");
    super(name, age); //parent cls constructors is being called
    this.marks = marks;
  }
}

class Teacher extends Human {
  constructor(name, age, subject) {
    super(name, age); //parent cls constructors is being called
    this.subject = subject;
  }
}

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//inheritance ex2
//inconsole = let dog1 = new Dog("tommy"); dog1; dog1.eat(); //(I am eating) print hoil  dog1.speak(); //(woofff) print hoil
// let cat1 = new Cat("kitty"); cat1.eat(); //(I am eating) print hoil  cat1.speak(); //(meowww) print hoil

class Animal {
  //paratent class
  constructor(name) {
    this.name = name;
    this.type = "warm-blooded";
  }

  eat() {
    console.log("I am eating");
  }
}

class Dog extends Animal {
  //child class
  constructor(name) {
    super(name);
  }

  speak() {
    console.log("woofff");
  }
}

class Cat extends Animal {
  //child class
  constructor(name) {
    super(name);
  }

  speak() {
    console.log("meowww");
  }
}
