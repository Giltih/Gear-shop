renderProducts(products);

const addedProducts = [];

// let itemDiscript, itemPrice;
function renderProducts(allProducts) {
  // Get container to append products to
  const container = document.querySelector(".products");

  // Iterate all products
  for (let i = 0; i < allProducts.length; i++) {
    // Each product data
    const productData = allProducts[i];

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
    const btn = createHtmlElement(
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
    newProduct.appendChild(btn);

    // cart.appendChild(cart);

    // Append element in line 26 to main container (line 18)
    container.appendChild(newProduct);

    btn.onclick = function () {
      const itemPrice = document.createElement("li");
      itemPrice.classList.add("itemPrice");
      itemPrice.innerHTML = productData.price;

      const cart = document.querySelector(".cart");
      cart.appendChild(itemPrice);
      cart.appendChild(btnRemove);

      const itemDiscript = document.createElement("li");
      itemDiscript.classList.add("description");
      itemDiscript.innerHTML = productData.description;
      cart.appendChild(itemDiscript);

      onProductAdded(productData);
    };

    btnRemove.onclick = function () {
      const itemPrice = document.querySelector("li");
      const itemDiscript = document.querySelector("li");

      itemPrice.remove();
      itemDiscript.remove();
    }
  }

  function onProductAdded(product) {
    addedProducts.push(product);

    let sum = 0;

    for (let index = 0; index < addedProducts.length; index++) {
      const product = addedProducts[index];
      sum += product.price;
    }

    const sumElement = document.querySelector(".sum");
    sumElement.innerHTML = sum;
  }

  // Generic method to create HTML element
  function createHtmlElement(tagName, className, attributeName, value) {
    const element = document.createElement(tagName);
    element.className = className;
    element[attributeName] = value;
    return element;
  }
}
//add discription to price in cart
// add a remove button for item in cart
// remove item from cart
// remove from sum
