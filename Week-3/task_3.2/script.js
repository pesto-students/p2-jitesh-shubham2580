'use strict';
var car = { 
  registrationNumber: "UP 15 9212",
  brand: "I 10",

  displayDetails: function(myName){
      console.log(myName+ " " + this.registrationNumber + " " + this.brand);
  }
}

console.log("bind----------------------------------------------------------")
car.displayDetails('shubham');
var myCarDetails1 =  car.displayDetails.bind(car, 'shubham');
myCarDetails1();

console.log("apply----------------------------------------------------------")

var myCarDetails2 =  car.displayDetails.bind(car, ['shubham']);
myCarDetails2();

console.log("call----------------------------------------------------------")

var myCarDetails3 =  car.displayDetails.call(car, 'shubham');
//myCarDetails3();