
// const fs = require('fs');
import QRCode from 'qrcode';

const img = document.getElementById("qr"); 


var userInput = 'I am a pony!'; 

QRCode.toDataURL(userInput, function (err, url) {
    img.src = url;
    console.log(url);   
})

