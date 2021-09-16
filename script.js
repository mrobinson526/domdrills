let div=document.createElement("div.header-container");
let header = document.createElement("h1");
let headerText =  document.createTextNode("This is an h1");
let header2 = document.createElement("h2");
let headerText2 =  document.createTextNode("This is an h2");
let header3 = document.createElement("h3");
let headerText3 =  document.createTextNode("This is an h3");
let header4 = document.createElement("h4");
let headerText4 =  document.createTextNode("This is an h4");
let header5 = document.createElement("h5");
let headerText5 =  document.createTextNode("This is an h5");
let header6 = document.createElement("h6");
let headerText6 =  document.createTextNode("This is an h6");
header.appendChild(headerText);
header2.appendChild(headerText2);
header3.appendChild(headerText3);
header4.appendChild(headerText4);
header5.appendChild(headerText5);
header6.appendChild(headerText6);
div.appendChild(header);
div.appendChild(header2);
div.appendChild(header3);
div.appendChild(header4);
div.appendChild(header5);
div.appendChild(header6);

window.addEventListener("DOMContentLoaded", function() {
    document.body.appendChild(div);
});