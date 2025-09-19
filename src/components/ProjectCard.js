import styles from '../styles/ProjectCard.module.scss';

export default function ProjectCard({ title, description, link }) {
  return (
    <div className={styles.card}>
      <h3>{title}</h3>
      <p>{description}</p>
      <a href={link} target="_blank" rel="noopener noreferrer">View Project</a>
    </div>
  );
}
