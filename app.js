const button = document.getElementsByClassName("burger")[0];
const navbarLinks = document.getElementsByClassName("navLink")[0];

button.addEventListener("click", () => {
  navbarLinks.classList.toggle("active");
});

function toggleLoby() {
  document.getElementById("imgOne").classList.toggle("active");
  console.log("nice!");
}
function toggleStudio() {
  document.getElementById("imgTwo").classList.toggle("active");
  console.log("nice!");
}
function toggleKbc() {
  document.getElementById("imgThree").classList.toggle("active");
  console.log("nice!");
}
function toggleKinship() {
  document.getElementById("imgFour").classList.toggle("active");
  console.log("nice!");
}
