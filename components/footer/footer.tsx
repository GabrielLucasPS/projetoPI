import Link from 'next/link';
import s from './footer.module.css';

export const Footer = () => {
    return (
        <div className={s.footer}>
            <div className={s.container}>
                <div className={s.info}>
                    <div className={s.infoTitle}>
                        <h3>SID LOCACOES</h3>
                    </div>
                    <ul>
                        <Link href="">Sobre a empresa</Link>
                        <Link href="">Home</Link>
                    </ul>
                </div >
                <div className={s.info}>
                    <div className={s.infoTitle}>
                        <h3>PRODUTOS</h3>
                    </div>
                    <ul>
                        <Link href="">Catálogo de rodutos</Link>
                        <Link href="">Eventos</Link>
                    </ul>
                </div>
                <div className={s.infoSocials}>
                    <div className={s.infoTitle}>
                        <h3>NOSSAS REDES SOCIAIS</h3>
                    </div>
                    <div className={s.socials}>
                        <Link href={""} className={s.icon} > <img className={s.face} src="./assets/faceIcon.png" alt="" /></Link>
                        <Link href={""} className={s.icon} > <img className={s.insta} src="./assets/instaIcon.png" alt="" /></Link>
                        <Link href={""} className={s.icon} > <img className={s.whats} src="./assets/WhatsIcon.png" alt="" /></Link>
                    </div>

                </div>
            </div>
        </div>

    );
}

export default Footer;