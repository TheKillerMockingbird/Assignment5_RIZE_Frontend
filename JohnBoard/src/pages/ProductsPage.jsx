import ProductCard from '../components/ProductCard';

function ProductsPage({ products, addToCart }) {
  return (
    <section className="products">
      <h2>Featured Products</h2>
      <div className="product-grid">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={addToCart}
          />
        ))}
      </div>
    </section>
  );
}

export default ProductsPage;