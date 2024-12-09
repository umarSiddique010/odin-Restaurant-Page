import biryaniImg from './asset/biryani-img.jpg'
import burgerImg from './asset/burger-img.jpg'
import butterPaneer from './asset/butter-paneer-img.jpg'
import pastaImg from './asset/home-pasta.jpeg'
import mezcalMojito from './asset/mezcal-mojito-img.png'
import panCake from './asset/pan-cake-img.png'
import pizzaImg from './asset/pizza-img.jpg'
import springRoll from './asset/spring-roll-img.jpg'
import shakshukaMixVeg from './asset/shakshuka-mix-veg-img.jpg'





export default function loadMenuPage() {
    const htmlContentId = document.querySelector("#content");
    htmlContentId.innerHTML = ''; 
    const mainMenu = document.createElement("main");
    mainMenu.classList.add("menu-content");
    htmlContentId.appendChild(mainMenu);
  
    const menuHeading = document.createElement("h1");
    menuHeading.textContent = "Our Menu";
    mainMenu.appendChild(menuHeading);


    const menuSection = document.createElement("section")
    menuSection.classList.add("menu-section")

    meuCard(menuSection, pastaImg, "Noodles Pasta", "29$")
    meuCard(menuSection, biryaniImg, "Tikka chicken Biryani", "853$")
    meuCard(menuSection, pizzaImg , "Hot Brazil chicken Pizza", "32$")
    meuCard(menuSection, burgerImg , "Fried chicken cheese Burger", "31$")
    meuCard(menuSection, panCake , "Extra cheese honey blend Pan Cake", "23$")
    meuCard(menuSection, butterPaneer , "Butter masala Paneer", "33$")
    meuCard(menuSection, springRoll , "Veg Spring Roll", "19$")
    meuCard(menuSection, shakshukaMixVeg, "Shakshuka mix veg", "30$")
    meuCard(menuSection, mezcalMojito, "Mezcal Mojito", "26$")

    mainMenu.appendChild(menuSection)

  }



  function meuCard(parentNode, itemPic, name, price) {
    const cardBox = document.createElement("div")
    cardBox.classList.add("card-box")

    const img = document.createElement("img")
    img.classList.add("item-img")
    img.src = itemPic
    img.alt = itemPic
    cardBox.appendChild(img)

    const heading = document.createElement("h2")
    heading.textContent = name
    cardBox.appendChild(heading)

    const pricePara = document.createElement("p")
    pricePara.classList.add("price")
    pricePara.textContent = `Price: ${price}`
    cardBox.appendChild(pricePara)

    


    parentNode.appendChild(cardBox)

  }
  