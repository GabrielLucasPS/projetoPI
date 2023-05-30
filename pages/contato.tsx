import Head from 'next/head';
import styles from '../styles/contatos.module.css';

export const Contato = () => {
    return (
        <div className={styles.container}>
            <Head>
                <title>Contato</title>
            </Head>
            <div className={styles.contato}>

                <div className={styles.contatoinfo}>

                    <div className={styles.infotop}>
                        <div className={styles.infobox}>
                            <h2>Localização</h2>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui doloribus nemo amet natus quae
                                magni excepturi nesciunt odio harum ad et quo, at, dolorum ipsa eum. Eligendi at alias
                                necessitatibus?</p>
                        </div>
                        <div className={styles.infobox}>
                            <h2>Telefone</h2>
                            <p className={styles.telefone}>(34)9999-9999</p>
                        </div>
                        <div className={styles.infobox}>
                            <h2>Email</h2>
                            <p className={styles.email}>SIDlocacao@gmail.com</p>
                        </div>
                    </div>
                    <div className={styles.infobottom}>
                        <div>
                            <h2>Quem Somos?</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, sed laborum? Doloribus
                                voluptatibus natus animi vitae molestias inventore cumque, cupiditate qui accusamus est nam
                                dolor sed, quod consectetur, repellat dolorem.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contato;