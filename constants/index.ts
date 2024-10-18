// Define the structure for a work experience item
interface WorkExperience {
  company: string;
  logo: string;
  startDate: string;
  endDate: string;
  experience: Experience[];
  description?: string;
  skills?: string[];
}
interface Experience {
  position: string;
  startDate?: string;
  endDate?: string;
  description?: string;
  skills: string[];
}
// Sample work experience data
export const workExperiences: WorkExperience[] = [
  {
    company: "Pragmatica Consultores.",
    logo: "https://inversionycomercio.exportargentina.org.ar/companyimages/15962058384507.png",
    startDate: "Nov 2024",
    endDate: "Present",
    experience: [
      {
        position: "Full Stack Web Developer",
        description:
          "Led development of cloud-based solutions, improving system efficiency by 40%. Mentored junior developers and implemented best practices in code reviews.",
        skills: [
          "HTML",
          "CSS",
          "JavaScript",
          "Angular",
          "Node.js",
          "AWS",
          "PostgreSQL",
        ],
      },
    ],
  },
  {
    company: "MMCS S.A.",
    logo: "https://media.licdn.com/dms/image/v2/C560BAQEVtI65GbibWA/company-logo_200_200/company-logo_200_200/0/1631321818715?e=2147483647&v=beta&t=PwkzSauag-0WwY_VBuf2AL9XVtezD8apbDzPYbzjY3M",
    startDate: "Nov 2022",
    endDate: "Nov 2024",
    experience: [
      {
        position: "Full Stack Web Developer",
        startDate: "Feb 2023",
        endDate: "Nov 2024",
        description:
          "Development of Translog System, specialized software for freight forwarders, national and international logistics, air, maritime, and land transportation.",
        skills: ["HTML", "CSS", "JavaScript", "SQL", "RESTful APIs"],
      },
      {
        position: "Backend Developer",
        startDate: "Nov 2022",
        endDate: "Feb 2023",
        skills: ["4th Dimension", "SQL", "RESTful APIs"],
      },
    ],
  },
  {
    company: "Independent",
    logo: "https://media.licdn.com/dms/image/D4D03AQFX957FaJuuCg/profile-displayphoto-shrink_400_400/0/1665523078970?e=2147483647&v=beta&t=dWqpdTgEmHzGO7EpKxCIdcKZrQ8I3PwYHew5IStM24Y",
    startDate: "Mar 2022",
    endDate: "Nov 2022",
    experience: [
      {
        position: "Freelance Web Developer",
        startDate: "Mar 2022",
        endDate: "Nov 2022",
        description: "Independent professional.",
        skills: ["HTML", "CSS", "SCSS", "JavaScript"],
      },
    ],
  },
];

export interface Certifications {
  title: string;
  awardedTo: string;
  issuedOn: string;
  verifiedBy: string;
  institutionUrl: string;
  stack: string[];
  description: string;
  certificateId: string;
  link: string;
}

export const frontendCertifications: Certifications[] = [
  {
    title: "Frontend Development Career",
    awardedTo: "Matias Viaggio",
    issuedOn: "December 01, 2022",
    verifiedBy: "CoderHouse",
    institutionUrl: "coderhouse.com/ar",
    stack: [
      "Figma",
      "HTML",
      "CSS",
      "SCSS",
      "SASS",
      "JavaScript",
      "jQuery",
      "AJAX",
      "React JS",
      "MongoDB",
      "Firebase",
      "GIT",
    ],
    description:
      "In this Front End development course, students will learn how to create a website and dive into web design best practices using HTML and CSS. They will also gain programming skills with JavaScript and React JS, enabling them to build more complex, dynamic, and scalable websites. By the end of the course, participants will be prepared to pursue a career as a Front End Developer, equipped with the skills to tackle modern web development projects.",
    certificateId: "63bc233bb3d8ad000e661f7c",
    link: "https://www.coderhouse.com/ar/certificados/63bc233bb3d8ad000e661f7c",
  },
  {
    title: "React JS",
    awardedTo: "Matias Viaggio",
    issuedOn: "December 01, 2022",
    verifiedBy: "CoderHouse",
    institutionUrl: "coderhouse.com/ar",
    stack: ["JavaScript", "React JS", "MongoDB", "Firebase"],
    description:
      "In this advanced course, students will learn component-based programming using JavaScript, JS, and ES6, while also exploring the benefits of data flow management. They will work with routing using Firebase and understand the virtual DOM through React JS development. By the end, participants will be able to build their own Single Page Applications (SPA) and be well-equipped to develop with one of the most popular and advanced frameworks available today.",
    certificateId: "63bc233bb3d8ad000e661f7a",
    link: "https://www.coderhouse.com/ar/certificados/63bc233bb3d8ad000e661f79",
  },
  {
    title: "JavaScript",
    awardedTo: "Matias Viaggio",
    issuedOn: "October 04, 2022",
    verifiedBy: "CoderHouse",
    institutionUrl: "coderhouse.com/ar",
    stack: ["JavaScript", "jQuery", "AJAX", "GIT"],
    description:
      "In this course, students will learn the fundamentals of the most widely used programming language today, enabling them to create a variety of applications. They will explore native tools and practical use cases, study the power of libraries like jQuery, and apply development techniques for modern apps using AJAX. By the end, participants will be capable of building interactive web solutions and transferring their skills to any JavaScript framework.",
    certificateId: "63476044fdbeea000e9e4cba",
    link: "https://www.coderhouse.com/ar/certificados/63476043fdbeea000e9e4cb9",
  },
  {
    title: "Web Development",
    awardedTo: "Matias Viaggio",
    issuedOn: "July 28, 2022",
    verifiedBy: "CoderHouse",
    institutionUrl: "coderhouse.com/ar",
    stack: ["Figma", "HTML", "CSS", "SCSS", "SASS", "GIT"],
    description:
      "In this course, students will learn how to create a website starting from a paper prototype. They will dive into web development best practices, using HTML and CSS, and explore tools for optimizing their site. The course covers version control with GIT, pre-processors like SASS, and how to apply Bootstrap. Participants will also gain insights into SEO, deploy their site on a server, and learn how to interact with it. Additionally, they will understand how to present budgets and communicate with clients effectively.",
    certificateId: "630eb453f6200300df213a21",
    link: "https://www.coderhouse.com/ar/certificados/630eb452f6200300df213a20?lang=en",
  },
];

