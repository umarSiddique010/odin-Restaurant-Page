


export default function loadContactPage() {
    const htmlContentId = document.querySelector("#content")
    htmlContentId.innerHTML = ""

    const contactContent = document.createElement("main")
    contactContent.classList.add("contact-content")

    const contactMainHeading = document.createElement("h1")
    contactMainHeading.textContent = "Contact us"
    contactContent.appendChild(contactMainHeading)



    const contactBox = document.createElement("div")
    contactBox.classList.add("contact-box")



    const addressHeading = document.createElement("h2")
    addressHeading.textContent = "Address:"
    contactBox.appendChild(addressHeading)



    const paraInfo = document.createElement("p")
    paraInfo.classList.add("contact-para")
    paraInfo.textContent = "New Street Elaem, Gotham city, Metapolis"
    contactBox.appendChild(paraInfo)

    const pinCode = document.createElement("p")
    pinCode.classList.add("contact-para")
    pinCode.textContent = "Zip Code: 29292"
    contactBox.appendChild(pinCode)

    const phoneNumberPara = document.createElement("p")
    phoneNumberPara.classList.add("contact-para")
    phoneNumberPara.textContent = "Phone Number: +00 111 222 3333"
    contactBox.appendChild(phoneNumberPara)


    const emailPara = document.createElement("p")
    emailPara.classList.add("contact-para")
    emailPara.textContent = "Email : ocean-view@exaple.com"
    contactBox.appendChild(emailPara)
    
    contactContent.appendChild(contactBox)
    htmlContentId.appendChild(contactContent)
}