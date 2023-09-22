var productList = document.querySelector(".product-list");
var productCart = document.querySelector(".product-cart");
var addCart1 = document.querySelector(".btn-add-cart1");
var addCart2 = document.querySelector(".btn-add-cart2");
var addCart3 = document.querySelector(".btn-add-cart3");
var addCart4 = document.querySelector(".btn-add-cart4");
var quantityCart1 = document.querySelector(".quantity-cart1");
var quantityCart2 = document.querySelector(".quantity-cart2");
var quantityCart3 = document.querySelector(".quantity-cart3");
var quantityCart4 = document.querySelector(".quantity-cart4");

var table = document.createElement("table");
var width = document.createAttribute("width");
width.value = "100%";
var border = document.createAttribute("border");
border.value = "1";
var cellspacing = document.createAttribute("cellspacing");
cellspacing.value = "0";
var cellpadding = document.createAttribute("cellspacing");
cellpadding.value = "0";
table.setAttributeNode(width);
table.setAttributeNode(border);
table.setAttributeNode(cellspacing);
table.setAttributeNode(cellpadding);
var thead = document.createElement("thead");
var tr = document.createElement("tr");
var th1 = document.createElement("th");
var th2 = document.createElement("th");
var th3 = document.createElement("th");
var th4 = document.createElement("th");
var th5 = document.createElement("th");
var th6 = document.createElement("th");

th1.innerText = "STT";
th1.style.width = "5%";
tr.append(th1);
th2.innerText = "Tên sản phẩm";
th2.style.width = "35%";
tr.append(th2);
th3.innerText = "Giá";
th3.style.width = "15%";
tr.append(th3);
th4.innerText = "Số lượng";
th4.style.width = "20%";
tr.append(th4);
th5.innerText = "Thành tiền";
th5.style.width = "20%";
tr.append(th5);
th6.innerText = "Xóa";
th6.style.width = "5%";
tr.append(th6);
thead.append(tr);
table.append(thead);

// document.body.append(table)
var tbody = document.createElement("tbody");
var tfoot = document.createElement("tfoot");
var trf = document.createElement("tr");
var tdf1 = document.createElement("td");
var tdf4 = document.createElement("td");
var tdf5 = document.createElement("td");

var colspan1 = document.createAttribute("colspan");
colspan1.value = "3";
tdf1.innerText = "Tổng";
var colspan5 = document.createAttribute("colspan");
colspan5.value = "2";
tdf1.setAttributeNode(colspan1);
tdf5.setAttributeNode(colspan5);
trf.append(tdf1);
trf.append(tdf4);
trf.append(tdf5);
tfoot.append(trf);
table.append(tfoot);

var updateCart = document.createElement("button");
var deleteCart = document.createElement("button");
var line = document.createElement("hr");
updateCart.innerText = `Cập nhật giỏ hàng`;
deleteCart.innerText = "Xóa giỏ hàng";
updateCart.style.marginRight = "10px";

var productCartContent = document.createElement("div");
productCartContent.append(table);
productCartContent.append(line);
productCartContent.append(updateCart);
productCartContent.append(deleteCart);
// document.body.append(productCartContent)
var products = [];

Array.from(productList.children[1].children).forEach(function (item) {
  var product = {
    id: item.children[0].innerText,
    name: item.children[1].innerText,
    price: item.children[2].innerText,
  };
  products[products.length] = product;
});

var isDrag = true;
var flag1 = false;
var flag2 = false;
var flag3 = false;
var flag4 = false;
var totalPrice = 0;
var totalNumber = 0;
var count = 0;
var check1 = true;
var check2 = true;
var check3 = true;
var check4 = true;
var check5 = true;

