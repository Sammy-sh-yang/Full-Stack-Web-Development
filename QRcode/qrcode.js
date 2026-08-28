
var buttons = document.getElementById('qrCodeGenerator'); 
var img = document.getElementById('qrCodeImg');
var input = document.getElementById('qrCodeInput'); 

buttons.addEventListener("click",function(){
    QRCode.toDataURL(input.value).then(dataURL => {
        img.src = dataURL; 
    });
})