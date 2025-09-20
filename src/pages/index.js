import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProfileSection from '../components/ProfileSection';
import Card from '../components/Card';
import styles from '../styles/Home.module.css';

export default function Home() {
  const projects = [
    { title: 'ATM web application', description: 'Distribution of currency notes & coins based on User input amount', link: 'https://github.com/Babavaraprasad/July_Enalyzer_project' },
    { title: 'Thesis', description: 'An Emprical Research conducted at Bispebjerg Hospital in collaboration with Center for IT and Medical Technology (CIMT), Region Hovedstaden', link: 'https://github.com/Babavaraprasad/Thesis_2023' },
    { title: 'Chat Application', description: 'Developed chat application to ease the connection process for students based on courses, skills at various universities in Denmark. Also applied design thinking principles for designing prototype', link: 'https://github.com/Babavaraprasad/Group5_TechnicalInteractionDesign' },
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
              <Card key={index} {...project} />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
