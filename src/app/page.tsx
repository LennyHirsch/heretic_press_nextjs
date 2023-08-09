import styles from './page.module.scss';
import Navbar from '../../components/navbar';
import Card from '../../components/card';

export default function Home() {
  return (
    <body>
      <Navbar active='0'></Navbar>
      <main className={styles.main}>
        <Card src='/images/laughingSkull.jpg' alt='Elf' name='Heretic' description='
          My designs are hand-printed by myself on Awagami Bunkoshi Select paper. This paper is a fine Japanese paper with
          a weight of 70gsm made of 30% Kozo and 70% Alpha Cellulose. It is an extremely high-quality paper produced especially
          for printmaking with a smooth finish and a subtle off-white colour.'
          href={'/character'}></Card>
        <Card src='/images/orc1.webp' alt='Orc' name='Orcc' description='He orc' href={'/character'}></Card>
        <Card src='/images/dwarf1.jpg' alt='Dwarf' name='Dworf' description='Rock and stone' href={'/character'}></Card>
      </main>
    </body>
  )
}
