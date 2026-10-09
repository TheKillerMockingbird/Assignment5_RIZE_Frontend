import CartItem from '../components/CartItem';

function CartPage({ cart, removeFromCart }) {
  const cartTotal = cart.reduce((total, item) => total + item.price, 0);

  return (
    <section className="cart-section">
      <h2>Your Cart ({cart.length} items)</h2>

      {cart.length === 0 ? (
        <p className="empty-cart">Your cart is empty. Add some products!</p>
      ) : (
        <>
          <div className="cart-items">
            {cart.map((item, index) => (
              <CartItem
                key={index}
                item={item}
                onRemove={() => removeFromCart(index)}
              />
            ))}
          </div>

          <div className="cart-total">
            <strong>Total: ${cartTotal.toFixed(2)}</strong>
          </div>
        </>
      )}
    </section>
  );
}

export default CartPage;