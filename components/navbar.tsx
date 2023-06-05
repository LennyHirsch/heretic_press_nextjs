import styles from '../styles/navbar.module.scss';
import Link from 'next/link';

export default function Navbar( { active }:any) {
    const content = ['Home', 'About', 'Contact'];
    return (
        <div className={styles.navbar}>
                <Navitem src='#' content={content[0]} active={active == '0' ? true : false}></Navitem>
                <Navitem src='#' content={content[1]} active={active == '1' ? true : false}></Navitem>
                <Navitem src='#' content={content[2]} active={active == '2' ? true : false}></Navitem>
        </div>
    );
}

function Navitem( { src, content, active}: any) {
    return (
        <Link className={active ? styles.active : styles.navitem} href={src}>{content}</Link>
    )
}