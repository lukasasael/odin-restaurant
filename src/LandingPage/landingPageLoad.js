export function landingPageLoad() {
    const mainPage = document.getElementById("content")
   
    const heading = document.createElement("h1")
    heading.textContent = "Fancy Restaurant"
    mainPage.appendChild(heading);

    const paragraph = document.createElement("p")
    paragraph.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
    mainPage.appendChild(paragraph);

    const img = document.createElement("img")
    img.src = "../../sources/LOGO.png"
    img.id = 'main-img'
    mainPage.appendChild(img);
}