import styles from '../styles/ProfileSection.module.scss';
import ProfileSection from '@/components/ProfileSection';
import Image from 'next/image';

export default function About() {
  return (
    <>
    <div className={styles.AboutSection}>
    <ProfileSection text={'Babavaraprasad Reddy Pingili'}/>
    </div>
    </>
  );
}
