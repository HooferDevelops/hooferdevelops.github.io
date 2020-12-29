// flashing subtitle text // 

var offText = "Made with love by Hoofer"
var onText = "* Made with love by Hoofer *"

var on = false
setInterval(function(){
    on = !on
    if (on)
        document.getElementById("shuffle").innerText = onText
    else
        document.getElementById("shuffle").innerText = offText
},1000)

// gradient list //

var gradients = [
    {name: "Rainbow",
    colors: [
        "red",
        "orange",
        "yellow",
        "green",
        "blue",
        "purple",
        "pink"
    ]},
    {name: "Egg",
    colors: [
        "#abbaab",
        "#FFFFFF"
    ]},
    {name: "Piggy Pink",
    colors: [
        "#ee9ca7",
        "#ffdde1"
    ]},
    {name: "Grade Grey",
    colors: [
        "#bdc3c7",
        "#2c3e50"
    ]},
    {name: "Cool Blues",
    colors: [
        "#2193b0",
        "#6dd5ed"
    ]},
    {name: "MegaTron",
    colors: [
        "#C6FFDD",
        "#FBD786",
        "#f7797d"
    ]},
    {name: "Evening Sunshine",
    colors: [
        "#b92b27",
        "#1565C0"
    ]},
    {name: "Dark Ocean",
    colors: [
        "#373B44",
        "#4286f4"
    ]},
    {name: "Quepal",
    colors: [
        "#11998e",
        "#38ef7d"
    ]},
    {name: "Argon",
    colors: [
        "#03001e",
        "#7303c0",
        "#ec38bc",
        "#fdeff9"
    ]},
    {name: "Black Rose",
    colors: [
        "#f4c4f3",
        "#fc67fa"
    ]},
    {name: "Citrus Peel",
    colors: [
        "#FDC830",
        "#F37335"
    ]},
    {name: "Magic",
    colors: [
        "#59C173",
        "#a17fe0",
        "#5D26C1"
    ]},
    {name: "Wedding Day Blues",
    colors: [
        "#40E0D0",
        "#FF8C00",
        "#5D26C1"
    ]},
    {name: "Alive",
    colors: [
        "#CB356B",
        "#BD3F32"
    ]},
    {name: "Lemon",
    colors: [
        "#F7971E",
        "#FFD200"
    ]},
    {name: "Yummy",
    colors: [
        "#f7ff00",
        "#db36a4"
    ]},
    {name: "Christmas",
    colors: [
        "#2F7336",
        "#AA3A38"
    ]},
    {name: "Vikings",
    colors: [
        "#5614B0",
        "#DBD65C"
    ]},
    {name: "Blush",
    colors: [
        "#B24592",
        "#F15F79"
    ]},
    {name: "Piglet",
    colors: [
        "#ee9ca7",
        "#ffdde1"
    ]},
    {name: "Martini",
    colors: [
        "#FDFC47",
        "#24FE41"
    ]},
    {name: "The Strain",
    colors: [
        "#870000",
        "#190A05"
    ]},
    {name: "Memories",
    colors: [
        "#DE6262",
        "#FFB88C"
    ]},
    {name: "Miaka",
    colors: [
        "#FC354C",
        "#0ABFBC"
    ]},
    {name: "Dracula",
    colors: [
        "#DC2424",
        "#4A569D"
    ]},
    {name: "Midnight",
    colors: [
        "#232526",
        "#414345"
    ]},
    {name: "Electric Violet",
    colors: [
        "#4776E6",
        "#8E54E9"
    ]},
    {name: "Bora",
    colors: [
        "#2BC0E4",
        "#EAECC6"
    ]},
    {name: "Steel",
    colors: [
        "#1F1C2C",
        "#928DAB"
    ]},
    {name: "Cherry",
    colors: [
        "#EB3349",
        "#F45C43"
    ]},
    {name: "Ocean",
    colors: [
        "#1A2980",
        "#26D0CE"
    ]},
    {name: "Noon",
    colors: [
        "#ff6e7f",
        "#bfe9ff"
    ]},
    {name: "Hazel",
    colors: [
        "#77A1D3",
        "#79CBCA",
        "#E684AE"
    ]},
    {name: "Anamnisar",
    colors: [
        "#9796f0",
        "#fbc7d4"
    ]},
    {name: "Copper",
    colors: [
        "#B79891",
        "#94716B"
    ]},
    {name: "Windy",
    colors: [
        "#acb6e5",
        "#86fde8"
    ]},
    {name: "Twitch",
    colors: [
        "#6441a5",
        "#2a0845"
    ]},
    {name: "Atlas",
    colors: [
        "#feac5e",
        "#c779d0",
        "#4bc0c8"
    ]},
    {name: "Hersheys",
    colors: [
        "#1e130c",
        "#9a8478"
    ]},
    {name: "Lava",
    colors: [
        "#e40a0a",
        "#ff5a00",
        "#fff800"
    ]},
    
]




