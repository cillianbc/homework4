function main() {

  var stickyColour = document.getElementById("colourchooser").value
  var stickyMessage = document.getElementById("stickyMessage").value
  var newElement = document.createElement('p');
  newElement.className += "box";
  newElement.style.backgroundColor = stickyColour
  var textnode = document.createTextNode(stickyMessage);
  newElement.appendChild(textnode);
  document.querySelector(".container-homework").appendChild(newElement);
  document.getElementById('stickyMessage').value = "";

}
