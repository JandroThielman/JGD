// Functie voor het afspelen van geluidseffect bij klik
var clickFX = document.getElementById("click");

function FX(){
    clickFX.volume = .2; // Geluidsvolume instellen op 20%
    clickFX.play(); // Geluid afspelen
}

// Functies voor het tonen van verschillende secties in het CV

// Functie voor het tonen van de sectie van de hoofdafbeelding (cv-image)
function jandro() {
    // Z-index instellingen voor verschillende secties
    document.getElementById('cv-image').style.zIndex = '2';
    document.getElementById('cv-contact').style.zIndex = '-2';
    document.getElementById('videopitch').style.zIndex = '-2';
    document.getElementById('ervaring').style.zIndex = '-2';
    document.getElementById('Opleiding').style.zIndex = '-2';
    document.getElementById('vaardigheden').style.zIndex = '-2';
}

// Functie voor het tonen van de sectie van het contact (cv-contact)
function jandro1() {
    // Z-index instellingen voor verschillende secties
    document.getElementById('cv-contact').style.zIndex = '2';
    document.getElementById('cv-image').style.zIndex = '-2';
    document.getElementById('videopitch').style.zIndex = '-2';
    document.getElementById('ervaring').style.zIndex = '-2';
    document.getElementById('Opleiding').style.zIndex = '-2';
    document.getElementById('vaardigheden').style.zIndex = '-2';
}

// Functie voor het tonen van de sectie van de videopitch
function jandro2() {
    // Z-index instellingen voor verschillende secties
    document.getElementById('videopitch').style.zIndex = '2';
    document.getElementById('cv-image').style.zIndex = '-2';
    document.getElementById('cv-contact').style.zIndex = '-2';
    document.getElementById('ervaring').style.zIndex = '-2';
    document.getElementById('Opleiding').style.zIndex = '-2';
    document.getElementById('vaardigheden').style.zIndex = '-2';
}

// Functie voor het tonen van de sectie van ervaring
function jandro3() {
    // Z-index instellingen voor verschillende secties
    document.getElementById('ervaring').style.zIndex = '2';
    document.getElementById('cv-image').style.zIndex = '-2';
    document.getElementById('cv-contact').style.zIndex = '-2';
    document.getElementById('videopitch').style.zIndex = '-2';
    document.getElementById('Opleiding').style.zIndex = '-2';
    document.getElementById('vaardigheden').style.zIndex = '-2';
}

// Functie voor het tonen van de sectie van opleiding
function jandro4() {
    // Z-index instellingen voor verschillende secties
    document.getElementById('Opleiding').style.zIndex = '2';
    document.getElementById('cv-image').style.zIndex = '-2';
    document.getElementById('cv-contact').style.zIndex = '-2';
    document.getElementById('videopitch').style.zIndex = '-2';
    document.getElementById('ervaring').style.zIndex = '-2';
    document.getElementById('vaardigheden').style.zIndex = '-2';
}

// Functie voor het tonen van de sectie van vaardigheden
function jandro5() {
    // Z-index instellingen voor verschillende secties
    document.getElementById('vaardigheden').style.zIndex = '2';
    document.getElementById('Opleiding').style.zIndex = '-2';
    document.getElementById('cv-image').style.zIndex = '-2';
    document.getElementById('cv-contact').style.zIndex = '-2';
    document.getElementById('videopitch').style.zIndex = '-2';
    document.getElementById('ervaring').style.zIndex = '-2';
}

// Functies voor het tonen van verschillende secties in het CV (junior)

// Functie voor het tonen van de sectie van de hoofdafbeelding (cv-imagejunior)
function junior() {
    // Z-index instellingen voor verschillende secties
    document.getElementById('cv-imagejunior').style.zIndex = '2';
    document.getElementById('cv-contact-junior').style.zIndex = '-2';
    document.getElementById('videopitch-junior').style.zIndex = '-2';
    document.getElementById('ervaring-junior').style.zIndex = '-2';
    document.getElementById('Opleiding-junior').style.zIndex = '-2';
    document.getElementById('vaardigheden-junior').style.zIndex = '-2';
}

// Functie voor het tonen van de sectie van contact (cv-contact-junior)
function junior1() {
    // Z-index instellingen voor verschillende secties
    document.getElementById('cv-contact-junior').style.zIndex = '2';
    document.getElementById('cv-imagejunior').style.zIndex = '-2';
    document.getElementById('videopitch-junior').style.zIndex = '-2';
    document.getElementById('ervaring-junior').style.zIndex = '-2';
    document.getElementById('Opleiding-junior').style.zIndex = '-2';
    document.getElementById('vaardigheden-junior').style.zIndex = '-2';
}

// Functie voor het tonen van de sectie van videopitch (videopitch-junior)
function junior2() {
    // Z-index instellingen voor verschillende secties
    document.getElementById('videopitch-junior').style.zIndex = '2';
    document.getElementById('cv-imagejunior').style.zIndex = '-2';
    document.getElementById('cv-contact-junior').style.zIndex = '-2';
    document.getElementById('ervaring-junior').style.zIndex = '-2';
    document.getElementById('Opleiding-junior').style.zIndex = '-2';
    document.getElementById('vaardigheden-junior').style.zIndex = '-2';
}

