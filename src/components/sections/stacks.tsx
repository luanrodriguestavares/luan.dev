import { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';
import Card from "@/components/ui/card";
import { AlertTitle } from "@/components/ui/alert";
import { Computer } from 'lucide-react';

import html from '@/assets/img/html.png';
import css from '@/assets/img/css.png';
import react from '@/assets/img/react.png';
import vite from '@/assets/img/vite.png';
import bootstrap from '@/assets/img/bootstrap.png';
import express from '@/assets/img/express.png';
import node from '@/assets/img/node.png';
import python from '@/assets/img/python.png';
import java from '@/assets/img/java.png';
import figma from '@/assets/img/figma.png';
import docsauros from '@/assets/img/docsauros.png';
import azure from '@/assets/img/azure.png';


const Stacks = () => {
  useEffect(() => {
    ScrollReveal().reveal('.card', {
      origin: 'bottom',
      distance: '25px',
      duration: 1000,
      delay: 200,
      easing: 'ease-out',
      reset: false,
    });

    ScrollReveal().reveal('.title', {
      origin: 'left',
      distance: '25px',
      duration: 1000,
      delay: 200,
      easing: 'ease-out',
      reset: false,
    });
  }, []);

    return (
        <div className="p-4 sm:ml-64 mt-16">
        <div className="mx-0 sm:md-0 md:mx-2 xl:mx-28">
          <div className="flex items-center p-2 sm:p-3 md:p-4 xl:p-4  border border-zinc-300 rounded-lg dark:border-zinc-800">
            <div className="ml-4 flex-grow  pb-8">
              <h2 className="mb-2 text-xl font-bold text-zinc-700 dark:text-zinc-300 title">Stacks and uses<Computer className='inline ml-1 w-5 h-5' strokeWidth="1.5"></Computer></h2>
              <p className="text-zinc-500 dark:text-zinc-400 font-normal text-sm title">These are technologies I enjoy working with and learning about.</p>

              <AlertTitle className='mt-14 mb-2 ml-2 text-xl card'>Front-end</AlertTitle>
              <div className="mt-4 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4"> 
                <Card src={html} ringColorClass="ring-orange-700" className='card'>
                  <AlertTitle className='mb-2 font-normal text-sm'>HTML</AlertTitle>
                </Card>
                <Card src={css} ringColorClass="ring-blue-500" className='card'>
                  <AlertTitle className='mb-2 font-normal text-sm'>CSS</AlertTitle>
                </Card>
                <Card src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/600px-JavaScript-logo.png?20120221235433./src/assets/si.png" ringColorClass="ring-yellow-300" className='card'>
                  <AlertTitle className='mb-2 font-normal text-sm'>Javascript</AlertTitle>
                </Card>
                <Card src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/2048px-Typescript_logo_2020.svg.png" ringColorClass="ring-blue-500" className='card'> 
                  <AlertTitle className='mb-2 font-normal text-sm'>Typescript</AlertTitle>
                </Card>
                <Card src={react} ringColorClass="ring-blue-400" className='card'>
                  <AlertTitle className='mb-2 font-normal text-sm'>React Js</AlertTitle>
                </Card>
                <Card src="https://avatars.githubusercontent.com/u/75042455?s=280&v=4" ringColorClass="ring-zinc-500" className='card'>
                  <AlertTitle className='mb-2 font-normal text-sm'>Radix UI</AlertTitle>
                </Card>
                <Card src={vite} ringColorClass="ring-purple-400" className='card'>
                  <AlertTitle className='mb-2 font-normal text-sm'>Vite</AlertTitle>
                </Card>
                <Card src="data:image/png;base64,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" ringColorClass="ring-blue-700" className='card'>
                  <AlertTitle className='mb-2 font-normal text-sm'>Tailwind CSS</AlertTitle>
                </Card>
                <Card src="https://avatars.githubusercontent.com/u/139895814?s=280&v=4" ringColorClass="ring-zinc-500" className='card'>
                  <AlertTitle className='mb-2 font-normal text-sm'>Shadcn UI</AlertTitle>
                </Card>
                <Card src={bootstrap} ringColorClass="ring-purple-600" className='card'>
                  <AlertTitle className='mb-2 font-normal text-sm'>Bootstrap</AlertTitle>
                </Card>
              </div>

              <AlertTitle className='mt-14 mb-2 ml-2 text-xl card'>Back-end</AlertTitle>
              <div className="mt-4 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4"> 
                <Card src={express} ringColorClass="ring-zinc-500" className='card'>
                  <AlertTitle className='mb-2 font-normal text-sm'>Express</AlertTitle>
                </Card>
                <Card src={node} ringColorClass="ring-emerald-500" className='card'>
                  <AlertTitle className='mb-2 font-normal text-sm'>Node Js</AlertTitle>
                </Card>
                <Card src={python} ringColorClass="ring-yellow-500" className='card'>
                  <AlertTitle className='mb-2 font-normal text-sm'>Python</AlertTitle>
                </Card>
                <Card src={java} ringColorClass="ring-blue-400" className='card'>
                  <AlertTitle className='mb-2 font-normal text-sm'>Java</AlertTitle>
                </Card>
              </div>

              <AlertTitle className='mt-14 mb-2 ml-2 text-xl card'>Database</AlertTitle>
              <div className="mt-4 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4"> 
                <Card src="https://796c21.p3cdn2.secureserver.net/wp-content/uploads/2018/10/SQL-Server-Logo.jpg?time=1707402428" ringColorClass="ring-blue-500" className='card'>
                  <AlertTitle className='mb-2 font-normal text-sm'>SQL Server</AlertTitle>
                </Card>
                <Card src="https://www.tshirtgeek.com.br/wp-content/uploads/2021/08/com031.jpg" ringColorClass="ring-zinc-500" className='card'>
                  <AlertTitle className='mb-2 font-normal text-sm'>MySQL</AlertTitle>
                </Card>
              </div>

              <AlertTitle className='mt-14 mb-2 ml-2 text-xl card'>Prototyping and design</AlertTitle>
              <div className="mt-4 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4"> 
                <Card src={figma} ringColorClass="ring-zinc-400" className='card'>
                  <AlertTitle className='mb-2 font-normal text-sm'>Figma</AlertTitle>
                </Card>
                <Card src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Adobe_Photoshop_CC_icon.svg/2101px-Adobe_Photoshop_CC_icon.svg.png" ringColorClass="ring-blue-500" className='card'>
                  <AlertTitle className='mb-2 font-normal text-sm'>Adobe Photoshop</AlertTitle>
                </Card>
              </div>

              <AlertTitle className='mt-14 mb-2 ml-2 text-xl card'>Low-Code</AlertTitle>
              <div className="mt-4 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4"> 
                <Card src="https://reenhanced.com/wp-content/uploads/2021/07/powerapps.png" ringColorClass="ring-purple-500" className='card'>
                  <AlertTitle className='mb-2 font-normal text-sm'>Microsoft Power Apps</AlertTitle>
                </Card>
                <Card src="https://i0.wp.com/davidlozzi.com/wp-content/uploads/2018/03/flow.png?fit=256%2C256&ssl=1" ringColorClass="ring-blue-700" className='card'>
                  <AlertTitle className='mb-2 font-normal text-sm'>Microsoft Power Automate</AlertTitle>
                </Card>
                <Card src="https://play-lh.googleusercontent.com/6dOQWZRI78o5HAshGgV6XRnTeN-BVXwh2DXkHjZuBsyKlDQHgx1_W6vzwnYN56k-wcs" ringColorClass="ring-indigo-500" className='card'>
                  <AlertTitle className='mb-2 font-normal text-sm'>Kodular</AlertTitle>
                </Card>
              </div>

                <AlertTitle className='mt-14 mb-2 ml-2 text-xl card'>Documentation</AlertTitle>
              <div className="mt-4 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4"> 
                <Card src={docsauros} ringColorClass="ring-emerald-500" className='card'>
                  <AlertTitle className='mb-2 font-normal text-sm'>Docusauros</AlertTitle>
                </Card>
                <Card src="https://nodesk.co/remote-companies/assets/logos/gitbook.63070d9d5dc2ca7db32f8c580351ab83849a2620947fdc5359784ac27d7a9ed5.jpg" ringColorClass="ring-blue-700" className='card'>
                  <AlertTitle className='mb-2 font-normal text-sm'>GitBook</AlertTitle>
                </Card>
                <Card src="https://static.javatpoint.com/tutorial/uml/images/uml-tutorial.png" ringColorClass="ring-zinc-500" className='card'>
                  <AlertTitle className='mb-2 font-normal text-sm'>UML</AlertTitle>
                </Card>
              </div>

              <AlertTitle className='mt-14 mb-2 ml-2 text-xl card'>Version Control</AlertTitle>
              <div className="mt-4 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4"> 
                <Card src="https://git-scm.com/images/logos/logomark-orange@2x.png" ringColorClass="ring-orange-500" className='card'>
                  <AlertTitle className='mb-2 font-normal text-sm'>Git</AlertTitle>
                </Card>
                <Card src="https://cdn.pixabay.com/photo/2022/01/30/13/33/github-6980894_1280.png" ringColorClass="ring-zinc-700" className='card'>
                  <AlertTitle className='mb-2 font-normal text-sm'>GitHub</AlertTitle>
                </Card>
                <Card src={azure} ringColorClass="ring-zinc-500" className='card'>
                  <AlertTitle className='mb-2 font-normal text-sm'>Azure Repos</AlertTitle>
                </Card>
              </div>

            </div>
          </div>
        </div>
      </div>

    );
}
export default Stacks;
