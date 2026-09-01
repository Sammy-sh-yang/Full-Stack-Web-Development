
import qr from 'qr-image';
import fs from 'fs';

const url = 'https://www.google.com/search?q=how+to+uninstall+a+npm+package';
const svg = qr.imageSync(url, { type: 'svg' }); 


const html = fs.readFileSync('template.html', 'utf8')
    .replace('<div id="qrcode"></div>', `<div id="qrcode">${svg}</div>`);

fs.writeFileSync('index.html', html);



// var buttons = document.getElementById('qrCodeGenerator'); 
// var img = document.getElementById('qrCodeImg');
// var input = document.getElementById('qrCodeInput'); 
// var colorForeground = document.querySelector("#foreground");
// var colorForeground = document.querySelector("#foreground");


// // var foreground = document.getElementById('foreground').value; 
// // var background = '#006eff'

// buttons.addEventListener("click",function(){
//     QRCode.toDataURL(input.value, {color: { dark: currentColor , light: '#ff0000' }}).then(dataURL => {
//         img.src = dataURL; 
//     });
// })


// // Get the current color value (returns a hex string like "#ff0000")
// // let currentColor = colorForeground.value;


// // Listen for changes when the user picks a new color
// var colors = colorForeground.addEventListener("input", (event) => {
//     let selectedColor = event.target.value;
//     currentColor = selectedColor; 
// });