// create all gradient buttons //

gradients.forEach((gradient)=>{
    const gradientButton = document.createElement("div");
    gradientButton.className = "image-button"
    gradientButton.style.backgroundImage = `linear-gradient(125deg, ${gradient.colors.join(", ")})` 
    gradientButton.addEventListener("click", ()=>{
        initCanvas(gradient.colors);
    })
    document.getElementById("gradient-list").append(gradientButton)
})

// https://stackoverflow.com/questions/30143082/how-to-get-color-value-from-gradient-by-percentage-with-javascript //

const WIDTH=101,HEIGHT=1;let context;function initCanvas(t){const e=document.createElement("CANVAS");e.width=WIDTH,e.height=HEIGHT;const n=(context=e.getContext("2d")).createLinearGradient(0,0,WIDTH,0),o=1/(t.length-1);let c=0;t.forEach(t=>{n.addColorStop(c,t),c+=o}),context.fillStyle=n,context.fillRect(0,0,WIDTH,HEIGHT)}function getColor(t){const e=context.getImageData(t,0,1,1).data;return`rgb(${e[0]}, ${e[1]}, ${e[2]})`}

// https://stackoverflow.com/questions/5623838/rgb-to-hex-and-hex-to-rgb

function rgbToHex(a){
  a=a.replace(/[^\d,]/g,"").split(","); 
  return"#"+((1<<24)+(+a[0]<<16)+(+a[1]<<8)+ +a[2]).toString(16).slice(1)
}

// generate letter with color //

function createLetter(letter, color){
    const newText = document.createElement("div");
    const newContent = document.createTextNode(letter);
    newText.appendChild(newContent);
    newText.style.color = color;
    newText.className = "shadow"
    newText.style.display = 'inline-block';
    document.getElementById("nickname-preview-div").append(newText)
}
  
// create text from gradient //

var nicknameInput = document.getElementById("nickname-input");
var nicknameOutput = document.getElementById("nickname-output");
var copyToClipboard = document.getElementById("nickname-copy");


setInterval(function(){
    document.getElementById("nickname-preview-div").innerHTML = '';
    nicknameOutput.value = '';

    var text = nicknameInput.value;
    text = text.replace(/\s/g, '');
    if (text == ""){
        text = "None"
    }
    text = text.split("")
    var index = 0;
    var textLength = text.length;
    text.forEach((letter)=>{
        var color = getColor((index/textLength)*100)
        createLetter(letter,color)
        nicknameOutput.value += "&" + rgbToHex(color) + letter
        index++;
    })
}, 100)

// copy to clipboard //

copyToClipboard.addEventListener("click", ()=>{
    nicknameOutput.select();
    nicknameOutput.setSelectionRange(0, 99999); 
    document.execCommand("copy");
    alert("Copied: " + nicknameOutput.value);
})
