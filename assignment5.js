function myFunction()
{
    var name=document.getElementById("userinput").value;
    var emailid=document.getElementById("email");
    var cheese=document.getElementById("extracheese").value;
    var pepperoni=document.getElementById("pepperoni").value;
    var olives=document.getElementById("olives").value;
    var pepper=document.getElementById("pepper").value;
    var bacon=document.getElementById("bacon").value;
    var tomatoes=document.getElementById("Tomatoes").value;
    var mushroom=document.getElementById("Mushrooms").value;
    if(document.getElementById('delivery').checked){
        selected=document.getElementById('delivery').value;
    }
     else if(document.getElementById('pickup').checked){
        selected=document.getElementById('pickup').value;
    }
    document.getElementById('results').innerHTML = selected;
    var deli=document.getElementById("delivery").value;
    var pickup=document.getElementById("pickup").value;
    var tip1=document.getElementById("15%").value;
    var tip2=document.getElementById("20%").value;
    var tip3=document.getElementById("25%").value;
    var textarea=document.getElementById("txtarea").value;
    document.getElementById("demo").innerHTML = name;
    document.getElementById("demo").innerHTML = emailid;
    document.getElementById("demo").innerHTML = cheese;
    document.getElementById("demo").innerHTML = pepperoni;
    document.getElementById("demo").innerHTML = olives;
    document.getElementById("demo").innerHTML = pepper;
    document.getElementById("demo").innerHTML = bacon;
    document.getElementById("demo").innerHTML = tomatoes;
    document.getElementById("demo").innerHTML = mushroom;
    
    document.getElementById("demo").innerHTML = deli;
    document.getElementById("demo").innerHTML = pickup;
   // document.getElementById("demo").innerHTML = ;
    
    
    


}