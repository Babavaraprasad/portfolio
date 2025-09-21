import styles from '../styles/ProfileSection.module.scss';
import Image from 'next/image';

export default function ProfileSection({text, tagA, tagB, tagC}) {
const name = text ? text : 'Hi, Im Babavaraprasad Reddy Pingili';
const tagLeft = tagA ? tagA : "Frontend Developer";
const tagCenter = tagB ? tagB : "React & C# Enthusiast";
const tagRight =  tagC ? tagC : "Full stack Developer";
  return (
    <section className={styles.profileSection}>
        <Image
        src='/Baba_2.jpg'
        width={350}
        height={400}
        alt='No Profile'
        loading='lazy'
        >
        </Image>
      <h1>{name}</h1>
      <p> {tagLeft}| {tagCenter} | {tagRight} </p>
    </section>
  );
}
