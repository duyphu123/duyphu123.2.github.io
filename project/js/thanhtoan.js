const menuIconEl = document.querySelector(".menu-icon");

const menuEL = document.querySelector(".nav-list");

menuIconEl.addEventListener("click", function () {
  menuEL.classList.toggle("show");
  overlayOpen1.style.display = "block";
});
window.addEventListener("resize", function () {
  if (window.innerWidth > 768) {
    menuEL.classList.remove("show");
    overlayOpen.style.display = "none";
  }
});
const overlayOpen1 = document.querySelector(".overlay-thanhtoan");
const cartBtn1 = document.querySelector(".cart-side .btn-close");
const cartShowOpen1 = document.querySelector(".cart");
cartShowOpen1.addEventListener("click", function () {
    document.querySelector(".cart-side").style.right = "0";
    overlayOpen1.style.display = "block";
    
  });
  cartBtn1.addEventListener("click", function () {
    document.querySelector(".cart-side").style.right = "-100%";
    overlayOpen1.style.display = "none";
  });
  overlayOpen1.addEventListener("click", function () {
    menuEL.classList.remove("show");
    overlayOpen1.style.display = "none";
   
    document.querySelector(".cart-side").style.right = "-100%";
   
  });
const btnEl1 = document.querySelector(".btn1");
const dropEL1 = document.querySelector(".dropdown-menu1");
const sizeS1 = document.querySelector(".sizeS1");
const sizeM1 = document.querySelector(".sizeM1");
const sizeL1 = document.querySelector(".sizeL1");
const price1 = document.querySelector(".gia-thanhtoan1 span");
const priceAll1 = document.querySelector(".tong1 span");
// const inputValue = document.querySelector("input").value;

