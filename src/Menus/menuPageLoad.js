export function menuPageLoad() {
    const mainPage = document.getElementById("content")
    const menuPage = document.createElement("div")
    menuPage.id = "menu"

    const list = document.createElement('ul')
    list.id = "menu"
    const items = ['Pizza', 'Hamburgers', 'Spaguetti', 'Sushi', 'Taco']
    var imgArray = new Array()
    imgArray.push("../sources/pizza.png")
    imgArray.push("../sources/hamburguer.png")
    imgArray.push("../sources/spaguetti.png")
    imgArray.push("../sources/sushi.png")
    imgArray.push("../sources/taco.png")


    for (const item in items) {
        const newItem1 = document.createElement('li')
        const newItem2 = document.createElement('a')
        const img = document.createElement("img")
        img.src = imgArray[item]
        img.id = "menu-icon"
        newItem1.appendChild(img)
        newItem2.textContent = items[item]
        newItem1.appendChild(newItem2)
        list.appendChild(newItem1)

    }
    menuPage.appendChild(list)
    mainPage.appendChild(menuPage)
}