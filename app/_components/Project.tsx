import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Projects } from "@/constants";
import { ExternalLinkIcon, GithubIcon, TagIcon } from "lucide-react";

export const Project = (project: Projects) => {
  return (
    <Card className="flex flex-col overflow-hidden transition-all duration-300 hover:shadow-lg">
      <img
        src={project.image}
        alt={`${project.title} preview`}
        className="w-full h-48 object-cover"
      />
      <CardHeader>
        <CardTitle className="text-2xl font-bold">{project.title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-muted-foreground mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <Badge
              key={tag}
              variant="secondary"
              className="flex items-center gap-1 bg-blue-100 hover:bg-blue-100 text-blue-800">
              <TagIcon className="w-3 h-3" />
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline" size="sm" asChild>
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer">
            <GithubIcon className="mr-2 h-4 w-4" />
            GitHub
          </a>
        </Button>
        <Button size="sm" asChild>
          <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
            <ExternalLinkIcon className="mr-2 h-4 w-4" />
            Live Demo
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
};
