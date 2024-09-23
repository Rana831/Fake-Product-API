const contSpan = document.getElementById("show");
var url = "https://fakestoreapi.com/products";
fetch(url)
  .then(response => response.json())
  .then(data => {
    data.forEach(product => {
      const productSpan = document.createElement("span");
      productSpan.className = "productStyle";
      productSpan.innerHTML = `
        <img src="${product.image}">
        <h2>${product.title}</h2>
        <p>Price: ${product.price}</p>
        <p>Rating: ${product.rating.rate}</p>
        <p>Category: ${product.category}</p>`;
      contSpan.appendChild(productSpan);
    });
  });
