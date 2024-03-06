import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { AlertTitle } from "./alert";
import { Badge } from "./badge";
import { Button } from "@/components/ui/button";
import { Link, Github, Eye } from 'lucide-react';

interface ProjectProps {
  imageSrc: string;
  title: string;
  description: string;
  tags: string[];
  visitLink: string;
  viewCodeLink: string;
}

const Project: React.FC<ProjectProps> = ({ imageSrc, title, description, tags, visitLink, viewCodeLink }) => {


  return (
    <div className="flex-shrink-0 p-4">
      <Dialog>
        <DialogTrigger className="cursor-pointer relative group">
          <div className="rounded-md overflow-hidden">
            <img
              src={imageSrc}
              alt="Image"
              className="object-cover border border-zinc-300 dark:bg-zinc-950 dark:border-zinc-800 w-full sm:h-56 lg:h-64 transition-transform transform-gpu group-hover:scale-105 filter brightness-100 group-hover:brightness-75 duration-300 ease-in-out"
            />
          </div>
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100">
            <Button variant="secondary"><Eye className='mr-1'></Eye>View</Button>
          </div>
        </DialogTrigger>
        <AlertTitle className="text-center mb-2 text-lg font-bold text-zinc-700 dark:text-zinc-300">
          {title}
        </AlertTitle>
        <DialogContent className="w-full max-w-screen-lg">
          <DialogHeader>
            <DialogTitle className="text-center font-bold text-zinc-700 dark:text-zinc-300">
              {title}
            </DialogTitle>
          </DialogHeader>
          <div className="flex">
            <div className="rounded-md overflow-hidden">
              <div className="relative group">
                <img
                  src={imageSrc}
                  alt="Larger Image"
                  className="object-cover w-full"
                />
              </div>
            </div>
          </div>
          {/* Conteúdo de texto e badges */}
          <div className="p-2 justify-between leading-normal w-full">
            <div className="w-full">
              <AlertTitle className="mb-2 text-lg font-bold text-zinc-700 dark:text-zinc-300">
                {title}
              </AlertTitle>
              <p className="my-2 text-justify text-zinc-500 dark:text-zinc-400 text-sm">
                {description}
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-center">
              <div className="mt-8 text-xs flex-grow flex">
                {tags.map((tag, index) => (
                  <Badge key={index} className={`ml-1`} variant="default">
                    {tag}
                  </Badge>
                ))}
              </div>

              <div className="flex mt-4 sm:mt-0">
                <Button className='mr-2' onClick={() => window.open(visitLink, "_blank")}>
                  <Link className='mr-1'></Link>Visit
                </Button>

                <Button onClick={() => window.open(viewCodeLink, "_blank")}>
                  <Github className='mr-1'></Github>View code
                </Button>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Project;