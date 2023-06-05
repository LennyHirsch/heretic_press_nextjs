import styles from '../../../styles/character.module.scss';
import Navbar from '../../../components/navbar';
import Image from 'next/image';

export default function Character() {
    return (
        <body>
            <Navbar active='1'></Navbar>
                <main className={styles.main}>
                    <CharacterCard
                        img={'/images/elf1.png'}
                        alt='Elf'
                        name='Elfina'
                        gender='Female'
                        race='Elf'
                        charClass='Sorcerer'
                        level='5'
                    ></CharacterCard>
                    <div className={styles.abilitiesContainer}>
                        <AbilityCard ability='str' value='18' proficiency='true'></AbilityCard>
                        <AbilityCard ability='dex' value='12' proficiency='true'></AbilityCard>
                        <AbilityCard ability='con' value='8' proficiency='false'></AbilityCard>
                        <AbilityCard ability='wis' value='10' proficiency='true'></AbilityCard>
                        <AbilityCard ability='int' value='14' proficiency='false'></AbilityCard>
                        <AbilityCard ability='cha' value='15' proficiency='false'></AbilityCard>
                    </div>
                </main>
        </body>
    );
}

function CharacterCard({ img, alt, name, gender, race, charClass, level}:any) {
    return (
        <div className={`${styles.characterCard} ${styles.card}`}>
            <Image className={styles.characterPic}
                src={img}
                width={100}
                height={100}
                alt={alt}
            />
            <h3>{name}</h3>
            <p>{gender} {race} {charClass}</p>
            <p>Level {level}</p>
        </div>
    );
}

function AbilityCard({ ability, value, proficiency}:any) {
    function getModifier(ability:number):number {
        return Math.floor((ability-10)/2)
    };

    return (
        <div className={ `${styles.abilityCard}`}>
            <div className={ `${styles.ability} ${styles.card}`}>
                <h6>{ ability.toUpperCase() }</h6>
                <h2 className={proficiency === 'true' ? `${styles.glow}` : ''}>{ getModifier(value) }</h2>
                <h3>{value}</h3>
            </div>
            <div className={ `${styles.save} ${styles.card}`}>
                <h3 className={proficiency === 'true' ? `${styles.glow}` : ''}>{proficiency === 'true' ? '⬤' : '◯'}</h3>
            </div>
        </div>
    );
}