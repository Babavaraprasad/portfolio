import Card from "../components/Card";
import projects from "../data/projects";
import styles from "../styles/ProfileSection.module.scss";

const projectOnClick =((link)=>{
    console.log(`this is link: ${link}`);
//<a href={link} target="_blank" rel="noopener noreferrer"></a>
window.open(link, "_blank", "noopener,noreferrer"); 
})
export default function Projects() {
  return (
    <div className={styles.projectSection}>
      {projects.map((project, index) => (
        <Card 
        key={index}
        width="100%"
        height = ""
        {...project}
        onClick={()=> projectOnClick(project.link)}
        />
      ))}
      </div>
  );
}
