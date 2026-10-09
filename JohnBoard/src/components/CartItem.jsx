import './CartItem.css';

function CartItem({ item, onRemove }) {
  return (
    <div className="cart-item">
      <div className="cart-item-info">
        <h3>{item.name}</h3>
        <p className="cart-item-price">${item.price}</p>
      </div>
      <button className="remove-btn" onClick={onRemove}>
        Remove
      </button>
    </div>
  );
}

export default CartItem;