function promp(){
    x=prompt("Select the operation you want to <br> perform from the below options: \n"+"1.ADD\n"+"2.SUBTRACT\n"+"3.MULTIPLY\n"+"4.DIVIDE\n"+"5.EXPONENT\n"+"6.MEAN\n"+"7.QUIT");
    if(x<=7 && x>0)
    {
        if(x==1)
        {
            var a=prompt("Enter the first number to add:");
            var b=prompt("Enter the second number to add:");
            addition=parseInt(a)+parseInt(b);
            document.getElementById("res").value=addition;
        }
        if(x==2)
        {
            var a=prompt("Enter the first number to subtract:");
            var b=prompt("Enter the second number to subtract:");
            subtraction=parseInt(a)-parseInt(b);
            document.getElementById("res").value=subtraction;
        }
        if(x==3)
        {
            var a=prompt("Enter the first number to multiply:");
            var b=prompt("Enter the second number to multiply:");
            multiplication=parseInt(a)*parseInt(b);
            document.getElementById("res").value=multiplication;
        }
        if(x==4)
        {
            var a=prompt("Enter the first number to divide:");
            var b=prompt("Enter the second number to divide:");
            division=parseInt(a)/parseInt(b);
            document.getElementById("res").value=division;
        }
        if(x==5)
        {
            var a=prompt("Enter the base number:");
            var b=prompt("Enter the power of the number:");
            exponent=parseFloat(Math.pow(a,b));
            document.getElementById("res").value=exponent;
        }
        if(x==6)
        {
            var sum=0;
            var count=0;
            var x=prompt("Enter the series of number to find mean:");
            while(x!="***"){
                count++;
                sum=sum+parseInt(x);
                x=prompt("Enter the series of number to find mean:");
            }
            document.getElementById("res").value=sum/count;
        }
        if(x==7)
        {
            exit;
        }
    }
    else{
        window.alert("Enter the numbers only between 1 to 7");
    }
}