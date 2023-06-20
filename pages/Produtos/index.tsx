import ProductItem from '@/components/product';
import { useShoppingCart } from '@/context/ShoppingCartContext';
import styles from '@/styles/products.module.css';

import { Products, Materiais, Bebidas, Moveis, Decoracao } from '@/utils/Products';
import Head from 'next/head';
import Router from 'next/router';
import { useState, useEffect } from 'react'


const Produtos = () => {
    const { closeCart } = useShoppingCart();

    const [Produtos, setProdutos] = useState(Products);


    return (
        <div>
            <Head>
                <title>Produtos</title>
                <meta name="viewport" content="width=device-width,minimum-scale=1,initial-scale=1" />
                <link rel="icon" type="image/png" sizes="350x350" href="/assets/favicon.png" />
            </Head>
            <main className={styles.container}
                onClick={closeCart}
            >
                <div className={styles.menu}>
                    <ul>
                        <div className={styles.categoryLabel} onClick={() => setProdutos(Products)}>Todos os Produtos</div>
                        <div className={styles.categoryLabel} onClick={() => setProdutos(Materiais)}>Materiais</div>
                        <div className={styles.categoryLabel} onClick={() => setProdutos(Bebidas)}>Bebidas</div>
                        <div className={styles.categoryLabel} onClick={() => setProdutos(Moveis)}>Móveis</div>
                        <div className={styles.categoryLabel} onClick={() => setProdutos(Decoracao)}>Decorações</div>
                    </ul>
                </div>
                <div className={styles.content}>
                    <div className={styles.products}>
                        {Produtos.map((item, index) => (
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