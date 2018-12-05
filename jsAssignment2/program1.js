var person1={fname:"Amitabh",
             lname:"Bachchan",
             age:75,
             skills:["Dancing","Horse riding"],
             address:{city:'Mumbai',
                       pincode:578493},
             DateOfBirth:Date='11/11/1943',
             Married:true,
             Profession:"Acting"};
var person2={fname:"Sachin",
             lname:"Tendulkar",
             age:50,
             skills:["Batsman","Good speaker"],
             address:{city:'Mumbai',
                       pincode:578493},
             DateOfBirth:Date='04/07/1968',
             Married:true,
             Profession:"Cricketer"};
print=function(para){
          console.log(para);
      }
print(person1);
print(person2);

/*function Person(fname,lname,age,skills,address,dateofbirth,married,profession){
    this.fname=fname;
    this.lname=lname;
    this.age=age;
    this.skills=skills;
    this.address=address;
    this.dateofbirth=dateofbirth;
    this.married=married;
    this.profession=profession;
}

var person=new person("Amitabh","Bachchan",75,["Dancing","Horse riding"],{city:"Mumbai",pincode:578496},1943-10-06,true,"Acting");
var person=new person("Sachin","Tendulkar",75,["Batsman","GoodSpeaker"],{city:"Mumbai",pincode:578496},1968-05-23,true,"Cricketer");
*/

