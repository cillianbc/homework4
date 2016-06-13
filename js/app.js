function main() {
  var idGetter = function(id){
    return document.getElementById(id);
  }
  var stickyColour = idGetter("colourchooser").value
  var stickyMessage = idGetter("stickyMessage").value
  var newElement = document.createElement('p');
  newElement.className += "box";
  newElement.style.backgroundColor = stickyColour
  var textnode = document.createTextNode(stickyMessage);
  newElement.appendChild(textnode);
  document.querySelector(".container-homework").appendChild(newElement);
  idGetter('stickyMessage').value = "";

}
