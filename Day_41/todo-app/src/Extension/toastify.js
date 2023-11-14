export const alertSuccess = (msg) => {
  Toastify({
    text: msg,
    duration: 3000,
    destination: "",
    newWindow: true,
    close: false,
    gravity: "top", // `top` or `bottom`
    position: "right", // `left`, `center` or `right`
    stopOnFocus: true, // Prevents dismissing of toast on hover
    style: {
      background: "green",
      color: "#fff",
      borderRadius: "10px",
    },
    onClick: function () {}, // Callback after click
  }).showToast();
};

export const alertError = (msg) => {
  Toastify({
    text: msg,
    duration: 3000,
    destination: "",
    newWindow: true,
    close: false,
    gravity: "top", // `top` or `bottom`
    position: "right", // `left`, `center` or `right`
    stopOnFocus: true, // Prevents dismissing of toast on hover
    style: {
      background: "red",
      color: "#fff",
      borderRadius: "10px",
    },
    onClick: function () {}, // Callback after click
  }).showToast();
};

export const alertVerify = (msg) => {
  Toastify({
    text: msg,
    duration: 3000,
    destination: "",
    newWindow: true,
    close: true,
    gravity: "top", // `top` or `bottom`
    position: "right", // `left`, `center` or `right`
    stopOnFocus: true, // Prevents dismissing of toast on hover
    style: {
      background: "yellow",
      color: "#fff",
    },
    onClick: function () {}, // Callback after click
  }).showToast();
};
