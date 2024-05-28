import './styles.css';
import { landingPageLoad } from './LandingPage/landingPageLoad.js';
import { menuPageLoad } from './Menus/menuPageLoad.js';
import { hoursPageLoad } from './Hours&Location/hoursPageLoad.js';
import { artPageLoad } from './Art/artPageLoad.js';

landingPageLoad()
var page = document.getElementById("content")

var homeButton = document.getElementById("homeLink")
var homeButton2 = document.getElementById("homeLink2")
var menuButton = document.getElementById("menuLink")
var hoursButton = document.getElementById("hoursLink")
var artButton = document.getElementById("artLink")

homeButton.onclick = function() {
    clearPage()
    landingPageLoad()
}

homeButton2.onclick = function() {
    clearPage()
    landingPageLoad()
}

menuButton.onclick = function() {
    clearPage()
    menuPageLoad()
}

hoursButton.onclick = function() {
    clearPage()
    hoursPageLoad()
}

artButton.onclick = function() {
    clearPage()
    artPageLoad()
}

function clearPage() {
    page.innerHTML = ""
}