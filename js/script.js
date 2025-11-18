// var =

var boxName = document.getElementById("nameInput");
console.log(boxName);

var boxAge = document.getElementById("ageInput");
console.log(boxAge);

var favColor = document.getElementById("colorInput");
console.log(favColor);

var btnCreate = document.getElementById("submitBtn");
console.log(btnCreate);

var btnProfile = document.getElementById("output");
console.log(btnProfile);

var favPet = document.querySelectorAll("input")
console.log(favPet);

var hobBy = document.getElementById("hobby");

btnCreate.addEventListener('click', myFunction);

function myFunction (){
 const nameUser = nameInput.value;
 const ageUser = ageInput.value;
 const petUser = favPet.value;
 const hobbyUser = hobBy.value;
 const colorUser = colorInput.options[colorInput.selectedIndex].text;
 btnProfile.innerHTML = ('Name:') + (' ') + (nameUser) + ('Age:') + (' ') +  (ageUser) + ('Favorite Color:') + (' ') +  (colorUser) + ('Pet:') + (' ') +  (petUser) + ('Hobbies:') + (' ') +  (hobbyUser);

}
