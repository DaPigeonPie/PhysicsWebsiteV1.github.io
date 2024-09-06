/*localStorage.clear();*/

const h1s = document.getElementsByTagName("h1");
const h2s = document.getElementsByTagName("h2");
const h3s = document.getElementsByTagName("h3");
const h4s = document.getElementsByTagName("h4");
const ps = document.getElementsByTagName("p");
const ols = document.getElementsByTagName("ol");
const uls = document.getElementsByTagName("ul");
const spans = document.getElementsByTagName("span");
const as = document.getElementsByTagName("a");
const tds = document.getElementsByTagName("td");
const ths = document.getElementsByTagName("th");
const solutions = document.getElementsByClassName('solution');
const equations = document.getElementsByClassName('equation');

let element = document.body;
let userSettings = {};

window.onload = function() {
    console.log(localStorage.getItem('runAvailable'));

    if (localStorage.getItem('runAvailable') === null) {
        console.log("runs only once");
        userSettings.darkmode = false;
        userSettingsSerialized = JSON.stringify(userSettings);
        localStorage.setItem("US", userSettingsSerialized);
        localStorage.setItem("runAvailable", false);
        document.getElementById("cookieAlert").style.display = "block";
    }  else {
        console.log("already ran once, won't run again");
    }

    SetMode();
}

function ToggleDisplay(buttonID, answerID) {
    if (document.getElementById(answerID).style.display == 'none') {
    document.getElementById(answerID).style.display = 'block';
    document.getElementById(buttonID).innerHTML = 'Hide Solution <i class="arrow down"></i>';
    } else {
    document.getElementById(answerID).style.display = 'none';
    document.getElementById(buttonID).innerHTML = 'Show Solution <i class="arrow right"></i>';
    }
}

function ToggleMode() {
    userSettingsDeserialized = JSON.parse(localStorage.getItem("US"));
    console.log(userSettingsDeserialized);
    
    if (userSettingsDeserialized.darkmode == true) {
        userSettings.darkmode = false;
    } else {
        userSettings.darkmode = true;
    }

    userSettingsSerialized = JSON.stringify(userSettings);
    localStorage.setItem("US", userSettingsSerialized);
    
    SetMode();
}


function SetMode() {
    userSettingsDeserialized = JSON.parse(localStorage.getItem("US"));

    if (userSettingsDeserialized.darkmode == true) {
        document.body.style.backgroundColor = 'black';
        document.querySelector('.fixed').style.backgroundColor = 'black';
        document.getElementById("cookieAlert").style.backgroundColor = 'black';
        for (i = 0; i < solutions.length; i++) {solutions[i].style.backgroundColor = 'navy'; solutions[i].style.borderColor = 'blue';}
        for (i = 0; i < equations.length; i++) {equations[i].style.backgroundColor = 'darkgreen';}
        for (h1 of h1s) {h1.style.color = 'white';}
        for (h2 of h2s) {h2.style.color = 'white';}
        for (h3 of h3s) {h3.style.color = 'white';}
        for (h4 of h4s) {h4.style.color = 'white';}
        for (p of ps) {p.style.color = 'white';}
        for (ol of ols) {ol.style.color = 'white';}
        for (ul of uls) {ul.style.color = 'white';}
        for (span of spans) {span.style.color = 'white';}
        for (a of as) {a.style.color = 'goldenrod';}
        for (td of tds) {td.style.color = 'white';}
        for (th of ths) {th.style.color = 'white';}
        for (td of tds) {td.style.borderColor = 'white';}
        for (th of ths) {th.style.borderColor = 'white';}

    } else {
        document.body.style.backgroundColor = '';
        document.querySelector('.fixed').style.backgroundColor = '';
        document.getElementById("cookieAlert").style.backgroundColor = '';
        for (i = 0; i < solutions.length; i++) {solutions[i].style.backgroundColor = ''; solutions[i].style.borderColor = '';}
        for (i = 0; i < equations.length; i++) {equations[i].style.backgroundColor = '';}
        for (h1 of h1s) {h1.style.color = '';}
        for (h2 of h2s) {h2.style.color = '';}
        for (h3 of h3s) {h3.style.color = '';}
        for (h4 of h4s) {h4.style.color = '';}
        for (p of ps) {p.style.color = '';}
        for (ol of ols) {ol.style.color = '';}
        for (ul of uls) {ul.style.color = '';}
        for (span of spans) {span.style.color = '';}
        for (a of as) {a.style.color = '';}
        for (td of tds) {td.style.borderColor = '';}
        for (th of ths) {th.style.borderColor = '';}
        for (td of tds) {td.style.color = '';}
        for (th of ths) {th.style.color = '';}
    }
}

function cookieAlertRemove() {
    document.getElementById("cookieAlert").style.display = "none";
}