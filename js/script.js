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

var favPet = document.getElementsByName("pet")
console.log(favPet);

var checkBox = document.querySelectorAll('input[type="checkbox"]');

butTon.addEventListener('click', myFunction);

function myFunction () {
 const nameUser = nameInput.value;
 const ageUser = ageInput.value;
 let selectedValue = '';
 for(let i = 0; i < favPet.length; i++) {
  if (favPet[i].checked) {
    selectedValue = favPet[i].value;
    break;
  }
 }

 const checkValues = [];
 checkBox.forEach(checkbox => {
  if (checkbox.checked) {
    checkValues.push(checkbox.value);
  }
 });
}
   const colorUser = colorInput.options[colorInput.selectedIndex].text;
 btnProfile.innerHTML = ('Name:') + (' ') + (nameUser) + ('Age') + (' ')+ (ageUser) + ('Favorite Color:') + (' ') (colorUser) + ('Pet:') + (' ') (selectedValue) + ('Hobbies:') + (' '), (checkValues);

