renderProducts(products);

const addedProducts = [];

const cart = document.querySelector(".cart .list");
const sumElement = document.querySelector(".sum");

function renderProducts(allProducts) {
  const container = document.querySelector(".products");

  for (let i = 0; i < allProducts.length; i++) {
    renderProduct(container, allProducts[i]);
  }
}

function renderProduct(container, productData) {
  // Create an element for each product
  const newProduct = document.createElement("div");
  newProduct.className = "product";

  // Create element for product name
  const name = createHtmlElement(
    "div",
    "name",
    "innerHTML",
    productData.name
  );

  // Create element for product description
  const description = createHtmlElement(
    "div",
    "description",
    "innerHTML",
    productData.description
  );

  // Create element for product image
  const image = createHtmlElement("img", "image", "src", productData.image);

  //create element for price
  const price = createHtmlElement(
    "div",
    "price",
    "innerHTML",
    productData.price
  );

  const addToCartButton = createHtmlElement(
    "button",
    "add-to-cart-butn",
    "innerHTML",
    "add"
  );

  const btnRemove = createHtmlElement(
    "button",
    "removeProduct",
    "innerHTML",
    "Delete"
  );

  // Append all data elements to the element in line 26
  newProduct.appendChild(name);
  newProduct.appendChild(description);
  newProduct.appendChild(image);
  newProduct.appendChild(price);
  newProduct.appendChild(addToCartButton);

  // cart.appendChild(cart);

  // Append element in line 26 to main container (line 18)
  container.appendChild(newProduct);

  addToCartButton.onclick = function () {
    onAddProduct(productData, btnRemove);
  };

  btnRemove.onclick = function () {
    removeProduct(productData, btnRemove)
  }
}

function removeProduct(product, btnRemove) {
  const index = addedProducts.findIndex((p) => p.id === product.id);
  addedProducts.splice(index, 1);

  cart.innerHTML = '';
  sumElement.innerHTML = '';

  for (let index = 0; index < addedProducts.length; index++) {
    const newProduct = addedProducts[index];
    addProductToCart(newProduct, btnRemove);
  }

  sumElement.innerHTML = sumProductsPrice(addedProducts);
}

function onAddProduct(product, btnRemove) {
  addProductToCart(product, btnRemove)
  addProductToData(product);
}

function addProductToCart(product, btnRemove) {
  const itemPrice = document.createElement("li");
  itemPrice.classList.add("itemPrice");
  itemPrice.innerHTML = product.price;

  cart.appendChild(itemPrice);
  cart.appendChild(btnRemove);

  const itemDiscript = document.createElement("li");
  itemDiscript.classList.add("description");
  itemDiscript.innerHTML = product.description;
  cart.appendChild(itemDiscript);
}

function sumProductsPrice(productsToSum) {
  let sum = 0;

  for (let index = 0; index < productsToSum.length; index++) {
    const product = productsToSum[index];
    sum += product.price;
  }

  return sum;
}

function addProductToData(product) {
  addedProducts.push(product);

  sumElement.innerHTML = sumProductsPrice(addedProducts);
}

// Generic method to create HTML element
function createHtmlElement(tagName, className, attributeName, value) {
  const element = document.createElement(tagName);
  element.className = className;
  element[attributeName] = value;
  return element;
}

