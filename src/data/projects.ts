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
  githubUrl?: string;
  tech: string[];
  // Updated to include 'Academic' and 'All' matching your strict union type
  category: 'Capstone' | 'Academic' | 'Personal' | 'Industry' | 'All';
  award?: string;
}

export const skillsData: Skill[] = [
  { name: 'Laravel', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg', description: 'Developing core MVC applications, middleware, and secure routing architectures.' },
  { name: 'PHP', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg', description: 'Server-side scripting, object-oriented backend programming, and native database abstractions.' },
  { name: 'Node.js', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', description: 'Building scalable asynchronous APIs and fast backend runtime services.' },
  { name: 'PostgreSQL / MySQL', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg', description: 'Database layout, index tuning for large datasets, and relational schemas.' },
  { name: 'Java', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg', description: 'Object-oriented application building and system algorithm design.' },
  { name: 'C++', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg', description: 'Low-level structural logic, memory optimization models, and core object-oriented algorithm execution.' },
  { name: 'HTML5', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg', description: 'Structuring semantic document object models (DOM), accessible layouts, and SEO-friendly web architecture.' },
  { name: 'CSS3', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg', description: 'Crafting responsive layout matrices, custom keyframe animations, and utility-first design overrides.' },
  { name: 'JavaScript', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', description: 'Asynchronous event driving, DOM manipulation, functional ES6+ scripts, and dynamic state tracking.' },
  { name: 'TypeScript', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg', description: 'Implementing strict structural typing, interface contracts, compile-time error catching, and explicit type safety.' },
  { name: 'Linux (Ubuntu)', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg', description: 'Managing environment setups, package deployments, and CLI workflows.' },
  { name: 'VS Code', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg', description: 'Managing advanced workspace debugging workflows, cross-environment staging, and terminal workspace optimization.' },
  { name: 'Flutter', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg', description: 'Understanding the fundamentals of cross-platform UI development using widgets and state management theories.' },
  { name: 'Dart', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg', description: 'Learning basic syntax, object-oriented principles, and reactive programming concepts with streams and futures.' }
];

export const experiencesData: Experience[] = [
  {
    role: 'Full-Stack Developer (OJT Internship)',
    company: 'Dyn Edge Philippines Inc.',
    date: '2026',
    details: [
      'Engineered functional client operations utilizing the Laravel MVC framework.',
      'Optimized database performance by executing strategic SQL Indexing functions for heavy datasets.',
      'Designed and executed legacy data transfer modules to migrate data smoothly into newly deployed systems.',
      'Utilized JavaScript, PHP, and Node.js to write flexible operational components based on client criteria.',
      'Maintained an Ubuntu Linux development ecosystem to streamline staging and package configurations.'
    ]
  },
  {
    role: 'Media Manager & Coordinator',
    company: 'Boluntaryong TuPians (University Org)',
    date: '2022 - 2023',
    details: [
      'Produced and engineered multi-angle video logs for broad organization release channels.',
      'Collaborated closely across technical branches to map out job allocations and communications grids.'
    ]
  },
  {
    role: 'Student Assistant',
    company: 'High School Faculty',
    date: '2019 - 2020',
    details: [
      'Built advanced progress trackers using spreadsheet architectures to document student metrics.',
      'Managed evaluation processing, metric logging, and test administration matrices.'
    ]
  },
  {
    role: 'Library Assistant',
    company: 'Elementary School Library',
    date: '2015 - 2016',
    details: [
      'Organized physical knowledge inventory systematically mapped to target learning stages.',
      'Partnered with administration units to catalog multi-tier media arrays smoothly.'
    ]
  }
];

export const projectsData: Project[] = [
  {
    title: 'E-Tire MIS',
    description: 'An enterprise tracking management information system built for Queen R. Tire Supply & Vulcanizing Shop. Features optimized data pipelines connecting full CRUD features with low-latency responsiveness.',
    githubUrl: 'https://etire-mis.vercel.app/',
    tech: ['Node.js', 'PostgreSQL', 'Agile/Sprints', 'Deployed', 'React' ,'REST API'],
    category: 'Capstone',
    award: '🏆 2nd Outstanding System Award (2025-2026)'
  },
  {
    title: 'SmartDorm Management System',
    description: 'An architectural layout managing housing parameters. Features a highly locked database schema enforcing strict system access control parameters across custom API junctions.',
    tech: ['PostgreSQL', 'API Design', 'Feasibility Studies', 'Database System'],
    category: 'Academic' // Assigned to Academic category matching your curriculum track
  },
  {
    title: 'PawPedia',
    description: 'An interactive information web app styled with fluid components and motion vectors to elevate standard reading interfaces.',
    githubUrl: 'https://github.com/Ishkihu', 
    tech: ['HTML5', 'CSS3', 'UI Motion', 'Frontend'],
    category: 'Personal'
  },
  {
    title: 'BINARY ENCRYPTION & DECRYPTION',
    description: 'A cryptography layout utilizing low-level data flows to seal and decode text arrays cleanly.',
    githubUrl: 'https://github.com/Ishkihu/BinaryEncryption-Decryption',
    tech: ['C++', 'Security', 'File I/O'],
    category: 'Academic' // Assigned to Academic tracking
  },
  {
    title: 'DATABASE LOGIN SYSTEM',
    description: 'A structural engine connecting internal MySQL servers to secure Java session validators.',
    githubUrl: 'https://github.com/Ishkihu/LoginSystem-Database',
    tech: ['Java', 'MySQL', 'JDBC', 'Auth Systems'],
    category: 'Academic' // Assigned to Academic tracking
  }
];