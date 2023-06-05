import { useShoppingCart } from '@/context/ShoppingCartContext';
import { formatCurrency } from '@/utils/formatCurrency';
import { Products } from '@/utils/Products';
import styles from './styles.module.css';

import storeItems from "../../data/items.json";

type CartItemProps = {
    id: number,
    quantity: number
}

export const CartItem = ({ id, quantity }: CartItemProps) => {
    const { removeFromCart, increaseCartQuantity, decreaseCartQuantity, getItemQuantity } = useShoppingCart();

    const item = storeItems.find(item => item.id === id)
    if (item == null) return null

    let total = item.price * quantity;

    return (
        <div className={styles.cartItemConteiner}>
            <div className={styles.cartItem}>
                <div className={styles.productImg}>
                    <img src="./assets/prato.png" alt="" />
                </div>
                <div className={styles.productInfo}>
                    <h3 className={styles.productTitle}>
                        <div className={styles.Title}>{item.title}</div>
                    </h3>
                    <div className={styles.priceInfo}>
                        <div className={styles.quantity}>x{quantity}</div>
                        <div className={styles.price}>{formatCurrency(total)}</div>
                    </div>
                </div>
            </div>
            <div className={styles.RemoveButton}
                onClick={() => removeFromCart(item.id)}
            >
                Remover do carrinho
            </div>
        </div>
    );
}

export default CartItem;