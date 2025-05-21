
var div = document.querySelector("div");
var p = document.querySelector("p");

var textNode = document.createTextNode("This is the text I wanted to change it to.")



p.append(textNode)
p.innterHTML = textNode.textContent

document.addEventListener("DOMContentLoaded",function(){
    loadCode();
})

function loadCode(){
    console.log(window);
    var div = document.querySelector("div");
    var p = document.querySelector("p");

    var textNode = document.createTextNode("This is the text I wanted it to change to.");

    // p.append(textNode)
    p.innerHTML
}