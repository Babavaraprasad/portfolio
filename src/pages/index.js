import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProfileSection from '../components/ProfileSection';
import ProjectCard from '../components/ProjectCard';
import styles from '../styles/Home.module.css';

export default function Home() {
  const projects = [
    { title: 'ATM web application', description: 'Distribution of currency notes & coins based on User input amount', link: 'https://github.com/Babavaraprasad/July_Enalyzer_project' },
    { title: 'Thesis', description: 'Description for project two', link: '#' },
    { title: 'Research Project', description: 'Description for project three', link: '#' },
  ];

  return (
    <div>
      <Navbar />
      <main className={styles.main}>
        <ProfileSection />
        <section className={styles.projectsSection}>
          <h2>My Projects</h2>
          <div className={styles.projectsGrid}>
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