var addProduct = function (name, price, quantity) {
  if (quantity <= 0) {
    quantity = 1;
  }
  var tr = document.createElement("tr");
  var td1 = document.createElement("td");
  var td2 = document.createElement("td");
  var td3 = document.createElement("td");
  var td4 = document.createElement("td");
  var td5 = document.createElement("td");
  var td6 = document.createElement("td");
  td1.innerText = `${++count}`;
  td2.innerText = `${name}`;
  td3.innerText = `${price}`;
  var input = document.createElement("input");
  input.type = "number";
  input.value = quantity;
  td4.append(input);
  td5.innerText = `${price * quantity}`;
  var btn = document.createElement("button");
  btn.innerText = "Xóa";
  td6.append(btn);
  tr.append(td1);
  tr.append(td2);
  tr.append(td3);
  tr.append(td4);
  tr.append(td5);
  tr.append(td6);
  tbody.append(tr);
  totalNumber += +quantity;
  tdf4.innerText = `${totalNumber}`;
  totalPrice += price * quantity;
  tdf5.innerText = totalPrice;
  var arr = [];
  arr.push(td4, td5, td4.children[0], tr, +td1.innerText);
  btn.addEventListener("click", function (e) {
    totalNumber =
      totalNumber -
      +btn.parentElement.previousElementSibling.previousElementSibling
        .children[0].value;
    totalPrice =
      totalPrice - +btn.parentElement.previousElementSibling.innerText;
    tdf4.innerText = `${totalNumber}`;
    tdf5.innerText = totalPrice;
    var temp = btn.parentElement.parentElement.parentElement;
    if (
      +btn.parentElement.previousElementSibling.previousElementSibling
        .previousElementSibling.innerText === 1000
    ) {
      flag1 = false;
      check1 = true;
      arr1 = [];
    }
    if (
      +btn.parentElement.previousElementSibling.previousElementSibling
        .previousElementSibling.innerText === 2000
    ) {
      flag2 = false;
      check2 = true;
      arr2 = [];
    }
    if (
      +btn.parentElement.previousElementSibling.previousElementSibling
        .previousElementSibling.innerText === 3000
    ) {
      flag3 = false;
      check3 = true;
      arr3 = [];
    }
    if (
      +btn.parentElement.previousElementSibling.previousElementSibling
        .previousElementSibling.innerText === 4000
    ) {
      flag4 = false;
      check4 = true;
      arr4 = [];
    }
    if (temp.children.length === 1) {
      destroy();
    }
    var countAfter = 0;
    btn.parentElement.parentElement.remove();
    Array.from(temp.children).forEach(function (item) {
      item.children[0].innerText = `${++countAfter}`;
    });
    count = countAfter;
  });
  return arr;
};

var updateProduct = function (
  quantity,
  price,
  currentQuantity,
  currentPrice,
  arr
) {
  if (quantity <= 0) {
    quantity = 1;
  }
  var newQuantity = +currentQuantity + +quantity;
  var newPrice = +currentPrice + +quantity * +price;
  arr[0].children[0].value = newQuantity;
  arr[1].innerText = newPrice;
  totalNumber += +quantity;
  tdf4.innerText = `${totalNumber}`;
  totalPrice += price * quantity;
  tdf5.innerText = `${totalPrice}`;
  return arr[0].children[0];
};
var arr1 = [];
var arr2 = [];
var arr3 = [];
var arr4 = [];

addCart1.addEventListener("click", function () {
  if (flag1) {
    updateProduct(
      addCart1.previousElementSibling.value,
      products[0].price,
      arr1[0].children[0].value,
      arr1[1].innerText,
      arr1
    );
  }
  if (isDrag) {
    productCart.innerText = "";
    productCart.append(productCartContent);
    isDrag = false;
    table.insertBefore(tbody, tfoot);
  }
  if (check1) {
    arr1 = addProduct(
      products[0].name,
      products[0].price,
      addCart1.previousElementSibling.value
    );
    check1 = false;
    flag1 = true;
  }
});
addCart2.addEventListener("click", function () {
  if (flag2) {
    updateProduct(
      addCart2.previousElementSibling.value,
      products[1].price,
      arr2[0].children[0].value,
      arr2[1].innerText,
      arr2
    );
  }
  if (isDrag) {
    productCart.innerText = "";
    productCart.append(productCartContent);
    isDrag = false;
    table.insertBefore(tbody, tfoot);
  }
  if (check2) {
    arr2 = addProduct(
      products[1].name,
      products[1].price,
      addCart2.previousElementSibling.value
    );
    check2 = false;
    flag2 = true;
  }
});
addCart3.addEventListener("click", function () {
  if (flag3) {
    updateProduct(
      addCart3.previousElementSibling.value,
      products[2].price,
      arr3[0].children[0].value,
      arr3[1].innerText,
      arr3
    );
  }
  if (isDrag) {
    productCart.innerText = "";
    productCart.append(productCartContent);
    isDrag = false;
    table.insertBefore(tbody, tfoot);
  }
  if (check3) {
    arr3 = addProduct(
      products[2].name,
      products[2].price,
      addCart3.previousElementSibling.value
    );
    check3 = false;
    flag3 = true;
  }
});
addCart4.addEventListener("click", function () {
  if (flag4) {
    updateProduct(
      addCart4.previousElementSibling.value,
      products[3].price,
      arr4[0].children[0].value,
      arr4[1].innerText,
      arr4
    );
  }
  if (isDrag) {
    productCart.innerText = "";
    productCart.append(productCartContent);
    isDrag = false;
    table.insertBefore(tbody, tfoot);
  }
  if (check4) {
    arr4 = addProduct(
      products[3].name,
      products[3].price,
      addCart4.previousElementSibling.value
    );
    check4 = false;
    flag4 = true;
  }
});