// Functie voor het tonen van de sectie van ervaring (ervaring-junior)
function junior3() {
    // Z-index instellingen voor verschillende secties
    document.getElementById('ervaring-junior').style.zIndex = '2';
    document.getElementById('cv-imagejunior').style.zIndex = '-2';
    document.getElementById('cv-contact-junior').style.zIndex = '-2';
    document.getElementById('videopitch-junior').style.zIndex = '-2';
    document.getElementById('Opleiding-junior').style.zIndex = '-2';
    document.getElementById('vaardigheden-junior').style.zIndex = '-2';
}

// Functie voor het tonen van de sectie van opleiding (Opleiding-junior)
function junior4() {
    // Z-index instellingen voor verschillende secties
    document.getElementById('Opleiding-junior').style.zIndex = '2';
    document.getElementById('cv-imagejunior').style.zIndex = '-2';
    document.getElementById('cv-contact-junior').style.zIndex = '-2';
    document.getElementById('videopitch-junior').style.zIndex = '-2';
    document.getElementById('ervaring-junior').style.zIndex = '-2';
    document.getElementById('vaardigheden-junior').style.zIndex = '-2';
}

// Functie voor het tonen van de sectie van vaardigheden (vaardigheden-junior)
function junior5() {
    // Z-index instellingen voor verschillende secties
    document.getElementById('vaardigheden-junior').style.zIndex = '2';
    document.getElementById('Opleiding-junior').style.zIndex = '-2';
    document.getElementById('cv-imagejunior').style.zIndex = '-2';
    document.getElementById('cv-contact-junior').style.zIndex = '-2';
    document.getElementById('videopitch-junior').style.zIndex = '-2';
    document.getElementById('ervaring-junior').style.zIndex = '-2';
}

// Functies voor het tonen van verschillende secties in het CV (dean)

// Functie voor het tonen van de sectie van de hoofdafbeelding (cv-imagedean)
function dean() {
    // Z-index instellingen voor verschillende secties3
    document.getElementById('cv-imagedean').style.zIndex = '2';
    document.getElementById('cv-contact-dean').style.zIndex = '-2';
    document.getElementById('videopitch-dean').style.zIndex = '-2';
    document.getElementById('ervaring-dean').style.zIndex = '-2';
    document.getElementById('Opleiding-dean').style.zIndex = '-2';
    document.getElementById('vaardigheden-dean').style.zIndex = '-2';
}

// Functie voor het tonen van de sectie van contact (cv-contact-dean)
function dean1() {
    // Z-index instellingen voor verschillende secties
    document.getElementById('cv-contact-dean').style.zIndex = '2';
    document.getElementById('cv-imagedean').style.zIndex = '-2';
    document.getElementById('videopitch-dean').style.zIndex = '-2';
    document.getElementById('ervaring-dean').style.zIndex = '-2';
    document.getElementById('Opleiding-dean').style.zIndex = '-2';
    document.getElementById('vaardigheden-dean').style.zIndex = '-2';
}

// Functie voor het tonen van de sectie van videopitch (videopitch-dean)
function dean2() {
    // Z-index instellingen voor verschillende secties
    document.getElementById('videopitch-dean').style.zIndex = '2';
    document.getElementById('cv-imagedean').style.zIndex = '-2';
    document.getElementById('cv-contact-dean').style.zIndex = '-2';
    document.getElementById('ervaring-dean').style.zIndex = '-2';
    document.getElementById('Opleiding-dean').style.zIndex = '-2';
    document.getElementById('vaardigheden-dean').style.zIndex = '-2';
}

// Functie voor het tonen van de sectie van ervaring (ervaring-dean)
function dean3() {
    // Z-index instellingen voor verschillende secties
    document.getElementById('ervaring-dean').style.zIndex = '2';
    document.getElementById('cv-imagedean').style.zIndex = '-2';
    document.getElementById('cv-contact-dean').style.zIndex = '-2';
    document.getElementById('videopitch-dean').style.zIndex = '-2';
    document.getElementById('Opleiding-dean').style.zIndex = '-2';
    document.getElementById('vaardigheden-dean').style.zIndex = '-2';
}

// Functie voor het tonen van de sectie van opleiding (Opleiding-dean)
function dean4() {
    // Z-index instellingen voor verschillende secties
    document.getElementById('Opleiding-dean').style.zIndex = '2';
    document.getElementById('cv-imagedean').style.zIndex = '-2';
    document.getElementById('cv-contact-dean').style.zIndex = '-2';
    document.getElementById('videopitch-dean').style.zIndex = '-2';
    document.getElementById('ervaring-dean').style.zIndex = '-2';
    document.getElementById('vaardigheden-dean').style.zIndex = '-2';
}

// Functie voor het tonen van de sectie van vaardigheden (vaardigheden-dean)
function dean5() {
    // Z-index instellingen voor verschillende secties
    document.getElementById('vaardigheden-dean').style.zIndex = '2';
    document.getElementById('Opleiding-dean').style.zIndex = '-2';
    document.getElementById('cv-imagedean').style.zIndex = '-2';
    document.getElementById('cv-contact-dean').style.zIndex = '-2';
    document.getElementById('videopitch-dean').style.zIndex = '-2';
    document.getElementById('ervaring-dean').style.zIndex = '-2';
}