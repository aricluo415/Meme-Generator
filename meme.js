

const myForm = document.getElementById("meme");

var key = 0;

myForm.addEventListener("submit", (e) => {
    e.preventDefault();
    key += 1;

    var container = createContainer(key);
    var image = createImage(document.getElementById("url").value);
    var topText = addText(document.getElementById("topText").value, "top");
    var bottomText = addText(document.getElementById("bottomText").value, "bottom");
    var remove = addRemove();

    container.appendChild(image);
    container.appendChild(topText);
    container.appendChild(bottomText);
    container.append(remove);

    var imgs = document.getElementById("imgs");
    imgs.appendChild(container);
    
    myForm.reset();

});
//Create Image DOM
function createImage(url) {
    var img = document.createElement("img");
    img.setAttribute("class", "image");

    img.setAttribute("src", url);
    img.onerror = function() {
        alert("invalid url");
    }

    return img;
}
//Create Container DOM 
function createContainer(key) {
    var container = document.createElement("div");
    container.setAttribute("class", "container");
    container.setAttribute("id", key);
    return container;
}
//Add Text to container
function addText(text, textPos) {
    var div = document.createElement("div");
    div.setAttribute("class", textPos);
    var textNode = document.createTextNode(text);
    div.appendChild(textNode);
    return div;
}
//add a remove button
function addRemove() {
    var remove = document.createElement("button");
    remove.setAttribute("class", "btn");
    var x = document.createTextNode("X");
    remove.appendChild(x);
    remove.addEventListener("click", (e) => {
        var element = document.getElementById(e.target.parentNode.id);
        element.parentNode.removeChild(element);
    })
    return remove;
}