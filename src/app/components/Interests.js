'use client';
import { useState } from 'react';
import styles from '../styles/Interests.module.css';
import cardStyles from '../styles/Home.module.css';

const interestsData = [
  { 
    title: 'Web Development', 
    subItems: [
      { 
        title: 'Frontend Development', 
        technologies: ['React', 'Vue', 'Angular', 'HTML', 'CSS', 'JavaScript'] 
      },
      { 
        title: 'Backend Development', 
        technologies: ['Node.js', 'Express', 'Django', 'Flask', 'Ruby on Rails', 'Java', 'Spring Boot'] 
      },
      { 
        title: 'Fullstack Development', 
        technologies: ['MEAN Stack', 'MERN Stack', 'LAMP Stack', 'Django + React', 'Spring Boot + Angular'] 
      }
    ] 
  },
  { 
    title: 'Base de Datos', 
    subItems: [
      { 
        title: 'Relacionales', 
        technologies: ['MySQL', 'PostgreSQL', 'Oracle', 'SQL Server'] 
      },
      { 
        title: 'NoSQL', 
        technologies: ['MongoDB', 'Redis', 'Cassandra', 'CouchDB'] 
      }
    ]
  },
  { 
    title: 'DevOps', 
    subItems: [
      { 
        title: 'Herramientas', 
        technologies: ['Docker', 'Kubernetes', 'Jenkins', 'Ansible', 'Terraform', 'Prometheus', 'Grafana'] 
      }
    ]
  }
];

const Interests = () => {
  const [isSectionOpen, setIsSectionOpen] = useState(false);
  const [openIndex, setOpenIndex] = useState(null);
  const [subOpenIndexes, setSubOpenIndexes] = useState({});

  const toggleSection = () => {
    setIsSectionOpen(!isSectionOpen);
  };

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const toggleSubAccordion = (parentIndex, subIndex) => {
    setSubOpenIndexes((prevState) => ({
      ...prevState,
      [parentIndex]: prevState[parentIndex] === subIndex ? null : subIndex,
    }));
  };

  return (
    <section className={`${cardStyles.card}`}>
      <h2 onClick={toggleSection} className={styles.header}>
        Tecnologias
      </h2>
      <div className={`${styles.content} ${isSectionOpen ? styles.open : ''}`}>
        <ul className={styles.list}>
          {interestsData.map((interest, index) => (
            <li key={index} className={styles.item}>
              <div
                className={styles.itemHeader}
                onClick={() => toggleAccordion(index)}
              >
                {interest.title}
              </div>
              <div
                className={`${styles.itemContent} ${
                  openIndex === index ? styles.open : ''
                }`}
              >
                <ul className={styles.subList}>
                  {interest.subItems.map((subItem, subIndex) => (
                    <li key={subIndex} className={styles.subItem}>
                      <div
                        className={styles.subItemHeader}
                        onClick={() => toggleSubAccordion(index, subIndex)}
                      >
                        {subItem.title ? subItem.title : subItem}
                      </div>
                      <div
                        className={`${styles.subItemContent} ${
                          subOpenIndexes[index] === subIndex ? styles.open : ''
                        }`}
                      >
                        {subItem.technologies ? (
                          <ul className={styles.technologiesList}>
                            {subItem.technologies.map((tech, techIndex) => (
                              <li key={techIndex}>{tech}</li>
                            ))}
                          </ul>
                        ) : (
                          <p>Details about {subItem}</p>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Interests;
