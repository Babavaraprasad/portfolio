import styles from '../styles/Card.module.scss';

export default function ProjectCard({ 
  title, 
  description,
  link,
  width = '250px',
  height = '200px',
  showText = true,
  showDescription = true,
  showLink = true,
  overflow= false
}
){
  return (
    <section className={styles.card} style={{width, height, overflow}}>
      {showText && <h3>{title}</h3>}
      {showDescription && <p>{description}</p>}
      {showLink && link && <a href={link} target="_blank" rel="noopener noreferrer">View Project</a>}
    </section>
  );
}
