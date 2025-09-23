import Card from "../components/Card";
import projects from "../data/projects";
import styles from "../styles/ProfileSection.module.scss";

export default function Projects() {
  return (
    <div className={styles.projectSection}>
      {projects.map((project, index) => (
        <Card 
        key={index}
        width="100%"
        height = ""
        {...project}
        />
      ))}
      </div>
  );
}
