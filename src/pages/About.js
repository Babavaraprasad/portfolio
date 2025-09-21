import styles from "../styles/ProfileSection.module.scss";
import ProfileSection from "@/components/ProfileSection";
import Card from "@/components/Card";

export default function About() {
  const myData = {
    name: "Babavaraprasad Reddy Pingili",
    tagA: "M.S.c Software Design at ITU, Denmark",
    tagB: "Full stack Developer",
    tagC: "Honest & Good team player",
    description: (
      <>
    <i style={{display:"block", marginBottom:"2rem" }}>
      I'm Baba, a master's graduate from IT University of Copenhagen in
      software design and development, specialized in Technical
      Interaction Design. By God's grace, pursuing my master's in Denmark
      has had a profoundly good effect on my life. Throughout my studies,
      I have acquired life skills such as Time Management, Team
      management, Public Speaking, Dealing with tough situations and
      bringing the best out, Communication and Collaboration,
      Presentations, and Documentation.
    </i>
    <i style={{display:"block", marginBottom:"2rem" }}>
      I'm interested in applying my knowledge and shaping my career
      towards technology that makes human lives digitalized and
      sustainable, with the responsibility of leading an organisation 21
      years down the line.
    </i>
    <i style={{ display:"block", marginBottom:"2rem" }}>
      In my Master's at ITU, I was specialized in Technical Interaction
      design learning React, Typescript, node.js and Java for backend. My
      research project is about empirical research on online shopping and
      my thesis included qualitative research and building a mobile user
      interface prototype as results. Post graduation, I worked with
      Enalyzer, a Danish firm focused on quantitative market research
      providing surveys for customers and generating survey reports to
      help businesses in decision making.
    </i>
    <i style={{ display:"block", marginBottom:"2rem"}}>
      Being a professional Software Developer with 5 years of experience,
      I enjoy writing clean code following industry standards and
      maintaining consistent build quality. My biggest strength is
      concentrating on writing easily readable code, delivering products
      with optimal performance, bug-free, and on time. I also make sure to
      conduct several testing techniques, such as Unit Testing, Manual
      Testing, Regression Testing, and Smoke Testing to assure accuracy of
      the developed software.
    </i>
</>

    ),
  };
  return (
    <>
      <div className={styles.AboutSection}>
        <ProfileSection
          text={myData.name}
          tagA={myData.tagA}
          tagB={myData.tagB}
          tagC={myData.tagC}
        />
        <Card
          width={"100%"}
          height={""}
          description={myData.description}
          showLink={false}
          overflow={true}
        />
      </div>
    </>
  );
}
