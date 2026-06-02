// src/data/portfolioData.ts

export interface Skill {
  name: string;
  iconUrl: string;
  description: string;
}

export interface Experience {
  role: string;
  company: string;
  date: string;
  details: string[];
}

export interface Project {
  title: string;
  description: string;
  githubUrl: string;
  tech: string[];
  category: 'System' | 'Security' | 'Database' | 'Full-Stack';
}

export const skillsData: Skill[] = [
  { name: 'Java', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg', description: 'Intermediate experience building robust applications.' },
  { name: 'C++', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg', description: 'Object-oriented programming and software architecture.' },
  { name: 'C', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg', description: 'System programming and algorithm design.' },
  { name: 'MySQL', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg', description: 'Database layout, relational schemas, and complex querying.' },
  { name: 'JavaScript', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', description: 'Developing interactive elements and dynamic web views.' },
  { name: 'HTML5/CSS3', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg', description: 'Semantic structuring and fluid, responsive design paradigms.' }
];

export const experiencesData: Experience[] = [
  {
    role: 'Backend Developer (Capstone Project)',
    company: 'E-TIRE System',
    date: 'October 2024 - Present',
    details: [
      'Developing a comprehensive management and tracking infrastructure for vulcanizing shop operations.',
      'Analyzing workflow pain points to engineer clean relational database models.',
      'Implementing scalable backend logic to track real-time inventory lifecycles seamlessly.'
    ]
  },
  {
    role: 'Assistant Student Teacher',
    company: 'SANHS Faculty',
    date: 'September 2018',
    details: [
      'Coordinated with faculty to map out structured technical lesson blocks.',
      'Managed evaluation matrices and schedules to support class progress tracking.'
    ]
  }
];

export const projectsData: Project[] = [
  {
    title: 'FORTUNA QUEST',
    description: 'A logic implementation tool developed in C that maps dynamic system outcomes using randomized number generators.',
    githubUrl: 'https://github.com/Ishkihu/RouletteGame',
    tech: ['C', 'CLI', 'Algorithms'],
    category: 'System'
  },
  {
    title: 'BINARY ENCRYPTION & DECRYPTION',
    description: 'A cryptography-focused C++ engine utilizing low-level data structures to lock and translate stream data securely via external text arrays.',
    githubUrl: 'https://github.com/Ishkihu/BinaryEncryption-Decryption',
    tech: ['C++', 'Security', 'File I/O'],
    category: 'Security'
  },
  {
    title: 'DATABASE LOGIN SYSTEM',
    description: 'An application connecting core MySQL database schemas with a clean Java logic layer to enforce user registration and session checks.',
    githubUrl: 'https://github.com/Ishkihu/LoginSystem-Database',
    tech: ['Java', 'MySQL', 'JDBC'],
    category: 'Database'
  }
];