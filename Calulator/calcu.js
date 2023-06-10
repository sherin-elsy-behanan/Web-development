function bclick(val)
{
    document.getElementById("textscreen").value=document.getElementById("textscreen").value+val 
    
}

function erase(val)
{
    document.getElementById("textscreen").value=""
}

function eqclick(val)
{
     var text= document.getElementById("textscreen").value
     document.getElementById("textscreen").value=eval(text)
}