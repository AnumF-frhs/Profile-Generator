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

var favPet = document.querySelectorAll("input[type='radio'")
console.log(favPet);

btnCreate.addEventListener('click', myFunction);

function myFunction (){
    const nameUser = nameInput.value;
    btnProfile.innerHTML = 'Name', nameUser + colorInput
}