var update = function (
  currentQuantity1,
  currentQuantity2,
  currentQuantity3,
  currentQuantity4
) {
  if (currentQuantity1 <= 0) {
    currentQuantity1 = 1;
  }
  if (currentQuantity2 <= 0) {
    currentQuantity2 = 1;
  }
  if (currentQuantity3 <= 0) {
    currentQuantity3 = 1;
  }
  if (currentQuantity4 <= 0) {
    currentQuantity4 = 1;
  }
  var newPrice1 = 0;
  var newPrice2 = 0;
  var newPrice3 = 0;
  var newPrice4 = 0;
  if (currentQuantity1) {
    newPrice1 = currentQuantity1 * products[0].price;
    arr1[1].innerText = `${newPrice1}`;
  }
  if (currentQuantity2) {
    newPrice2 = currentQuantity2 * products[1].price;
    arr2[1].innerText = `${newPrice2}`;
  }
  if (currentQuantity3) {
    newPrice3 = currentQuantity3 * products[2].price;
    arr3[1].innerText = `${newPrice3}`;
  }
  if (currentQuantity4) {
    newPrice4 = currentQuantity4 * products[3].price;
    arr4[1].innerText = `${newPrice4}`;
  }
  currentQuantity1 = currentQuantity1 === false ? 0 : +currentQuantity1;
  currentQuantity2 = currentQuantity2 === false ? 0 : +currentQuantity2;
  currentQuantity3 = currentQuantity3 === false ? 0 : +currentQuantity3;
  currentQuantity4 = currentQuantity4 === false ? 0 : +currentQuantity4;
  tdf4.innerText = `${
    currentQuantity1 + currentQuantity2 + currentQuantity3 + currentQuantity4
  }`;
  tdf5.innerText = `${newPrice1 + newPrice2 + newPrice3 + newPrice4}`;
};

updateCart.addEventListener("click", function () {
  alert("Chúc mừng anh Quân đã cập nhật giỏ hàng thành công nhé! :3 :3 :3");
  update(
    arr1[2] === undefined ? false : arr1[2].value,
    arr2[2] === undefined ? false : arr2[2].value,
    arr3[2] === undefined ? false : arr3[2].value,
    arr4[2] === undefined ? false : arr4[2].value
  );
});

deleteCart.addEventListener("click", destroy);

var destroy = function () {
  var check = confirm("Anh Quân chắc chưa z ????");
  if (check) {
    alert("Chúc mừng anh Quân đã xóa giỏ hàng thành công!!! :3 :3 :3");
    if (arr1[3]) {
      tbody.removeChild(arr1[3]);
    }
    if (arr2[3]) {
      tbody.removeChild(arr2[3]);
    }
    if (arr3[3]) {
      tbody.removeChild(arr3[3]);
    }
    if (arr4[3]) {
      tbody.removeChild(arr4[3]);
    }
    table.removeChild(tbody);
    productCart.removeChild(productCartContent);
    isDrag = true;
    flag1 = false;
    flag2 = false;
    flag3 = false;
    flag4 = false;
    totalPrice = 0;
    totalNumber = 0;
    count = 0;
    check1 = true;
    check2 = true;
    check3 = true;
    check4 = true;
    check5 = true;
    arr1 = [];
    arr2 = [];
    arr3 = [];
    arr4 = [];
    productCart.innerText = "Giỏ hàng không có sản phẩm.";
  }
};
deleteCart.addEventListener("click", destroy);
