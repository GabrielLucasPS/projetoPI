import { useShoppingCart } from '@/context/ShoppingCartContext';
import CartItem from '../cartItem';
import styles from './checkout.module.css';
import { Products } from '@/utils/Products';
import { formatCurrency } from '@/utils/formatCurrency';
import { useState } from 'react';

type ShoppingCartProps = {
    Checkout: boolean;
}

export const CheckoutComp = ({ Checkout }: ShoppingCartProps) => {
    const { cartItems, closeCart, removeAll } = useShoppingCart();


    const quantity = 4;

    return (
        <div>
            <div className={styles.Finalize}
                style={Checkout ? { display: 'none' } : { display: 'flex' }}
            >
                <div className={styles.FinalizeBox}>
                    <h3 className={styles.FinalizeTitle}>Sua compra foi finalizada, obrigado por escolher a SID Locações.</h3>
                    <a href="/" className={styles.FinalizeBtn}>Voltar ao site</a>
                </div>
            </div>
        </div>
    );
}


export default CheckoutComp;