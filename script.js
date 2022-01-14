var names = "";
var select = "";

function findName() {
  const names = document.getElementById("txt").value;
  const select = document.getElementById("select").value;
  let displayList = document.getElementById("displayList");

  displayList.innerHTML += "<p>" + names + " , " + select + "</p>";

//   if (names == "") {
//     alert("item name can't be empty");
//     return;
//   }
}

function insertValue() {
  var select = document.getElementById("select"),
    txtVal = document.getElementById("val").value,
    newOption = document.createElement("OPTION"),
    newOptionVal = document.createTextNode(txtVal);

  newOption.appendChild(newOptionVal);
  select.insertBefore(newOption, select.firstChild);

//   if (names == "") {
//     alert("name can't be empty");
//     return;
//   }
}