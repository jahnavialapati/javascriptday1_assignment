function temperature(){
    var x = document.getElementById("fahrenheit").value;
    if(x.length<1)
    {
        window.alert("Invalid input");
        return false;
    }
    if(isNaN(x))
    {
        window.alert("Enter numeric value");
        return false;
    }
    var y=(x-32)*(5/9);
    document.getElementById("celsius").value=y;
}