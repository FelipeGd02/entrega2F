// Archivo productDetail.js
document.addEventListener("DOMContentLoaded", () => {
    const params = new URLSearchParams(window.location.search);
    const productId = params.get("id");
  
    if (!productId) {
      document.body.innerHTML = "<p>Producto no encontrado.</p>";
      return;
    }
  
    // Cargar productos desde el JSON
    fetch("data/products.json")
      .then(response => {
        if (!response.ok) {
          throw new Error("Error al cargar los productos");
        }
        return response.json();
      })
      .then(products => {
        const product = products.find(p => p.id === parseInt(productId));
  
        if (!product) {
          document.body.innerHTML = "<p>Producto no encontrado.</p>";
          return;
        }
  
        // Actualizar la página con los detalles del producto
        document.getElementById("product-title").textContent = product.name;
        document.getElementById("product-image").src = product.image;
        document.getElementById("product-brand").textContent = product.brand;
        document.getElementById("product-rating").textContent = product.rating;
        document.getElementById("product-price").textContent = `$${product.price}`;
        document.getElementById("product-variants").textContent = `${product.variants} Variants`;
        document.getElementById("product-description").textContent = product.description;
      })
      .catch(error => {
        console.error("Error:", error);
        document.body.innerHTML = "<p>Error al cargar los detalles del producto.</p>";
      });
  });
  