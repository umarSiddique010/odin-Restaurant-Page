import loadHomePage from "./home.js";
import loadMenuPage from "./menu.js";
import loadAboutPage from "./about.js";
import loadContactPage from "./contact-us.js";
import hotelLogo from './asset/hotel-logo-img.png';
import "./style.css";

document.addEventListener("DOMContentLoaded", () => {

    function setLogo() {
       const header = document.querySelector("header")

     const logoImg = document.createElement('img')
     logoImg.src = hotelLogo
     logoImg.alt = "Logo of Hotel"
     logoImg.classList.add("logo")
     header.prepend(logoImg)
        
    }
    

  
  function handleRouting() {
    const hash = window.location.hash;

    if (hash === "#home") {
      loadHomePage();
    } else if (hash === "#menu") {
      loadMenuPage();
    } else if (hash === "#about") {
      loadAboutPage();
    } else if (hash === "#contact") {
      loadContactPage();
    }
  }

  


  window.addEventListener("hashchange", handleRouting);

  handleRouting();
  setLogo()
  loadHomePage()

  document.querySelector("#home-btn").addEventListener("click", () => {
    window.location.hash = "#home"; 
  });

  document.querySelector("#menu-btn").addEventListener("click", () => {
    window.location.hash = "#menu"; 
  });

  document.querySelector("#about-btn").addEventListener("click", () => {
    window.location.hash = "#about";
  });

  document.querySelector("#contact-btn").addEventListener("click", () => {
    window.location.hash = "#contact"; 
  });
});
