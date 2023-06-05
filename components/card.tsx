import styles from '../styles/card.module.scss';
import Image from 'next/image';
import Link from 'next/link';

export default function Card( {src, alt, name, description, href}: any ) {
    return (
            <div className={styles.card}>
                <Image className={styles.profilePic}
                    src={src}
                    width={200}
                    height={200}
                    alt={alt}
                />
                <h2>{name}</h2>
                <p>{description}</p>
                <Link className={styles.button} href={href}>Click</Link>
            </div>
    );
}