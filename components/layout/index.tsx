import s from './layout.module.css';
import { ReactElement } from 'react';
import Navbar from '../navbar';
import Footer from '../footer/footer';

type Props = {
    children: ReactElement;
}

export const Layout = ({ children }: Props) => {
    return (
        <>
            <header>
                <Navbar />
            </header>
            <main>{children}</main>
            <footer>
                <Footer />
            </footer>
        </>


    );
}

export default Layout;