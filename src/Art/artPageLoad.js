export function artPageLoad() {
    const mainPage = document.getElementById("content")
    const artPage = document.createElement("div")
    artPage.id = "art"
    const img = document.createElement("img")
    img.id = "end-img"
    img.src = "../sources/end.jpeg"
    artPage.appendChild(img)
    mainPage.appendChild(artPage)
}