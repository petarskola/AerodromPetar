window.onscroll = function()
{
    var currentScrollPos = window.scrollY;
    if (currentScrollPos > 100)
    {
        document.getElementById("hideH").style.top = "-120";
        document.getElementById("head").style.position = "fixed";
        document.getElementById("head").style.top = "0";
    } 
    else 
    {
        document.getElementById("hideH").style.top = "0";
        document.getElementById("head").style.position = "relative";
    }
}
var br=0;
function po()
{
    br++;
    if(br%2!=0)
    {   
        document.getElementById("send").style.opacity="1";
        document.getElementById("email").style.opacity="1";
        document.getElementById("email").style.width="300px";
        document.getElementById("email").focus()=true;
    }
    else
    {
        document.getElementById("send").style.opacity="0";
        document.getElementById("email").style.opacity="0";
        document.getElementById("email").style.width="0px";
        document.getElementById("email").focus()=false;
    }
}