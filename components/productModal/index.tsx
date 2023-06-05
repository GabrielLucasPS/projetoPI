import { useState } from 'react';
import styles from './styles.module.css';
import QuatityButton from '../quantityButton';
import { useShoppingCart } from '@/context/ShoppingCartContext';



type Props = {
    id: number;
    image: string;
    price: number;
    title: string;
    description: string;
    discount?: number;
    open: boolean;
    add: () => void;
}

export const ProductModal = ({ image, price, title, description, open, id, add }: Props) => {
    const { getItemQuantity, increaseCartQuantity, decreaseCartQuantity } = useShoppingCart();
    //const [qt, setQt] = useState(1);

    const quantity = getItemQuantity(id)



    return (
        <div
            style={open ? { display: 'flex' } : { display: 'none' }}
            className={styles.containerModal}>
            <div className={styles.Modal}            >
                <div className={styles.Modalleft}>
                    <img src={image} />
                    <h2 className={styles.ModalproductName}>{title}</h2>
                    <p className={styles.Modaldescription}>{description}</p>
                </div>
                <div className={styles.Modalright}>
                    <div className={styles.Modalprice}>
                        <h2>Preço</h2>
                        <div className={styles.Modalvalue}>R$ {price.toFixed(2)}</div>
                    </div>
                    <h2>Quantidade</h2>
                    <QuatityButton
                        addQt={() => increaseCartQuantity(id)}
                        minusQt={() => decreaseCartQuantity(id)}
                        quantity={quantity}
                    />
                    <div className={styles.Modaltotal}>
                        Total<br />{price * quantity}
                    </div>
                    <div className={styles.ModaladdButton}
                        onClick={add}
                    >
                        Adicionar ao carrinho
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductModal;