import pastaImage from './asset/hero-img.jpg';
import loadMenuPage from './menu.js';

export default function loadHomePage() {
    const htmlContentId = document.querySelector("#content"); 
  htmlContentId.innerHTML = ''; 

  const mainHome = document.createElement("main");
  mainHome.classList.add("home-content");
  htmlContentId.appendChild(mainHome);

 
  const homeImg = document.createElement("img");
  homeImg.src = pastaImage;
  homeImg.alt = "Image of Pasta";
  homeImg.classList.add("home-img");
  mainHome.appendChild(homeImg);

  const restaurantName = document.createElement("h1");
  restaurantName.textContent = "Ocean view";
  mainHome.appendChild(restaurantName);

  const welcomeDiv = document.createElement("div");
  welcomeDiv.classList.add("welcome-div");
  mainHome.appendChild(welcomeDiv);

  const welcomePara = document.createElement("p");
  welcomePara.textContent = "Welcome to Ocean view restaurant";
  welcomeDiv.appendChild(welcomePara);

  const menuPageBtn = document.createElement("button");
  menuPageBtn.textContent = "Visit Menu";
  menuPageBtn.classList.add("menu-btn");
  menuPageBtn.addEventListener("click", loadMenuPage);
  welcomeDiv.appendChild(menuPageBtn);


}
