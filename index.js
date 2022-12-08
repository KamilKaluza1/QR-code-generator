// https://github.com/davidshimjs/qrcodejs

const form = document.querySelector(".form");
const qr = document.querySelector("#qr-wrapper");

const onGenerateSubmit = (e) => {
  e.preventDefault();

  const url = document.querySelector("#url").value;
  
  
  clearDrake()
  generateQRCode(url);
  
};

const generateQRCode = (url) => {
  const qrcode = new QRCode(qr, {
    text: url,
    width: 128,
	height: 128,
  });
};

const saveBtn = (saveUrl) => {
    const link = document.createElement("a");
    link.id = save-link;
    link.classList = 'link';
    link.download = qr;
    link.innerHTML = "save image";
    qr.appendChild(link)
}

const clearDrake = () => qr.innerHTML = ''

form.addEventListener("submit", onGenerateSubmit);
