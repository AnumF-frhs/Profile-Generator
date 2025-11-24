// var =

var boxName = document.getElementById("nameInput");
console.log(boxName);

var boxAge = document.getElementById("ageInput");
console.log(boxAge);

var favColor = document.getElementById("colorInput");
console.log(favColor);

var butTon = document.getElementById("submitBtn");
console.log(butTon);

var outPut = document.getElementById("output");
console.log(outPut);

var favPet = document.getElementsByName("pet");
console.log(favPet);

var checkBoxes = document.querySelectorAll('input[type="checkbox"]');
console.log(checkBoxes);

butTon.addEventListener('click', myFunction);

function myFunction() {
 const nameUser = nameInput.value;
 const ageUser = ageInput.value;
 const selectedValue = [];
 for (let i = 0; i < favPet.length; i++) {
  if (favPet[i].checked) {
    selectedValue.push(favPet[i].value);
  }

 

 const checkedValues = [];
 checkBoxes.forEach(checkbox => {
  if (checkbox.checked) {
    checkedValues.push(checkbox.value);
  }
 });

   const colorUser = colorInput.options[colorInput.selectedIndex].text;
 outPut.innerHTML = ('Name:') + (' ') + (nameUser) + ('<br>') + ('Age:') + (' ') + (ageUser) + ('<br>') + ('Favorite Pet') + (' ') + (selectedValue) + ('<br>') + ('Hobbies:') + (checkedValues);
 }
}

