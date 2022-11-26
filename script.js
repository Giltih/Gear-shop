renderProducts(products);

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

    // Append all data elements to the element in line 26
    newProduct.appendChild(name);
    newProduct.appendChild(description);
    newProduct.appendChild(image);
    newProduct.appendChild(price);
    // Append element in line 26 to main container (line 18)
    container.appendChild(newProduct);
  }
}

// Generic method to create HTML element
function createHtmlElement(tagName, className, attributeName, value) {
  const element = document.createElement(tagName);
  element.className = className;
  element[attributeName] = value;
  return element;
}
