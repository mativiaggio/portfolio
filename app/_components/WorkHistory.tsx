import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { workExperiences } from "@/constants";

const WorkHistory = () => {
  return (
    <div className="pt-6">
      <div>
        <h2 className="text-2xl font-bold mb-6">Work Experience</h2>
        <div className="space-y-4">
          {workExperiences.map((experience, index) => (
            <Card
              key={index}
              className="relative rounded-tl-sm rounded-bl-sm border-none">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-workspace-accent rounded-tl-lg rounded-bl-lg"></div>
              <CardContent className="pt-6">
                <Accordion type="single" collapsible defaultValue="item-0">
                  <AccordionItem
                    value={`item-${index}`}
                    className="!border-none">
                    <AccordionTrigger>
                      <div className="flex items-start">
                        <Avatar className="h-12 w-12 mr-4">
                          <AvatarImage
                            src={experience.logo}
                            alt={experience.company}
                            className="object-contain"
                          />
                          <AvatarFallback>
                            {experience.company[0]}
                          </AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold text-start">
                            {experience.company}
                          </h3>
                          <p className="text-sm text-muted-foreground text-start">
                            {experience.startDate} - {experience.endDate}
                          </p>
                        </div>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="pl-16">
                      {experience.experience.map((exp, index) => {
                        return (
                          <div key={index}>
                            <div className="text-sm text-muted-foreground">
                              <p className="text-base font-medium text-workspace-accent">
                                {exp.position}
                              </p>
                              {exp.startDate ? (
                                <p className="text-sm text-muted-foreground">
                                  {exp.startDate} - {exp.endDate}
                                </p>
                              ) : (
                                ""
                              )}
                              <p className="py-2 text-sm">{exp.description}</p>
                              {exp.skills?.map((skill, skillIndex) => (
                                <Badge
                                  key={skillIndex}
                                  variant="secondary"
                                  className="mr-1 mb-1 bg-blue-100 hover:bg-blue-100 text-blue-800">
                                  {skill}
                                </Badge>
                              ))}
                            </div>
                          </div>
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
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkHistory;
