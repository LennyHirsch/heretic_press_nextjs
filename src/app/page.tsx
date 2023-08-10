import styles from './page.module.scss';
import Navbar from '../../components/navbar';
import Card from '../../components/card';

export default function Home() {
  return (
    <body>
      <Navbar active='0'></Navbar>
      <main className={styles.main}>
        <Card src='/images/aceOfCups.jpg' alt='Ace of Cups print' name='About' description="
          I am an artist and printmaker based in Glasgow, designing and printing artworks often inspired by the occult and by gothic imagery.
          I have always had a fascination with the occult, with witchcraft, with the more taboo side of religion and spirituality, and I incorporate these fascinations into my artwork.
          The name 'Heretic's Press' came about due to this fascination. Throughout time, the heretic has always been a character on the edges of society. A witch, a scientist, a believer
          in an another deity; the heretic has always been painted as an outcast, a corrupted soul, an immoral being regardless of whether or not this was truly the case.
          My artwork seeks to explore this contrast between the heretic's treatment and their true character." href={'/character'} align='1'></Card>
        <Card src='/images/laughingSkull.jpg' align='0' alt='Laughing skull print' name='Heretic' description='
          My designs are hand-printed by myself on Awagami Bunkoshi Select paper. This paper is a fine Japanese paper with
          a weight of 70gsm made of 30% Kozo and 70% Alpha Cellulose. It is an extremely high-quality paper produced especially
          for printmaking with a smooth finish and a subtle off-white colour.'
          href={'/character'}></Card>
        <Card src='/images/desecratedHeart.jpg' alt='Desecrated Heart print' name='Disclaimer' description="Please not that each print is unique. Prints may have slight variation
          from the design pictured. In prints with several colours, you may find that the colours are slightly misaligned (see left). This is a natural part of the printing process,
          and often adds character to each individual piece. Your print will be unlike any other! Rest assured that I check every print for quality; I will never
          sell a print that doesn't satisfy my high standards." href={'/character'} align='0'></Card>
      </main>
    </body>
  )
}
