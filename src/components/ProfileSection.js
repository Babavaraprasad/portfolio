import styles from '../styles/ProfileSection.module.scss';
import Image from 'next/image';

export default function ProfileSection({text}) {
let name = text ? text : 'Hi, Im Babavaraprasad Reddy Pingili';
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
      <p>Frontend Developer | React & C# Enthusiast | Full stack Developer</p>
    </section>
  );
}
