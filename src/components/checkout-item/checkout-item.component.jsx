import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import './checkout-item.styles.scss';

const CheckoutItem = ({ cartItem }) => {
    const { name, price, quantity, imageUrl } = cartItem;
    const { removeItemFromCart, addQuantity } = useContext(CartContext);

    return (
        <div className="item-container">
            <img src={imageUrl} alt={name} />
            <div className="item-details">
                <span className="name">{name}</span>
                <div className="quantity-container">
                    <span className="click" onClick={() => addQuantity(cartItem)}>
                        +
                    </span>
                    <span className="quantity">{quantity}</span>
                    <span className="click" onClick={() => addQuantity(cartItem, -1)}>
                        -
                    </span>
                </div>
                <span className="price">{price}</span>
                <span className="click" onClick={() => removeItemFromCart(cartItem)}>
                    X
                </span>
            </div>
        </div>
    );
};

export default CheckoutItem;