export const backendCertifications: Certifications[] = [
  {
    title: "Backend Programming",
    awardedTo: "Matias Viaggio",
    issuedOn: "June 13, 2024",
    verifiedBy: "CoderHouse",
    institutionUrl: "coderhouse.com/ar",
    stack: [
      "HTML",
      "CSS",
      "Tailwind CSS",
      "JavaScript",
      "Handlebars JS",
      "Mongo DB",
      "Mongoose",
      "Passport",
      "Restful API",
    ],
    description:
      "In this course, students will master NoSQL databases, learning how to efficiently manage and scale large volumes of data. They will design fast, scalable backend applications, integrating secure authentication and authorization systems. The curriculum covers topics like data normalization, testing, logging, and optimization using Kubernetes and RESTful API architecture. Participants will also explore frameworks such as NEST and learn deployment techniques for cloud-based applications, concluding with comprehensive testing and performance profiling for robust backend solutions.",
    certificateId: "66923fd75b2c6fc689b26e0a",
    link: "https://www.coderhouse.com/ar/certificados/66923fd7f2d5a36942e7e6b8?lang=en",
  },
  {
    title: "Python",
    awardedTo: "Matias Viaggio",
    issuedOn: "May 10, 2022",
    verifiedBy: "CoderHouse",
    institutionUrl: "coderhouse.com/ar",
    stack: ["HTML", "CSS", "JavaScript", "Pyhon", "Django"],
    description:
      "In this course, students will learn the fundamentals of programming through Python, one of the most popular languages today. It begins by covering core concepts, including syntax, modules, and programming rules. The curriculum progresses to more advanced topics such as Class-Based Views, authentication systems (login/register), CRUD operations, and the use of modelforms. By the end of the course, participants will develop a blog-style web application using the Django Framework, equipping them with practical skills to build and manage web applications.",
    certificateId: "629fe157a7040900246fe4a0",
    link: "https://www.coderhouse.com/ar/certificados/629fe157a7040900246fe49f?lang=en",
  },
];

export const cybersecurityCertifications: Certifications[] = [
  {
    title: "Introduction to Cybersecurity",
    awardedTo: "Matias Viaggio",
    issuedOn: "September 2, 2024",
    verifiedBy: "CoderHouse",
    institutionUrl: "educacionit.com",
    stack: [
      "Risk Management and Compliance",
      "Threat Analysis",
      "Identity Management",
      "Security Operations",
      "Pentesting and Vulnerability Assessment",
      "System Monitoring and Incident Response",
      "Cloud and API Security",
      "Testing and Optimization",
    ],
    description:
      "In this course, students will learn the essential principles and advanced techniques for safeguarding digital assets and becoming experts in cybersecurity. Topics include risk management, threat analysis, malware (including ransomware and phishing), and identity management through authentication and biometric systems. The course also covers monitoring, incident response strategies, and vulnerability assessments, with a focus on Red, Blue, and Purple Teams. Students will gain hands-on experience in penetration testing and security operations, ensuring they are prepared to evaluate and enhance digital security systems.",
    certificateId: "102494871597",
    link: "https://www.educacionit.com/perfil/matias-viaggio-1024948/certificado/71597",
  },
];

export interface Projects {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  githubLink: string;
  liveLink: string;
}

export const projects: Projects[] = [
  {
    id: 1,
    title: "E-commerce Platform",
    description:
      "A full-stack e-commerce solution with React, Node.js, and MongoDB.",
    image: "/placeholder.svg?height=200&width=300",
    tags: ["React", "Node.js", "MongoDB", "Express"],
    githubLink: "https://github.com/yourusername/ecommerce-platform",
    liveLink: "https://ecommerce-platform-demo.com",
  },
  {
    id: 2,
    title: "AI Image Generator",
    description: "An AI-powered image generation tool using GANs and PyTorch.",
    image: "/placeholder.svg?height=200&width=300",
    tags: ["Python", "PyTorch", "GANs", "Flask"],
    githubLink: "https://github.com/yourusername/ai-image-generator",
    liveLink: "https://ai-image-gen-demo.com",
  },
  {
    id: 3,
    title: "Task Management App",
    description:
      "A responsive task management application built with Vue.js and Firebase.",
    image: "/placeholder.svg?height=200&width=300",
    tags: ["Vue.js", "Firebase", "Vuex", "Tailwind CSS"],
    githubLink: "https://github.com/yourusername/task-management-app",
    liveLink: "https://task-app-demo.com",
  },
  {
    id: 4,
    title: "Weather Forecast Dashboard",
    description:
      "A real-time weather forecast dashboard using React and OpenWeatherMap API.",
    image: "/placeholder.svg?height=200&width=300",
    tags: ["React", "Redux", "OpenWeatherMap API", "Chart.js"],
    githubLink: "https://github.com/yourusername/weather-dashboard",
    liveLink: "https://weather-dashboard-demo.com",
  },
];
