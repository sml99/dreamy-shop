import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import './checkout.styles.scss';

const Checkout = () => {
    const { cartItems } = useContext(CartContext);
    console.log(cartItems);
    return (
        <div>
            <div>CHECKOUT MOTHER FUCKER</div>
            <div className="cart-items-container"></div>
            {cartItems && cartItems.map((item) => <CheckoutItem key={item.id} cartItem={item} />)}
        </div>
    );
};

export default Checkout;
