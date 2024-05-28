export function hoursPageLoad() {
    const mainPage = document.getElementById("content")
    const hoursPage = document.createElement("h1")
    hoursPage.id = "hours"
   
    const heading = document.createElement("h1")
    heading.textContent = "HOURS & LOCATION"
    hoursPage.appendChild(heading)

    const paragraph = document.createElement("p")
    paragraph.textContent = "36 E 20th St,"
    hoursPage.appendChild(paragraph)
    const paragraph2 = document.createElement("p")
    paragraph2.textContent = "New York, NY 10003"
    hoursPage.appendChild(paragraph2)
    const paragraph3 = document.createElement("p")
    paragraph3.textContent = "(212) 203-6460"
    hoursPage.appendChild(paragraph3)

    const title = document.createElement("h3")
    title.textContent = "Brunch"
    hoursPage.appendChild(title)
    const paragraph4 = document.createElement("p")
    paragraph4.textContent = "Saturday - Sunday"
    hoursPage.appendChild(paragraph4)
    const paragraph5 = document.createElement("p")
    paragraph5.textContent = "12PM - 3PM"
    hoursPage.appendChild(paragraph5)
    mainPage.appendChild(hoursPage)
}