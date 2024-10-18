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
    startDate: "Feb 2023",
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
