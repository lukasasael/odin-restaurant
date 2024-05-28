export function menuPageLoad() {
    const mainPage = document.getElementById("content")
    const menuPage = document.createElement("div")
    menuPage.id = "menu"

    const list = document.createElement('ul')
    const items = ['Pizza', 'Hamburgers', 'Italian Pasta', 'Sushi', 'Kibe']

    for (const item in items) {
        const newItem1 = document.createElement('li')
        const newItem2 = document.createElement('a')
        newItem2.textContent = items[item];
        newItem1.appendChild(newItem2)
        list.appendChild(newItem1)
    }
    menuPage.appendChild(list)
    mainPage.appendChild(menuPage)
}