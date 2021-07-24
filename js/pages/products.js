// Main function, auto executed at load time
(async () => {
  const productId = getProductId();
  const productData = await getProductData(productId);
  hydratePage(productData);
})();

function getProductId() {
  return new URL(window.location.href).searchParams.get("id");
}

function getProductData(productId) {
  return fetch(`${apiUrl}/api/cameras/${productId}`)
    .catch((error) => {
      console.log(error);
    })
    .then((httpBodyResponse) => httpBodyResponse.json())
    .then((productData) => productData);
}

function hydratePage(product) {
  // Hydrate page with data
  document.getElementById("productImage").src = product.imageUrl;
  document.getElementById("productName").textContent = product.name;
  document.getElementById("productPrice").textContent = `${
    product.price / 100
  }.00 €`;
  document.getElementById("productDescription").textContent =
    product.description;
  document.getElementById(
    "productLenses"
  ).style.gridTemplateColumns = `repeat(${product.lenses.length}, 1fr)`;

  for (let i = 0; i < product.lenses.length; i++) {
    let option = document.createElement("option");
    option.innerText = product.lenses[i];
    productLense.appendChild(option);
  }

  // Add event listeners on button
  document.getElementById("addToCart").onclick = (event) => {
    event.preventDefault();
    Cart.addProduct(product);
    redirectToShoppingCart(product.name);
  };
}

function redirectToShoppingCart(productName) {
  window.location.href = `${window.location.origin}/cart.html?lastAddedProductName=${productName}`;
}
