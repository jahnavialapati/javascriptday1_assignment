var amitabh={lname:"Bachchan",
             age:75,
             skills:["Dancing","Horse riding"],
             address:{city:'Mumbai',
                       pincode:578493},
             dateOfBirth:Date='11/11/1943',
             married:true,
             profession:"Acting"};
var abhishek=Object.create(amitabh);
abhishek.age=45;
abhishek.skills= ["Singing","Dancing"];
abhishek.dateOfBirth=Date='05/10/1973';
abhishek.married=true;
console.log(amitabh);
console.log(abhishek);   
console.log(abhishek.lname); //lname inheriting from parent lname
console.log(abhishek.profession);   //profession inheriting from amitabh profession