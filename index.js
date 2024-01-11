let menu_btn = document.querySelector("#menu_btn");
let divElem = document.querySelector(".divElem");
function showMenu() {
  if (divElem.style.display === "inline") {
    // console.log("inside if");
    hideElem();
    menu_btn.classList.remove("show");
  } else {
    // console.log("inside else");
    showElem();
    menu_btn.classList.add("show");
  }
}
function showElem() {
  let showClass = document.querySelector(".show");
  divElem.innerHTML += `
  <a href="#about"><h3>About Us</h3></a>
  <a href="#menu"><h3>Menu</h3></a>
  <a href="#contact"><h3>Contact</h3></a>`;
  divElem.classList.add("showelem");
  divElem.style.display = "inline";
}
function hideElem() {
  divElem.innerHTML = "";
  divElem.style.display = "none";
}

var tl = gsap.timeline();

gsap.from(".image1 img", {
  y: -490,
  duration: 2,
});
tl.from(".container", {
  y: -40,
  duration: 1,
})
  .from(".hero .main-heading h1", {
    x: 50,
    duration: 1,
  })
  .from(".hero .main-heading .para", {
    x: 30,
  })
  .from(".hero .main-heading .btn", {
    x: 30,
  });