btnEl1.addEventListener("click", function () {
  dropEL1.classList.toggle("show");
});
let products = [
  {
    id: 1,
    name: "Pizza Trứng Cút Xốt Phô Mai - Kid Mania",

    image: "./images/PZ1.png",
    price: 249000,

    total: 1,
  },
  {
    id: 2,
    name: "Mỳ Ý Hải Sản",

    image: "./images/mp1.png",
    price: 89000,
    total: 1,
  },
  {
    id: 3,
    name: "Nước Chanh Tươi",

    image: "./images/du1.png",

    price: 20000,
    total: 1,
  },
];
const productsElement = document.querySelector(".thanhtoan-info");
const renderProduct = (arr) => {
  //B1: Xóa hết nội dung trước khi render
  productsElement.innerHTML = "";

  // Update tong so luong khi thay doi giao dien
  // updateTotalProduct(products);
  //Trường hợp mảng rỗng
  if (arr.length == 0) {
    productsElement.innerHTML =
      "<p class=length0>Không có sản phẩm nào trong giỏ hàng</p> <a href='./menu.html' class=length1> >> Quay Lại Menu</a> ";
    // promotionElement.style.display = "none";
    // summaryElement.style.display = "none";
    // totalProductsElement.style.display = "none";
    const dathang = document.querySelector(".dathang");
    const btnDathang=document.querySelector(".btn-dathang2")
    dathang.style.display = "none";
    btnDathang.style.display = "none";
    return;
  }
  for (let i = 0; i < arr.length; i++) {
    const t = arr[i];
    // Clear nội dung
    productsElement.innerHTML += `<div class="cart-item-thanhtoan d-flex">
    <div class="col1">
      <div class="cart-item-thanhtoan-2">
        <div class="cart-item-image-thanhtoan">
          <img src="${t.image}" alt="pz1" />
        </div>
        <div class="cart-item-info-thanhtoan" id="dialog">
          <div class="name-thanhtoan">
          ${t.name}
          </div>
          <div class="size-thanhtoan d-flex align-items-center">
            <button
              class="btn btn1 btn-outline-secondary dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Size S
            </button>
            <ul class="dropdown-menu dropdown-menu1">
              <li><a class="dropdown-item sizeS sizeS1">Size S</a></li>
              <li><a class="dropdown-item sizeM sizeM1">Size M</a></li>
              <li><a class="dropdown-item sizeL sizeL1">Size L</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div class="col2">
      <div class="gia-thanhtoan gia-thanhtoan1"><span>${numberFormater.format(
        t.price
      )} </span> đ</div>
    </div>
    <div class="col3">
    <div class="quantity" onchange="changeTotalProduct(${t.id}, event)">
    <input class="input1"
     outline: none"
    type="number"
    value="${t.total}"
    min="1"
  />
    </div>
    </div>

    <div class="col4">
      <div class="col4-2 d-flex">
        <div class="tong tong1"><span></span> đ</div>
        <div class="delete-product-thanhtoan" onclick="deleteProduct(${t.id})">
          <i class="fa-solid fa-trash-can" ></i>
        </div>
      </div>
    </div>
  </div>`;
  }

  const btnSize = document.querySelectorAll(".btn");
  const sizeS = document.querySelectorAll(".sizeS");
  const sizeM = document.querySelectorAll(".sizeM");
  const sizeL = document.querySelectorAll(".sizeL");
  const dropEL1 = document.querySelectorAll(".dropdown-menu");
  const priceSize = document.querySelectorAll(".gia-thanhtoan span");
  for (let i = 0; i < arr.length; i++) {
    btnSize[i].addEventListener("click", function () {
      dropEL1[i].classList.toggle("show");
    });
  }

  for (let i = 0; i < arr.length; i++) {
    const t = arr[i];

    sizeS[i].addEventListener("click", function () {
      dropEL1[i].classList.remove("show");
      priceSize[i].innerHTML = `${numberFormater.format(t.price)}`;
      btnSize[i].innerHTML = `Size S`;
      let subTotal = products[i].total * priceSize[i].innerHTML * 1000;
      summaryUlElement[i].innerHTML = "";
      summaryUlElement[i].innerHTML += `${numberFormater.format(subTotal)}`;
      const summaryUlElement2 = document.querySelector(".col-right2");
      let subTotalAll = 0;
      for (let i = 0; i < arr.length; i++) {
        const priceA = document.querySelectorAll(".gia-thanhtoan span");
        console.log(priceA);
        subTotalAll += products[i].total * (priceA[i].innerHTML * 1000);
      }
      summaryUlElement2.innerHTML = "";
      summaryUlElement2.innerHTML += `
  <div class="row1 d-flex">
                  <p class="text-row2">${numberFormater.format(
                    subTotalAll
                  )}</p><p>VNĐ</p>
                </div>
                <div class="row1 d-flex">
                  <p class="text-row2">0</p><p>VNĐ</p>
                </div>
                <div class="row1 d-flex">
                  <p class="text-row2 tongcong">${numberFormater.format(
                    subTotalAll
                  )}</p><p>VNĐ</p>
                </div>
  `;
    });
  }
  for (let i = 0; i < arr.length; i++) {
    const t = arr[i];

    sizeM[i].addEventListener("click", function () {
      dropEL1[i].classList.remove("show");
      priceSize[i].innerHTML = `${numberFormater.format(t.price + 20000)}`;
      btnSize[i].innerHTML = `Size M`;
      let subTotal = products[i].total * priceSize[i].innerHTML * 1000;
      summaryUlElement[i].innerHTML = "";
      summaryUlElement[i].innerHTML += `${numberFormater.format(subTotal)}`;
      const summaryUlElement2 = document.querySelector(".col-right2");
      let subTotalAll = 0;
      for (let i = 0; i < arr.length; i++) {
        const priceA = document.querySelectorAll(".gia-thanhtoan span");
        console.log(priceA);
        subTotalAll += products[i].total * (priceA[i].innerHTML * 1000);
      }
      summaryUlElement2.innerHTML = "";
      summaryUlElement2.innerHTML += `
    <div class="row1 d-flex">
                    <p class="text-row2">${numberFormater.format(
                      subTotalAll
                    )}</p>đ
                  </div>
                  <div class="row1 d-flex">
                    <p class="text-row2">0</p>đ
                  </div>
                  <div class="row1 d-flex">
                    <p class="text-row2 tongcong">${numberFormater.format(
                      subTotalAll
                    )}</p>đ
                  </div>
    `;
    });
  }
  for (let i = 0; i < arr.length; i++) {
    const t = arr[i];

    sizeL[i].addEventListener("click", function () {
      dropEL1[i].classList.remove("show");
      priceSize[i].innerHTML = `${numberFormater.format(t.price + 40000)}`;
      btnSize[i].innerHTML = `Size L`;
      let subTotal = products[i].total * priceSize[i].innerHTML * 1000;
      summaryUlElement[i].innerHTML = "";
      summaryUlElement[i].innerHTML += `${numberFormater.format(subTotal)}`;
      const summaryUlElement2 = document.querySelector(".col-right2");
      let subTotalAll = 0;
      for (let i = 0; i < arr.length; i++) {
        const priceA = document.querySelectorAll(".gia-thanhtoan span");
        console.log(priceA);
        subTotalAll += products[i].total * (priceA[i].innerHTML * 1000);
      }
      summaryUlElement2.innerHTML = "";
      summaryUlElement2.innerHTML += `
  <div class="row1 d-flex">
                  <p class="text-row2">${numberFormater.format(
                    subTotalAll
                  )}</p><p>VNĐ</p>
                </div>
                <div class="row1 d-flex">
                  <p class="text-row2">0</p><p>VNĐ</p>
                </div>
                <div class="row1 d-flex">
                  <p class="text-row2 tongcong">${numberFormater.format(
                    subTotalAll
                  )}</p><p>VNĐ</p>
                </div>
  `;
    });
  }
  const summaryUlElement = document.querySelectorAll(".tong span");

  console.log(summaryUlElement);

  for (let i = 0; i < arr.length; i++) {
    const t = arr[i];

    let subTotal = products[i].total * products[i].price;
    console.log(subTotal);
    summaryUlElement[i].innerHTML += `${numberFormater.format(subTotal)}`;
  }
  const summaryUlElement2 = document.querySelector(".col-right2");
  let subTotalAll = 0;
  for (let i = 0; i < arr.length; i++) {
    const priceA = document.querySelectorAll(".gia-thanhtoan span");
    console.log(priceA);
    subTotalAll += products[i].total * (priceA[i].innerHTML * 1000);
  }
  summaryUlElement2.innerHTML = "";
  summaryUlElement2.innerHTML += `
<div class="row1 d-flex">
                <p class="text-row2">${numberFormater.format(subTotalAll)}</p><p>VNĐ</p>
              </div>
              <div class="row1 d-flex">
                <p class="text-row2">0</p><p>VNĐ</p>
              </div>
              <div class="row1 d-flex">
                <p class="text-row2 tongcong">${numberFormater.format(
                  subTotalAll
                )}</p><p>VNĐ</p>
              </div>
`;
};
const changeSize = (arr) => {};
// Thay đổi số lượng của item
const changeTotalProduct = (id, event) => {
  // Lấy giá trị trong ô input dựa vào biến event trong hàm xử lý sự kiện
  let inputQuantityValue = parseInt(event.target.value);
  console.log(inputQuantityValue);
  // Duyệt mảng products để tìm sản phẩm thay đổi
  for (let i = 0; i < products.length; i++) {
    if (products[i].id == id) {
      products[i].total = inputQuantityValue;
    }
  }
  // Render lại giao diện sau khi xóa
  renderProduct(products);
};

