import ProductItem from '@/components/product';
import { useShoppingCart } from '@/context/ShoppingCartContext';
import styles from '@/styles/products.module.css';

import { Products } from '@/utils/Products';
import Head from 'next/head';


const Produtos = () => {
    const { closeCart } = useShoppingCart();
    return (
        <div>
            <Head>
                <title>Produtos</title>
            </Head>
            <main className={styles.container}
                onClick={closeCart}
            >
                <div className={styles.menu}>
                    <ul>
                        <li>
                            <div className={styles.categoryLabel}>Bebidas</div>
                            <div className={styles.category}>
                                <span>Cervejas</span>
                                <span>Energetico</span>

                            </div>
                        </li>
                        <li>
                            <div className={styles.categoryLabel}>Móveis</div>
                            <div className={styles.category}>
                                <span>Cadeiras</span>
                                <span>Mesas</span>
                            </div>
                        </li>
                        <li>
                            <div className={styles.categoryLabel}>Decorações</div>
                            <div className={styles.category}>
                                <span>Flores</span>
                                <span>Guardanapo de Tecido</span>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className={styles.content}>
                    <div className={styles.products}>
                        {Products.map((item, index) => (
                            <div key={index} className={styles.product}>
                                <ProductItem
                                    id={item.id}
                                    image={item.image}
                                    price={item.price}
                                    title={item.title}
                                    description={item.description}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Produtos;