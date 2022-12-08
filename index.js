// https://github.com/davidshimjs/qrcodejs

const form = document.querySelector(".form");
const qr = document.querySelector("#qr-wrapper");

const onGenerateSubmit = (e) => {
  e.preventDefault();

  const url = document.querySelector("#url").value;

  clearPooh();
  generateQRCode(url);
  setTimeout(() => {
    const saveUrl = qr.querySelector("img").src;
    saveBtn(saveUrl);
  }, 50);
};

const generateQRCode = (url) => {
  const qrcode = new QRCode(qr, {
    text: url,
    width: 300,
    height: 300,
  });
};

const saveBtn = (saveUrl) => {
  const link = document.createElement("a");

  link.classList = "link";
  link.href = saveUrl;
  link.download = "qrcode";
  link.innerHTML = "Save Image";
  document.querySelector("#link-wrapper").appendChild(link);
};

const clearPooh = () => {
  qr.innerHTML = "";
  const save = document.querySelector(".link");
  if (save) save.remove();
};

form.addEventListener("submit", onGenerateSubmit);
