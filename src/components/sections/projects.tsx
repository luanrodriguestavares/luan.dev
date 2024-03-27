import React, { useEffect } from 'react';
import { FolderDot, Linkedin, Github, Instagram, Mail, Phone } from 'lucide-react';
import Project from '../ui/project';
import ScrollReveal from 'scrollreveal';
import empregajovem from '@/assets/img/empregajovem.png';
import getqr from '@/assets/img/getqr.png';
import SocialMedia from '../ui/socialmedia';

const Projects: React.FC = () => {
    useEffect(() => {


    ScrollReveal().reveal('.title', {
        origin: 'left',
        distance: '15px',
        duration: 800,
        easing: 'ease-out',
        reset: false,
    });

    ScrollReveal().reveal('.left', {
        origin: 'left',
        distance: '15px',
        duration: 800,
        delay: 200,
        interval:300,
        easing: 'ease-out',
        reset: false,
        });

    ScrollReveal().reveal('.right', {
        origin: 'right',
        distance: '15px',
        duration: 800,
        delay: 200,
        interval:300,
        easing: 'ease-out',
        reset: false,
        });

        ScrollReveal().reveal('.socialmedias', {
          origin: 'left',
          distance: '15px',
          duration: 800,
          delay: 200,
          easing: 'ease-out',
          reset: false,
        });

}, []);

    return (
      <div className="sm:ml-64 mt-16">
        <div className="gap-2 xl:mx-28">
          <div className="flex items-center p-2 sm:p-3 md:p-4 xl:p-4 border border-zinc-300 rounded-lg dark:border-zinc-800">
            <div className="flex-grow pb-8">
              <h2 className="mb-2 ml-4 mt-2 text-md xl:text-xl font-bold text-zinc-700 dark:text-zinc-300 title">
                Projects<FolderDot className='inline ml-1 w-5 h-5' strokeWidth="1.5"></FolderDot>
              </h2>
              <p className="ml-4 text-zinc-500 dark:text-zinc-400 font-normal text-xs xl:text-sm title mb-8">
                These are my favorite projects.
              </p>

              <div className="md:ml-4 xl:ml-4 text-center mx-auto grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2">
                <div className="left">
                    <Project
                    imageSrc={empregajovem}
                    title="Emprega Jovem +"
                    description="Project aimed at young individuals seeking their first opportunities in the job market, where users can create professional resumes highlighting their key skills and experiences. Additionally, it provides a platform to discover job openings or to submit information to the talent pool."
                    tags={['HTML', 'Tailwind CSS', 'Javascript', 'Firebase']}
                    visitLink="https://empregajovemmais.netlify.app/"
                    viewCodeLink="https://github.com/luanrodriguestavares/EmpregaJovemMais"
                    />
                </div>
                <div className="right">
                    <Project
                    imageSrc={getqr}
                    title="GetQR"
                    description="Platform designed for users to scan QR codes effortlessly and manage the data efficiently. It offers tools to save scanned information into Excel or PDF formats for easy organization and access."
                    tags={['React Js', 'Tailwind CSS', 'Typescript', 'Vite']}
                    visitLink="https://get-qrcode.netlify.app/"
                    viewCodeLink="https://github.com/luanrodriguestavares/GetQr"
                    />
                </div>
              </div>
            </div>
          </div>
          <div className="mt-4 flex items-center p-4 border border-zinc-300 rounded-lg dark:border-zinc-800 socialmedias">
              <div className="xl:mx-4 flex-grow">
                <h2 className="text-md xl:text-xl font-bold text-center text-zinc-700 dark:text-zinc-300">
                  Contacts<Phone className='inline ml-1 w-5 h-5' stroke-width="1.5"></Phone>
                </h2>
                <p className="my-3 text-center text-zinc-500 dark:text-zinc-400 text-sm mb-8">
                  Liked what you saw? We can work together!
                </p>
                  <div className="flex justify-center space-x-4">
                    <SocialMedia
                      name="LinkedIn"
                      icon={<Linkedin className="text-zinc-50 w-5 h-5" />}
                      tooltip="Visit my LinkedIn profile"
                      color="bg-blue-600"
                      hoverColor="hover:bg-blue-700"
                      url="https://www.linkedin.com/in/luanrodriguesti/"
                    />

                    <SocialMedia
                      name="Github"
                      icon={<Github className="text-zinc-50 w-5 h-5" />}
                      tooltip="Visit my Github profile"
                      color="bg-zinc-700"
                      hoverColor="hover:bg-zinc-900"
                      url="https://github.com/luanrodriguestavares"
                    />

                    <SocialMedia
                      name="Instagram"
                      icon={<Instagram className="text-zinc-50 w-5 h-5" />}
                      tooltip="Visit my Instagram profile"
                      color="bg-rose-500"
                      hoverColor="hover:bg-rose-700"
                      url="https://www.instagram.com/luanrodrigues7k/"
                    />

                    <SocialMedia
                      name="Email"
                      icon={<Mail className="text-zinc-50 w-5 h-5" />}
                      tooltip="Send me an email"
                      color="bg-indigo-500"
                      hoverColor="hover:bg-indigo-700"
                      url="mailto:luantavares.developer@gmail.com"
                    />
                  </div>
                </div>
              </div>
        </div>
      </div>
    );
  };
  
  export default Projects;