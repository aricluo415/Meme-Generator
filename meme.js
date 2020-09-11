const myForm = document.getElementById("meme");
var key = 0;
myForm.addEventListener("submit", (e) => {
    e.preventDefault();
    key += 1;
    var url = document.getElementById("url").value;
    var topText = document.getElementById("topText").value;
    var bottomText = document.getElementById("bottomText").value;

    //Image
    var img = document.createElement("img");
    img.setAttribute("class", "image");

    img.setAttribute("src", url);
    img.onerror = function() {
        alert("invalid url");
    }
    console.log("asfd");
    var imgs = document.getElementById("imgs");
    var k = document.createElement("div");
    k.setAttribute("class", "container");
    k.setAttribute("id", key);
    imgs.appendChild(k);
    k.appendChild(img);
    //Top Text
    var tdiv = document.createElement("div");
    tdiv.setAttribute("class", "top");
    var ttext = document.createTextNode(topText);
    tdiv.appendChild(ttext);
    k.appendChild(tdiv);
    //Bottom Text
    var bdiv = document.createElement("div");
    bdiv.setAttribute("class", "bottom");
    var btext = document.createTextNode(bottomText);
    bdiv.appendChild(btext);
    k.appendChild(bdiv);
    //Remove button
    var remove = document.createElement("button");
    remove.setAttribute("class", "btn");
    var txt = document.createTextNode("X");
    remove.appendChild(txt);
    remove.addEventListener("click", (e) => {
        var element = document.getElementById(e.target.parentNode.id);
        element.parentNode.removeChild(element);
    })
    k.appendChild(remove);
    myForm.reset();

});