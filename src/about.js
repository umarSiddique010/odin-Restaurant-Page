
 
export default function loadAboutPage() {
    const htmlContentId = document.querySelector("#content")
    htmlContentId.innerHTML = ""

    const aboutContent = document.createElement("main")
    aboutContent.classList.add("about-content")

    const aboutHeading = document.createElement("h1") 
    aboutHeading.textContent = "About us"
    aboutContent.appendChild(aboutHeading)

    const aboutPara = document.createElement("p")
    aboutPara.classList.add("about-para")
    aboutPara.textContent = "Ocean View is more than just a restaurant; it’s a culinary journey. Our menu is a fusion of global flavors, inspired by the diverse cultures that have influenced coastal cuisine. From fresh seafood dishes to international favorites, we strive to create a dining experience that’s as visually stunning as it is delicious. Savor the breathtaking ocean views while indulging in our mouthwatering creations."

    aboutContent.appendChild(aboutPara)
    htmlContentId.appendChild(aboutContent)
}


