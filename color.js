//declaration of variables
const btn = document.getElementById("generate");
const rgb = document.getElementById("rgb");
const hex = document.getElementById("hex");
const favicon = document.getElementById("svgicon");


//ON LOAD-->so if the site is loaded a color will be generated
color = getRGB(); //calls up the getRGB()-function, that a new color will be generated
document.body.style.backgroundColor = "rgb(" + color + ")"; //sets the new color as the background-color
rgb.innerHTML = color; //displays the RGB-code on the Label 
hex.innerHTML = getHEX(); //calls up the getHex()-function, that the HEX-label displays the HEX-code
btn.style.borderColor = "rgb(" + color + ")";

//ON BUTTONCLICK-->if the button is pressed a new color will be generated
btn.onclick = function() {
    color = getRGB();
    document.body.style.backgroundColor = "rgb(" + color + ")";
    rgb.innerHTML = color;
    hex.innerHTML = getHEX();
    btn.style.borderColor = "rgb(" + color + ")"; //changes the bordercolor of the button
};

//generates a random RGB-string
function getRGB()
{
  //every color gets a random number between 0-255
    red =  Math.floor(Math.random() * 256);
    green =  Math.floor(Math.random() * 256);
    blue =  Math.floor(Math.random() * 256);
    return red + ", " + green + ", " + blue; //returns the random generated RGB-string
}

//converts RGB to HEX
function getHEX()
{
  //converts the colors in binary-strings
    r = red.toString(16);
    g = green.toString(16);
    b = blue.toString(16);
  
    if (r.length == 1)
      r = "0" + r;
    if (g.length == 1)
      g = "0" + g;
    if (b.length == 1)
      b = "0" + b;
  
    return "#" + r + g + b; //returns the converted HEX-string
}