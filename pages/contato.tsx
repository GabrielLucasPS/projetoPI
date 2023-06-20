import Head from 'next/head';
import styles from '../styles/contatos.module.css';

export const Contato = () => {
    return (
        <div className={styles.container}>
            <Head>
                <title>Contato</title>
                <meta name="viewport" content="width=device-width,minimum-scale=1,initial-scale=1" />
                <link rel="icon" type="image/png" sizes="350x350" href="/assets/favicon.png" />
            </Head>
            <div className={styles.contato}>

                <div className={styles.contatoinfo}>

                    <div className={styles.infotop}>
                        <div className={styles.infobox}>
                            <h2>Local</h2>
                            <a target="_blank" href="https://www.google.com/maps/place/Sid+Loca%C3%A7%C3%B5es+-+Bebidas+-+Disk+Bebidas+-+Patos+de+Minas/@-18.583554,-46.5147,15z/data=!4m2!3m1!1s0x0:0x9bf6f84661960e95?sa=X&ved=2ahUKEwiXxsqDqtL_AhVRLrkGHaNFAe8Q_BJ6BAhTEAg"><img src="./assets/mapa.png" alt="" /></a>
                        </div>
                        <div className={styles.infobox}>
                            <h2>Endereço</h2>
                            <p className={styles.email}>Endereço: R. Maj. Gote, 121 - Centro, Patos de Minas - MG, 38700-001</p>
                        </div>
                        <div className={styles.infobox}>
                            <h2>Telefone</h2>
                            <p className={styles.telefone}>(34) 3822-0918</p>
                        </div>
                    </div>
                    <div className={styles.infobottom}>
                        <div>
                            <h2>Quem Somos?</h2>
                            <p>
                                Bem-vindo à nossa empresa de venda e locações para festas! Estamos aqui para tornar sua festa especial e sem complicações. Com uma ampla seleção de produtos e serviços disponíveis, oferecemos tudo o que você precisa para criar momentos inesquecíveis. Estamos prontos para transformar sua celebração em um evento extraordinário. Conte conosco para tornar seu sonho realidade. Entre em contato hoje mesmo e deixe-nos cuidar dos detalhes para você.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contato;