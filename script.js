const fetchData = async () => {
  try {
    let response = await fetch("https://fakestoreapi.com/products", {
      method: "GET",
    });
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    let data = await response.json();
    const container = document.getElementById("product-container");
    data.forEach((product) => {
      const productContainer = document.createElement("div");
      productContainer.classList.add("product");

      const productImage = document.createElement("img");
      productImage.src = product.image;
      productContainer.appendChild(productImage);

      const productDetails = document.createElement("div");
      productDetails.classList.add("product-details");

      const productTitle = document.createElement("h3");
      productTitle.classList.add("product-title");
      productTitle.textContent = product.title;
      productDetails.appendChild(productTitle);

      const productDescription = document.createElement("p");
      productDescription.textContent = product.description;
      productDetails.appendChild(productDescription);

      const productPrice = document.createElement("p");
      productPrice.classList.add("product-price");
      productPrice.textContent = `Price: $${product.price}`;
      productDetails.appendChild(productPrice);

      const productRating = document.createElement("p");
      productRating.classList.add("product-rating");
      productRating.textContent = `Rating: ${product.rating.rate} (${product.rating.count} reviews)`;
      productDetails.appendChild(productRating);

      productContainer.appendChild(productDetails);

      container.appendChild(productContainer);
    });
  } catch (error) {
    console.log("Error fetching data:", error);
  }
};

fetchData();
