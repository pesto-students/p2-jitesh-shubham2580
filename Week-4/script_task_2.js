var Person = function() {};
Person.prototype.initialize=function(name,age){
    this.name=name;
    this.age=age;
}
// TODO: create the class Teacher and a method teach
class Teacher extends Person{
    constructor(name, age){
        super(name, age)
    }
    teach(Subject){
        console.log(` ${this.name} is now teaching ${Subject}.`);
    }
    
}
var him=new Teacher();
him.initialize("Adam",45);
him.teach("Inheritance");