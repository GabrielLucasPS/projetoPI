import ProductModal from '../productModal';
import styles from './styles.module.css';
import { useEffect, useState } from 'react';
import { useShoppingCart } from '@/context/ShoppingCartContext';

type Props = {
    id: number;
    image: string;
    price: number;
    title: string;
    description: string;
    discount?: number;
}
export const ProductItem = ({ image, price, title, description, id }: Props) => {


    const [open, setOpen] = useState(false)

    const handleModal = () => {
        setOpen(!open)
    }

    return (
        <div>
            <div className={styles.containerProductItem}
                onClick={handleModal}
            >
                <div className={styles.productItem}>
                    <div className={styles.imageBox}>
                        <img src={image} />
                    </div>
                    <div className={styles.info}>
                        <h2 className={styles.productName}>{title}</h2>
                        <p className={styles.description}>{description}</p>
                        <div className={styles.price}>
                            <div className={styles.value}>R$ {price}</div>
                            <div className={styles.btn}>COMPRAR</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.Modal}
                style={open ? { display: 'flex' } : { display: 'none' }}
            >
                <div className={styles.CloseModal}
                    onClick={handleModal}
                >
                    X
                </div>
                <ProductModal
                    image={image}
                    price={price}
                    title={title}
                    description={description}
                    open={open}
                    add={handleModal}
                    id={id}
                />
            </div>
        </div >
    );
}

export default ProductItem;