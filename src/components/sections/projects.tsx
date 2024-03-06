import React, { useEffect } from 'react';
import { FolderDot } from 'lucide-react';
import Project from '../ui/project';
import ScrollReveal from 'scrollreveal';
import empregajovemmais from '@/assets/img/empregajovem.png';
import ecologic from '@/assets/img/ecologic.png';


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

}, []);

    return (
      <div className="p-4 sm:ml-64 mt-16">
        <div className="gap-2 xl:mx-28">
          <div className="flex items-center p-2 sm:p-3 md:p-4 xl:p-4 border border-zinc-300 rounded-lg dark:border-zinc-800">
            <div className="flex-grow pb-8">
              <h2 className="ml-4 mb-2 text-xl font-bold text-zinc-700 dark:text-zinc-300 title">
                Projects<FolderDot className='inline ml-1 w-5 h-5' strokeWidth="1.5"></FolderDot>
              </h2>
              <p className="ml-4 text-zinc-500 dark:text-zinc-400 font-normal text-sm title mb-8">
                These are my favorite projects.
              </p>
              <div className="md:ml-4 xl:ml-4 text-center mx-auto grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2">
                <div className="left">
                    <Project
                    imageSrc={empregajovemmais}
                    title="Emprega Jovem +"
                    description="Projeto voltado para jovens em busca de suas primeiras oportunidades no mercado de trabalho, os usuários podem criar currículos profissionais, destacando suas principais habilidades e experiências. Além disso, oferece uma plataforma para encontrar vagas de emprego ou para enviar informações para o banco de talentos."
                    tags={['HTML', 'Tailwind CSS', 'Javascript', 'Firebase']}
                    visitLink="https://empregajovemmais.netlify.app/"
                    viewCodeLink="https://seusite.com/viewcode"
                    />
                </div>
                <div className="right">
                    <Project
                    imageSrc={ecologic}
                    title="Ecologic"
                    description="Projeto de conscientização de boas práticas de meio ambiente."
                    tags={['HTML', 'Tailwind CSS', 'Javascript']}
                    visitLink="https://ecologic-sistemasdeinformacao.netlify.app/"
                    viewCodeLink="https://ecologic-sistemasdeinformacao.netlify.app/"
                    />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Projects;