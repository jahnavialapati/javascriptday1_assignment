function Table(){
    rows=window.prompt("number of rows",1);
    cols=window.prompt("number of columns",1);
    for(var i=0;i<parseInt(rows,10);i++)
    {
        var x = document.getElementById('tab').insertRow(i);
        for(var j=0;j<parseInt(cols,10);j++)
        {
            var y= x.insertCell(j);
            y.innerHTML="(row"+i+",col"+j+ ")";
        }
    }
}