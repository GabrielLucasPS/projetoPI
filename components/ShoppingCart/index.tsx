import { useShoppingCart } from '@/context/ShoppingCartContext';
import CartItem from '../cartItem';
import styles from './styles.module.css';
import { Products } from '@/utils/Products';
import { formatCurrency } from '@/utils/formatCurrency';

type ShoppingCartProps = {
    isOpen: boolean;
}

export const ShoppingCart = ({ isOpen }: ShoppingCartProps) => {
    const { cartItems, closeCart, increaseCartQuantity, decreaseCartQuantity, getItemQuantity } = useShoppingCart();

    const quantity = 4;

    return (
        <aside className={styles.cartContainer}
            style={isOpen ? { top: 0 } : {}}
        >
            <div className={styles.cartHeader}>
                <div className={styles.cartBackButton}
                    onClick={closeCart}
                >
                    <div className={styles.backButtonImg}></div>
                </div>
                <div className={styles.cartTitle}>Carrinho</div>
            </div>
            <div className={styles.cartContent}>
                <div className={styles.cartItems}>

                    {cartItems.map(item => (
                        <CartItem key={item.id} {...item} />
                    ))}
                    <div className={styles.Total}>

                        Total:
                        {formatCurrency(cartItems.reduce((total, cartItem) => {
                            const item = Products.find(i => i.id === cartItem.id)
                            return total + (item?.price || 0) * cartItem.quantity
                        }, 0))}
                    </div>
                </div>
            </div>
        </aside>
    );
}


export default ShoppingCart;