const deleteProduct = (id) => {
  const popupDel = document.querySelector(".popup-delete-thanhtoan");

  popupDel.style.display = "block";
  const Ok = popupDel.querySelector(".co");
  const No = popupDel.querySelector(".khong");
  Ok.addEventListener("click", function () {
    for (let i = 0; i < products.length; i++) {
      if (products[i].id == id) {
        products.splice(i, 1);
      }
    }
    popupDel.style.display = "none";
    renderProduct(products);
  });
  No.addEventListener("click", function () {
    popupDel.style.display = "none";
  });
};
// var cartProduct = document.querySelectorAll(".cart-item-thanhtoan");
// var btnDelete = document.querySelectorAll(".fa-trash-can");
// for (i = 0; i < cartProduct.length; i++) {
//   var btnDelete = document.querySelectorAll(".fa-trash-can");
//   btnDelete[i].addEventListener("click", function (event) {
//     var ItemDelete = event.target;
//     var ItemDeleteA =
//       ItemDelete.parentElement.parentElement.parentElement.parentElement;

//     const popupDel = document.querySelector(".popup-delete-thanhtoan");
//     popupDel.style.display = "block";
//     const Ok = document.querySelector(".co");
//     const No = document.querySelector(".khong");
//     Ok.addEventListener("click", function () {
//       ItemDeleteA.remove();
//       popupDel.style.display = "none";
//       total1();
//     });
//     No.addEventListener("click", function () {
//       popupDel.style.display = "none";
//     });
//   });
// }
const numberFormater = new Intl.NumberFormat("de-DE");
// Tính tổng tiền
const updateTotalMoney = (arr) => {};

