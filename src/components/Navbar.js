import styles from '../styles/Navbar.module.scss';
import About from '@/pages/About';

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <h2>My Portfolio</h2>
      <div>
        <a href="About">About</a>
        <a href="/projects">Projects</a>
      </div>
    </nav>
  );
}
