// Definimos la clase ProductRenderer
class ProductRenderer {
  constructor(dataUrl, containerSelector) {
    this.dataUrl = dataUrl; // URL del archivo JSON de productos
    this.container = document.querySelector(containerSelector); // Contenedor donde se renderizarán los productos
  }

  // Método para cargar los productos desde el JSON
  async loadProducts() {
    try {
      const response = await fetch(this.dataUrl);
      if (!response.ok) {
        throw new Error("Error al cargar los productos");
      }
      const products = await response.json();
      this.renderProducts(products); // Llamamos al método para renderizar
    } catch (error) {
      console.error("Error:", error);
      this.container.innerHTML = "<p>No se pudieron cargar los productos.</p>";
    }
  }

  // Método para renderizar los productos
  renderProducts(products) {
    products.forEach(product => {
      const productDiv = this.createProductCard(product); // Creamos la tarjeta del producto
      this.container.appendChild(productDiv);
    });
  }

  // Método para crear el HTML de una tarjeta de producto
  createProductCard(product) {
    const productDiv = document.createElement("div");
    productDiv.classList.add("product");

    productDiv.innerHTML = `
      <a href="productDetail.html?id=${product.id}">
        <img src="${product.image}" alt="${product.name}" width="200" height="200" />
        <p>
          ${product.name}
          <br/>
          $${product.price}
        </p>
      </a>
    `;
    return productDiv;
  }
}

// Ejecutar la clase cuando el DOM esté cargado
document.addEventListener("DOMContentLoaded", () => {
  const renderer = new ProductRenderer("data/products.json", ".content");
  renderer.loadProducts();
});