const main = () => {
  renderProduct(products);
};

main();

const provinceEl = document.getElementById("province");
const districtEl = document.getElementById("district");
const wardEl = document.getElementById("commune");
var code = document.getElementById("code");
const name = document.querySelector(".name");
async function getProvince() {
  try {
    let res = await axios.get("https://provinces.open-api.vn/api/p/");
    console.log(res);

    //render:

    renderProvince(res.data);
  } catch (err) {
    console.log(err);
  }
}
function renderProvince(arr) {
  arr.forEach((ele) => {
    provinceEl.innerHTML += `<option value="${ele.code}">${ele.name}</option>`;
  });
}
provinceEl.addEventListener("change", async function () {
  try {
    let provinceCode = provinceEl.value;
    let res = await axios.get(
      `https://provinces.open-api.vn/api/p/${provinceCode}?depth=2`
    );
    console.log(res);
    districtEl.innerHTML = `<option value="none">Chọn Quận/Huyện</option>`;
    wardEl.innerHTML = `<option value="none">Chọn Phường/Xã</option>`;
    renderDistrict(res.data.districts);
    console.log(provinceEl.options[provinceEl.selectedIndex].text);
  } catch (err) {}
});
function renderDistrict(arr) {
  arr.forEach((ele) => {
    districtEl.innerHTML += `<option value="${ele.code}">${ele.name}</option>`;
  });
}
districtEl.addEventListener("change", async function () {
  try {
    let districtCode = districtEl.value;
    let res = await axios.get(
      `https://provinces.open-api.vn/api/d/${districtCode}?depth=2`
    );
    console.log(res.data.wards);
    wardEl.innerHTML = `<option value="none">Chọn Phường/Xã</option>`;
    renderWards(res.data.wards);
  } catch (err) {}
});

function renderWards(arr) {
  arr.forEach((ele) => {
    wardEl.innerHTML += `<option value="${ele.code}">${ele.name}</option>`;
  });
}

getProvince();
const cancel = document.querySelector(".cancel");

const confirm1 = document.querySelector(".confirm");

const telephone = document.querySelector(".telephone");
const address = document.querySelector(".address");
const nameInfo = document.querySelector(".name-info");
const nameErr = document.getElementById("name-error");
const diachinhanhang = document.querySelector(".diachi");
const diachiErr = document.getElementById("diachi-error");
const phoneEl = document.querySelector(".phone-number");
const phoneErr = document.getElementById("phone-error");
const tinh = document.querySelector("#province option");
const tinhErr = document.getElementById("province-error");
const huyen = document.querySelector("#district option");
const huyenErr = document.getElementById("district-error");
const xa = document.querySelector("#commune option");
const xaErr = document.getElementById("commune-error");
const btnDathang2 = document.querySelector(".btn-dathang2");
const infoTt = document.querySelector(".info-thanhtoan");
console.log(btnDathang2);
btnDathang2.addEventListener("click", function () {
  infoTt.style.display = "block";
});

