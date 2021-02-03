// main.js

let volume = 100;

// event listeners
document.getElementById("volume-number").addEventListener("change", inputChanged);
document.getElementById("volume-number").addEventListener("change", sliderChanged);
document.getElementById("honk-btn").addEventListener("click", function(){ alert("Hello World!"); });

// get value from input field and update volume
function inputChanged() {
    volume = document.getElementById("volume-number").value;
    updateVolume();
}

// get value from slider and update volume
function sliderChanged() {
    volume = document.getElementById("volume-slider").value;
    updateVolume();
}

// update input field, slider, and volume icon
function updateVolume() {
    // input field
    document.getElementById("volume-number").value = volume;

    // slider
    document.getElementById("volume-slider").value = volume;

    // volume icon
    const icon = document.getElementById("volume-image");
    if (volume == 0) {
        icon.src = "assets/media/icons/volume-level-0.svg";
        icon.alt = "No Volume";
    } else if (volume < 34) {
        icon.src = "assets/media/icons/volume-level-1.svg";
        icon.alt = "Low Volume";
    } else if (volume < 67) {
        icon.src = "assets/media/icons/volume-level-2.svg";
        icon.alt = "Medium Volume";
    } else {
        icon.src = "assets/media/icons/volume-level-3.svg";
        icon.alt = "Max Volume";
    }

}