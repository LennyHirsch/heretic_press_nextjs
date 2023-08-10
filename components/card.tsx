import styles from '../styles/card.module.scss';
import Image from 'next/image';
import Link from 'next/link';

export default function Card( {src, alt, name, description, href, align}: any ) {
    return (
            <div className={align ? styles.cardleft : styles.cardright}>
                <Image className={styles.profilePic}
                    src={src}
                    width={500}
                    height={500}
                    alt={alt}
                />
                <div className={styles.copy}>
                    <h2 className={styles.title}>{name}</h2>
                    <p className={styles.text}>{description}</p>
                    <Link className={styles.button} href={href}>Click</Link>
                </div>
            </div>
    );
}