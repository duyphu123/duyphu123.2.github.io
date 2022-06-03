let products = [
  {
    id: 1,
    name: "Áo kiểu nữ cam đất phối cổ trắng dập ly",
    description:
      "Sản phẩm dễ dàng phối hợp cùng nhiều trang phục và phụ kiện khác mang đến phong cách thời trang riêng cho bạn nữ.",
    image: "./images/PZ3.png",
    price: 250000,
    total: 1,
  },
  {
    id: 2,
    name: "Áo trắng bèo lé đen tay loe dễ thương",
    description:
      "Một chút khéo léo trong khâu mix & match hẳn sẽ giúp bạn trở nên duyên dáng hơn, xinh đẹp hơn trong mắt tất cả mọi người xung quanh.",
    image: "./images/PZ4.png",
    price: 350000,
    total: 1,
  },
  {
    id: 3,
    name: "Váy nữ xanh dập ly",
    description:
      "Sản phẩm dễ dàng phối hợp cùng nhiều trang phục và phụ kiện khác mang đến phong cách thời trang riêng cho bạn nữ.",
    // image: "https://image.yes24.vn/Upload/ProductImage/anhduong201605/1914666_L.jpg?width=550&height=550",
    image: "./images/bs1.png",

    price: 300000,
    total: 1,
  },
];

let promotionCode = {
  A: 0.4,
  B: 0.3,
  C: 0.2,
  D: 0.1,
};
const numberFormater = new Intl.NumberFormat("de-DE");
const productsElement = document.querySelector(".products");

const promotionElement = document.querySelector(".promotion");
const summaryElement = document.querySelector(".summary");
const totalProductsElement = document.querySelector(".count");
const subTotalElement = document.querySelector(".subtotal");
const btnElement = document.querySelector(".promotion button");
const promoCodeElement = document.querySelector("#promo-code");
const summaryUlElement = document.querySelector(".summary ul");
const inputCodeElement = document.getElementById("promo-code");
const discountElement = document.querySelector(".discount.hide");
let discountRate = 0;
const renderProduct = (arr) => {
  //B1: Xóa hết nội dung trước khi render
  productsElement.innerHTML = "";

  // Update tong so luong khi thay doi giao dien
  updateTotalProduct(products);
  //Trường hợp mảng rỗng
  if (arr.length == 0) {
    productsElement.innerHTML = "<li>Không có sản phẩm nào trong danh mục</li>";
    promotionElement.style.display = "none";
    summaryElement.style.display = "none";
    totalProductsElement.style.display = "none";
    return;
  }

  for (let i = 0; i < arr.length; i++) {
    const t = arr[i];
    // Clear nội dung
    productsElement.innerHTML += `
        <li class="row">
                    <div class="col left">
                        <div class="thumbnail">
                            <a href="#">
                                <img src= ${
                                  t.image
                                } alt="Áo kiểu nữ cam đất phối cổ trắng dập ly">
                            </a>
                        </div>
                        <div class="detail">
                            <div class="name"><a href="#">${t.name}</a></div>
                            <div class="description">
                                ${t.description}
                            </div>
                            <div class="price">${numberFormater.format(
                              t.price
                            )} VND</div>
                        </div>
                    </div>
                    <div class="col right">
                        <div class="quantity" onchange="changeTotalProduct(${
                          t.id
                        }, event)">
                            <input type="number"  class="quantity" value="${
                              t.total
                            }">
                        </div>
    
                        <div class="remove">
                            <span class="close" onclick="deleteProduct(${
                              t.id
                            })">
                                <i class="fa fa-times" aria-hidden="true"></i>
                            </span>
                        </div>
                    </div>
        </li>   
        `;
  }
  updateTotalMoney(products);
};
// Xóa sản phẩm
const deleteProduct = (id) => {
    for (let i = 0; i < products.length; i++) {
        if (products[i].id == id) {
            products.splice(i, 1);
        }
    }
    renderProduct(products)
}
// Cập nhật số lượng sản phẩm
const updateTotalProduct = (arr) => {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        count += products[i].total;
    }
    totalProductsElement.innerHTML = `<span class="count">${count} items in the bag</span>`
    
}
// Thay đổi số lượng của item
const changeTotalProduct = (id, event) => {
    // Lấy giá trị trong ô input dựa vào biến event trong hàm xử lý sự kiện
    let inputQuantityValue = parseInt(event.target.value);
    console.log(inputQuantityValue)
    // Duyệt mảng products để tìm sản phẩm thay đổi
    for (let i = 0; i < products.length; i++) {
        if (products[i].id == id) {
            products[i].total = inputQuantityValue;
        }
    }
    // Render lại giao diện sau khi xóa
    renderProduct(products)
}
// Tính tổng tiền

const updateTotalMoney = (arr) => {
    // Tính tổng tiền subtotal
    // subtotal = Số lượng * đơn giá
    let subTotal = 0;
    for (let i = 0; i < arr.length; i++) {
        subTotal += products[i].total * products[i].price;
    }

    // Tính thuế giá trị gia tăng
    // VAT = 10% của subtotal
    let vatTotal = 0;
    for (let i = 0; i < arr.length; i++) {
        vatTotal = 0.1 * subTotal;
    }

    // Kiểm tra xem mã giảm giá có chính xác hay không
    // Nếu có => discount = subtotal * (% mã giảm giá)
    // Nếu không => discount = 0
    // Ẩn hiện class "hide" nếu discount chính xác hoặc không
    // let discountRate = getDiscountRate();
    let discountTotal = discountRate * subTotal;
    // Tính tổng tiền phải trả
    // total = subtotal + VAT - discount
    let totalMoney = subTotal + vatTotal - discountTotal;

    let hideClass = discountRate == 0 ? " hide" : "";

    // Cập nhật lên trên giao diện
    summaryUlElement.innerHTML = "";

    console.log (summaryUlElement)
    summaryUlElement.innerHTML += `
    <li class="subtotal">Subtotal <span>${numberFormater.format(subTotal)} VND</span></li>
    <li class="vat">VAT<span>${numberFormater.format(vatTotal)} VND</span></li>
    <li class="discount${hideClass}">
        Discount<span>- ${numberFormater.format(discountTotal)} VND</span>
    </li>
    <li class="total">Total <span>${numberFormater.format(totalMoney)} VND</span></li>
    `
}




//-------------------------
const main = () => {
    renderProduct(products)
}

main()
