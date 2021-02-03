// main.js

const AIR_HORN = 0;
const CAR_HORN = 1;
const PARTY_HORN = 2;

// ===== event listeners =====

// input field
document.getElementById("volume-number").addEventListener("input", fieldChanged);

// slider
document.getElementById("volume-slider").addEventListener("input", sliderChanged);

// radio
document.getElementById("audio-selection").addEventListener("change", radioChanged);

// button
document.getElementById("honk-btn").addEventListener("click", function(event){ event.preventDefault() });
document.getElementById("honk-btn").addEventListener("click", playSound);

// ===== functions =====

// get value from input field and update volume
function fieldChanged() {
    updateVolume(document.getElementById("volume-number").value);
}

// get value from slider and update volume
function sliderChanged() {
    updateVolume(document.getElementById("volume-slider").value);
}

// get value from radio and update sound
function radioChanged() {
    if (document.getElementById("radio-air-horn").checked) {
        updateSound(AIR_HORN);
    } else if (document.getElementById("radio-car-horn").checked) {
        updateSound(CAR_HORN);
    } else if (document.getElementById("radio-party-horn").checked) {
        updateSound(PARTY_HORN);
    }
}

// update input field value, slider value, audio volume, volume icon, and button disabled
function updateVolume(volume) {
    // input field
    document.getElementById("volume-number").value = volume;

    // slider
    document.getElementById("volume-slider").value = volume;

    // audio
    document.getElementById("horn-sound").volume = volume/100;

    // volume icon and button
    const icon = document.getElementById("volume-image");
    const button = document.getElementById("honk-btn");
    if (volume == 0) {
        icon.src = "assets/media/icons/volume-level-0.svg";
        icon.alt = "No Volume";
        button.disabled = true;
    } else if (volume < 34) {
        icon.src = "assets/media/icons/volume-level-1.svg";
        icon.alt = "Low Volume";
        button.disabled = false;
    } else if (volume < 67) {
        icon.src = "assets/media/icons/volume-level-2.svg";
        icon.alt = "Medium Volume";
        button.disabled = false;
    } else {
        icon.src = "assets/media/icons/volume-level-3.svg";
        icon.alt = "Max Volume";
        button.disabled = false;
    }
}

// update sound image and audio
function updateSound(sound) {
    const image = document.getElementById("sound-image");
    const audio = document.getElementById("horn-sound");
    if (sound == AIR_HORN) {
        image.src = "assets/media/images/air-horn.svg";
        image.alt = "Air Horn";
        audio.src = "assets/media/audio/air-horn.mp3";
    } else if (sound == CAR_HORN) {
        image.src = "assets/media/images/car.svg";
        image.alt = "Car Horn";
        audio.src = "assets/media/audio/car-horn.mp3";
    } else if (sound == PARTY_HORN) {
        image.src = "assets/media/images/party-horn.svg";
        image.alt = "Party Horn";
        audio.src = "assets/media/audio/party-horn.mp3";
    }
}

// play sound
function playSound() {
    document.getElementById("horn-sound").play();
}