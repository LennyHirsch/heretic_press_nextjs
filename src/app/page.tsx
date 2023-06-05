import styles from './page.module.scss';
import Navbar from '../../components/navbar';
import Card from '../../components/card';

export default function Home() {
  return (
    <body>
      <Navbar active='0'></Navbar>
      <main className={styles.main}>
        <Card src='/images/elf1.png' alt='Elf' name='Elfine' description='She do stuff' href={'/character'}></Card>
        <Card src='/images/orc1.webp' alt='Orc' name='Orcc' description='He orc' href={'/character'}></Card>
        <Card src='/images/dwarf1.jpg' alt='Dwarf' name='Dworf' description='Rock and stone' href={'/character'}></Card>
      </main>
    </body>
  )
}
