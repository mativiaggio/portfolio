import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

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
  startDate: string;
  endDate: string;
  description?: string;
  skills: string[];
}
// Sample work experience data
const workExperiences: WorkExperience[] = [
  {
    company: "Pragmatica Consultores.",
    logo: "/placeholder.svg?height=40&width=40",
    startDate: "Nov 2024",
    endDate: "Present",
    experience: [
      {
        position: "Full Stack Web Developer",
        startDate: "Nov 2024",
        endDate: "Present",
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
    logo: "/placeholder.svg?height=40&width=40",
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
    logo: "/placeholder.svg?height=40&width=40",
    position: "Freelance Web Developer",
    startDate: "Mar 2022",
    endDate: "Nov 2022",
    description: "Independent professional.",
    skills: ["HTML", "CSS", "SCSS", "JavaScript"],
  },
];

const WorkHistory = () => {
  return (
    <div className="pt-6">
      <div>
        <h2 className="text-2xl font-bold mb-6">Work Experience</h2>
        <div className="space-y-8">
          {workExperiences.map((experience, index) => (
            <Card
              key={index}
              className="relative rounded-tl-none rounded-bl-none">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-workspace-accent rounded-tl-lg rounded-bl-lg"></div>
              <CardContent className="pt-6">
                <div className="flex items-start">
                  <Avatar className="h-12 w-12 mr-4">
                    <AvatarImage
                      src={experience.logo}
                      alt={experience.company}
                    />
                    <AvatarFallback>{experience.company[0]}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold">
                      {experience.company}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {experience.startDate} - {experience.endDate}
                    </p>
                    <hr />
                    <br />
                    {experience.experience.map((exp, index) => {
                      return (
                        <>
                          <div
                            key={index}
                            className="text-sm text-muted-foreground">
                            <p className="text-base font-medium text-workspace-accent">
                              {exp.position}
                            </p>
                            <p className="text-sm text-muted-foreground">
                              {exp.startDate} - {exp.endDate}
                            </p>
                            <p className="mt-2 text-sm">{exp.description}</p>
                            {exp.skills?.map((skill, skillIndex) => (
                              <Badge
                                key={skillIndex}
                                variant="secondary"
                                className="mr-1">
                                {skill}
                              </Badge>
                            ))}
                          </div>
                          <br />
                        </>
                      );
                    })}
                    <p className="mt-2 text-sm">{experience.description}</p>
                    <div className="mt-2">
                      {experience.skills?.map((skill, skillIndex) => (
                        <Badge
                          key={skillIndex}
                          variant="secondary"
                          className="mr-1">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkHistory;
