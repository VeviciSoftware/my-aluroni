import styles from './Footer.module.scss';
import logo from '../../assets/logo.svg'; // Note que a importação agora é uma variável comum

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <img src={logo} alt="Logo" /> {/* Usando a tag img para exibir o SVG */}
        </footer>
    );
}