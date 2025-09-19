import styles from '../styles/Navbar.module.scss';

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <h2>My Portfolio</h2>
      <div>
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/projects">Projects</a>
      </div>
    </nav>
  );
}
