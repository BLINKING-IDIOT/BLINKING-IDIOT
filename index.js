function display(a){
    var b=document.getElementById("dis").value
    if (a!="=")
    {
    var z=b+a
    document.getElementById("dis").value=z
    }
    else{
        z=eval(b)
        document.getElementById("dis").value=z
    }
}