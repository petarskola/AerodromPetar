let bs=0;
document.getElementById("slicice").style.opacity="0";
document.getElementById("sk0").style.backgroundColor="rgba(215, 216, 217, 1)";
function skrollevo()
{
    bs--;
    if(bs<-3)
        bs=3;
    redniBorj();
}
function skroldesno()
{
    bs++;
    if(bs>3)
        bs=-3;
    redniBorj();
}
function setBS(n)
{
    bs=n;
    redniBorj();
}
function redniBorj()
{
    switch(bs)
    {
        case 0: 
            document.getElementById("slicice").style.opacity="0";
            document.getElementById("tekstovi").innerHTML="Aerodrom Petar - Video Prezentacija"; 
            document.getElementById("tekstic").innerHTML="Preko 1.000.000 m² površine";
            document.getElementById("sk0").style.backgroundColor="rgba(215, 216, 217, 1)";
            document.getElementById("sk1").style.backgroundColor="rgba(215, 216, 217, .3)";
            document.getElementById("sk2").style.backgroundColor="rgba(215, 216, 217, .3)";
            document.getElementById("sk3").style.backgroundColor="rgba(215, 216, 217, .3)";
            document.getElementById("sk-1").style.backgroundColor="rgba(215, 216, 217, .3)";
            document.getElementById("sk-2").style.backgroundColor="rgba(215, 216, 217, .3)";
            document.getElementById("sk-3").style.backgroundColor="rgba(215, 216, 217, .3)";

            break;
        case 1:
            document.getElementById("slicice").style.opacity="1"; 
            document.getElementById("slicice").style.backgroundImage="url(\"s1.jpeg\")";
            document.getElementById("tekstovi").innerHTML="Aerodrom Petar - Hangar"; 
            document.getElementById("tekstic").innerHTML="300+ njamodernijih aviona";
            document.getElementById("sk0").style.backgroundColor="rgba(215, 216, 217, .3)";
            document.getElementById("sk1").style.backgroundColor="rgba(215, 216, 217, 1)";
            document.getElementById("sk2").style.backgroundColor="rgba(215, 216, 217, .3)";
            document.getElementById("sk3").style.backgroundColor="rgba(215, 216, 217, .3)";
            document.getElementById("sk-1").style.backgroundColor="rgba(215, 216, 217, .3)";
            document.getElementById("sk-2").style.backgroundColor="rgba(215, 216, 217, .3)";
            document.getElementById("sk-3").style.backgroundColor="rgba(215, 216, 217, .3)";
            break;
        case 2: 
            document.getElementById("slicice").style.opacity="1";
            document.getElementById("slicice").style.backgroundImage="url(\"s2.webp\")";
            document.getElementById("tekstovi").innerHTML="Aerodrom Petar - Info Pult";
            document.getElementById("tekstic").innerHTML="Više od 1.500 zaposlenih";   
            document.getElementById("sk0").style.backgroundColor="rgba(215, 216, 217, .3)";
            document.getElementById("sk1").style.backgroundColor="rgba(215, 216, 217, .3)";
            document.getElementById("sk2").style.backgroundColor="rgba(215, 216, 217, 1)";
            document.getElementById("sk3").style.backgroundColor="rgba(215, 216, 217, .3)";
            document.getElementById("sk-1").style.backgroundColor="rgba(215, 216, 217, .3)";
            document.getElementById("sk-2").style.backgroundColor="rgba(215, 216, 217, .3)";
            document.getElementById("sk-3").style.backgroundColor="rgba(215, 216, 217, .3)";
            break;
        case 3:
            document.getElementById("slicice").style.opacity="1";
            document.getElementById("slicice").style.backgroundImage="url(\"s3.webp\")"; 
            document.getElementById("tekstovi").innerHTML="Aerodrom Petar - Pista Za Uzletanje"; 
            document.getElementById("tekstic").innerHTML="9 pisti za uzletanje i sletanje"; 
            document.getElementById("sk0").style.backgroundColor="rgba(215, 216, 217, .3)";
            document.getElementById("sk1").style.backgroundColor="rgba(215, 216, 217, .3)";
            document.getElementById("sk2").style.backgroundColor="rgba(215, 216, 217, .3)";
            document.getElementById("sk3").style.backgroundColor="rgba(215, 216, 217, 1)";
            document.getElementById("sk-1").style.backgroundColor="rgba(215, 216, 217, .3)";
            document.getElementById("sk-2").style.backgroundColor="rgba(215, 216, 217, .3)";
            document.getElementById("sk-3").style.backgroundColor="rgba(215, 216, 217, .3)";
            break;
        case -1:
            document.getElementById("slicice").style.opacity="1"; 
            document.getElementById("slicice").style.backgroundImage="url(\"s-1.jpg\")"; 
            document.getElementById("tekstovi").innerHTML="Aerodrom Petar - Prenos Prtljaga"; 
            document.getElementById("tekstic").innerHTML="Vaš prtljag je bezbedan u svakom trenutku"; 
            document.getElementById("sk0").style.backgroundColor="rgba(215, 216, 217, .3)";
            document.getElementById("sk1").style.backgroundColor="rgba(215, 216, 217, .3)";
            document.getElementById("sk2").style.backgroundColor="rgba(215, 216, 217, .3)";
            document.getElementById("sk3").style.backgroundColor="rgba(215, 216, 217, .3)";
            document.getElementById("sk-1").style.backgroundColor="rgba(215, 216, 217, 1)";
            document.getElementById("sk-2").style.backgroundColor="rgba(215, 216, 217, .3)";
            document.getElementById("sk-3").style.backgroundColor="rgba(215, 216, 217, .3)";
            break;
        case -2: 
            document.getElementById("slicice").style.opacity="1";
            document.getElementById("slicice").style.backgroundImage="url(\"s-2.jpg\")"; 
            document.getElementById("tekstovi").innerHTML="Aerodrom Petar - Avioni"; 
            document.getElementById("tekstic").innerHTML="Najsavremeniji avioni"; 
            document.getElementById("sk0").style.backgroundColor="rgba(215, 216, 217, .3)";
            document.getElementById("sk1").style.backgroundColor="rgba(215, 216, 217, .3)";
            document.getElementById("sk2").style.backgroundColor="rgba(215, 216, 217, .3)";
            document.getElementById("sk3").style.backgroundColor="rgba(215, 216, 217, .3)";
            document.getElementById("sk-1").style.backgroundColor="rgba(215, 216, 217, .3)";
            document.getElementById("sk-2").style.backgroundColor="rgba(215, 216, 217, 1)";
            document.getElementById("sk-3").style.backgroundColor="rgba(215, 216, 217, .3)";
            break;
        case -3:
            document.getElementById("slicice").style.opacity="1";
            document.getElementById("slicice").style.backgroundImage="url(\"s-3.jpg\")"; 
            document.getElementById("tekstovi").innerHTML="Aerodrom Petar - Osoblje";
            document.getElementById("tekstic").innerHTML="1500+ zaposlenih raspoloženih da pomognu u svakom terenutku"; 
            document.getElementById("sk0").style.backgroundColor="rgba(215, 216, 217, .3)";
            document.getElementById("sk1").style.backgroundColor="rgba(215, 216, 217, .3)";
            document.getElementById("sk2").style.backgroundColor="rgba(215, 216, 217, .3)";
            document.getElementById("sk3").style.backgroundColor="rgba(215, 216, 217, .3)";
            document.getElementById("sk-1").style.backgroundColor="rgba(215, 216, 217, .3)";
            document.getElementById("sk-2").style.backgroundColor="rgba(215, 216, 217, .3)";
            document.getElementById("sk-3").style.backgroundColor="rgba(215, 216, 217, 1)";
            break;
    }
    
}
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