function validatePhone(phoneEl) {
  var phoneNumb = /^\d{10}$/;
  return phoneEl.value.match(phoneNumb);
}
cancel.addEventListener("click", function () {
  infoTt.style.display = "none";
  overlayOpen.style.display = "none";
  closeDialog();
});

confirm1.addEventListener("click", async function () {
  const isValidPhone = validatePhone(phoneEl);
  try {
    nameErr.innerText = "";
    diachiErr.innerText = "";
    phoneErr.innerText = "";
    tinhErr.innerText = "";
    huyenErr.innerText = "";
    xaErr.innerText = "";
    if (
      nameInfo.value == "" ||
      diachinhanhang.value == "" ||
      !isValidPhone ||
      provinceEl.options[provinceEl.selectedIndex].text ==
        "Chọn Tỉnh/Thành phố" ||
      districtEl.options[districtEl.selectedIndex].text == "Chọn Quận/Huyện" ||
      wardEl.options[wardEl.selectedIndex].text == "Chọn Phường/Xã"
    ) {
      if (nameInfo.value == "") {
        nameErr.innerText = "Không được để trống thông tin";
      }
      if (diachinhanhang.value == "") {
        diachiErr.innerText = "Không được để trống thông tin";
      }
      if (!isValidPhone) {
        phoneErr.innerText = "Số điện thoại phải có 10 chữ số";
      }
      if (
        provinceEl.options[provinceEl.selectedIndex].text ==
        "Chọn Tỉnh/Thành phố"
      ) {
        tinhErr.innerText = "Không được để trống thông tin";
      }
      if (
        districtEl.options[districtEl.selectedIndex].text == "Chọn Quận/Huyện"
      ) {
        huyenErr.innerText = "Không được để trống thông tin";
      }
      if (wardEl.options[wardEl.selectedIndex].text == "Chọn Phường/Xã") {
        xaErr.innerText = "Không được để trống thông tin";
      }
      return;
    }
  } catch (err) {}
  confirm1.addEventListener("click", function () {
    infoTt.style.display = "none";

    btnDathang2.innerHTML = "Thay Đổi Thông Tin";
    alert("Bạn Đã Đặt Hàng Thành Công.Xin Cảm Ơn");
    overlayOpen.style.display = "none";
    
  });
 
})
;

const overlayOpen = document.querySelector(".overlay-thanhtoan");

btnDathang2.addEventListener("click", function () {
  overlayOpen.style.display = "block";
});
overlayOpen.addEventListener("click", function () {
  infoTt.style.display = "none";
  overlayOpen.style.display = "none";
  closeDialog();
});
// const showDialog = () => {
//   document.getElementById("dialog").classList.add("show");
//   const scrollY = document.documentElement.style.getPropertyValue("--scroll-y");
//   const body = document.body1;
//   body.style.position = "fixed";
//   body.style.top = `-${scrollY}`;
// };
const closeDialog = () => {
  const body = document.body;
  const scrollY = body.style.top;
  body.style.position = "";
  body.style.top = "";
  window.scrollTo(0, parseInt(scrollY || "0") * -1);
  document.getElementById("dialog").classList.remove("show");
};
window.addEventListener("scroll", () => {
  document.documentElement.style.setProperty(
    "--scroll-y",
    `${window.scrollY}px`
  );
});
var offset = 500;

var duration = 50;
$(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > offset) $("#top-up").fadeIn(duration);
    else $("#top-up").fadeOut(duration);
  });
  $("#top-up").click(function () {
    $("body,html").animate({ scrollTop: 0 }, duration);
  });
});
const cartBtn = document.querySelector(".cart-side .btn-close");
const cartShowOpen = document.querySelector(".cart");
cartShowOpen.addEventListener("click", function () {
  document.querySelector(".cart-side").style.right = "0";
  overlayOpen.style.display = "block";
});
cartBtn.addEventListener("click", function () {
  document.querySelector(".cart-side").style.right = "-100%";
  overlayOpen.style.display = "none";
});

overlayOpen.addEventListener("click", function () {
  overlayOpen.style.display = "none";

  document.querySelector(".cart-side").style.right = "-100%";
});
