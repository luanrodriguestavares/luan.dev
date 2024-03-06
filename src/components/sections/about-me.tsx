import React, { useEffect } from 'react';
import { Badge } from "@/components/ui/badge"
import { AlertTitle } from "@/components/ui/alert"
import { Rocket, GraduationCap, Headphones } from 'lucide-react';
import Song from '@/components/songs/songs';
import ScrollReveal from 'scrollreveal';
import me from '@/assets/img/me.png';
import si from '@/assets/img/si.png';
import ifce from '@/assets/img/ifce.png';
import rocketseat from '@/assets/img/rocketseat.png';
import fiap from '@/assets/img/fiap.png';
import fundacaoBradesco from '@/assets/img/fundacaoBradesco.png';




const AboutMe: React.FC = () => {
  useEffect(() => {

    ScrollReveal().reveal('.card', {
      origin: 'bottom',
      distance: '15px',
      duration: 800,
      interval: 400,
      easing: 'ease-out',
      reset: false,
    });

    ScrollReveal().reveal('.cardMusic', {
      origin: 'left',
      distance: '15px',
      duration: 800,
      interval: 400,
      easing: 'ease-out',
      reset: false,
    });

    ScrollReveal().reveal('.title', {
      origin: 'left',
      distance: '15px',
      duration: 800,
      easing: 'ease-out',
      reset: false,
    });

    ScrollReveal().reveal('.profile', {
      origin: 'left',
      distance: '15px',
      duration: 800,
      delay: 200,
      easing: 'ease-out',
      reset: false,
    });

    ScrollReveal().reveal('.techs', {
      origin: 'bottom',
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
            <div className="xl:mx-28">
              <div className="flex items-center p-4 border border-zinc-300 rounded-lg dark:border-zinc-800 profile">
                <div className="flex-shrink-0 h-32 w-32 bg-zinc-50 dark:bg-zinc-800">
                  <img className="h-full w-full object-cover rounded-md" src={me} alt="luan"/>
                </div>
                <div className="ml-4 flex-grow ">
                  <h2 className="text-xl font-bold text-zinc-700 dark:text-zinc-300">Luan Rodrigues</h2>
                  <p className="text-zinc-500 dark:text-zinc-400 font-normal text-sm mb-8">Fullstack Developer</p>
                  <div className="hidden md:flex text-xs flex-wrap items-center mt-4 gap-2">
                    <Badge variant="default" className='font-normal techs'>ReactJS</Badge>
                    <Badge variant="default" className='font-normal techs'>JavaScript</Badge>
                    <Badge variant="default" className='font-normal techs'>TypeScript</Badge>
                    <Badge variant="default" className='font-normal techs'>NodeJS</Badge>
                  </div>
              </div>
            </div>

            <div className="mt-4 flex items-center p-4 border border-zinc-300 rounded-lg dark:border-zinc-800 profile">
              <div className="xl:mx-4 flex-grow">
                <h2 className="mb-8 text-xl font-bold text-zinc-700 dark:text-zinc-300">Hi there!<Rocket className='inline ml-1 w-5 h-5'  stroke-width="1.5"></Rocket> </h2>
                <p className="my-3 text-justify text-zinc-500 dark:text-zinc-400 text-sm mb-8">I'm Luan, a fullstack developer with experience in <strong>ReactJS</strong>, <strong>React Native</strong>, <strong>Javascript</strong>, <strong>Typescript</strong>, and <strong>NodeJS</strong>. I create integrated and innovative solutions, always eager to explore new horizons in the world of technology. Let’s bring ideas to life and create impactful digital experiences together!</p>
              </div>
            </div>

            <div className="mt-4 gap-4 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 xl:grid-cols-2 profile">
                <div className="flex-shrink-0 w-full p-4 border border-zinc-300 rounded-lg dark:border-zinc-800 h-full">
                  <h2 className="xl:mx-4 mb-8 text-xl font-bold text-zinc-700 dark:text-zinc-300">Academic education<GraduationCap className='inline ml-1 w-5 h-5'  stroke-width="1.5"></GraduationCap> </h2>

                  <div className="xl:mx-4">
                    <div className="group rounded-xl flex items-center gap-4 bg-zinc-50 dark:bg-zinc-950 pb-5 xl:p-5 card">
                      <div className="group-hover:ring-8 ring-blue-600 ring-opacity-50 rounded-full overflow-hidden transition-all duration-300 ease-in-out">
                        <img src={si} alt="Descrição da imagem" className="w-12 h-auto transition-all duration-300 ease-in-out"/>
                      </div>
                      <div className="font-medium dark:text-white">
                        <AlertTitle className='mb-2'>Information Systems</AlertTitle>
                        <p className='text-zinc-500 dark:text-zinc-400 text-xs font-normal'>
                          Degree in Information Systems from UNINTA College.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="xl:mx-4">
                    <div className="group rounded-xl flex items-center gap-4 bg-zinc-50 dark:bg-zinc-950 pb-5 xl:p-5 card">
                      <div className="group-hover:ring-8 ring-rose-500 ring-opacity-50 rounded-full overflow-hidden transition-all duration-300 ease-in-out">
                        <img src={fiap} alt="Descrição da imagem" className="w-12 h-auto transition-all duration-300 ease-in-out"/>
                      </div>
                      <div className="font-medium dark:text-white">
                        <AlertTitle className='mb-2'>IT Infrastructure Management</AlertTitle>
                        <p className='text-zinc-500 dark:text-zinc-400 text-xs font-normal'>
                          Course by FIAP institution.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="xl:mx-4">
                    <div className="group rounded-xl flex items-center gap-4 bg-zinc-50 dark:bg-zinc-950 pb-5 xl:p-5 card">
                      <div className="group-hover:ring-8 ring-green-700 ring-opacity-50 rounded-full overflow-hidden transition-all duration-300 ease-in-out">
                        <img src={ifce} alt="Descrição da imagem" className="w-12 h-auto transition-all duration-300 ease-in-out"/>
                      </div>
                      <div className="font-medium dark:text-white">
                        <AlertTitle className='mb-2'>Data Pre-Processing in Python</AlertTitle>
                        <p className='text-zinc-500 dark:text-zinc-400 text-xs font-normal'>
                          Training by the Federal Institute of Ceará (IFCE).
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="xl:mx-4">
                    <div className="group rounded-xl flex items-center gap-4 bg-zinc-50 dark:bg-zinc-950 pb-5 xl:p-5 card">
                      <div className="group-hover:ring-8 ring-violet-700 ring-opacity-50 rounded-full overflow-hidden transition-all duration-300 ease-in-out">
                        <img src={rocketseat} alt="Descrição da imagem" className="w-12 h-auto transition-all duration-300 ease-in-out"/>
                      </div>
                      <div className="font-medium dark:text-white">
                        <AlertTitle className='mb-2'>Discover</AlertTitle>
                        <p className='text-zinc-500 dark:text-zinc-400 text-xs font-normal'>
                          Web development course by Rocketseat.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="xl:mx-4">
                    <div className="group rounded-xl flex items-center gap-4 bg-zinc-50 dark:bg-zinc-950 pb-5 xl:p-5 card">
                      <div className="group-hover:ring-8 ring-red-500 ring-opacity-50 rounded-full overflow-hidden transition-all duration-300 ease-in-out">
                        <img src={fundacaoBradesco} alt="Descrição da imagem" className="w-12 h-auto transition-all duration-300 ease-in-out"/>
                      </div>
                      <div className="font-medium dark:text-white">
                        <AlertTitle className='mb-2'>IT Systems Projects</AlertTitle>
                        <p className='text-zinc-500 dark:text-zinc-400 text-xs font-normal'>
                          Course by Bradesco Foundation.
                        </p>
                      </div>
                    </div>
                  </div>
              </div>

              <div className="flex-shrink-0 w-full p-4 border border-zinc-300 rounded-lg dark:border-zinc-800 h-full profile">
                <h2 className="xl:mx-4 mb-8 text-xl font-bold text-zinc-700 dark:text-zinc-300 title">My favorite songs<Headphones className='inline ml-1 w-5 h-5'  stroke-width="1.5"></Headphones> <Badge variant="secondary" className='ml-3'>At this moment</Badge></h2>
                <div className="xl:mx-2 pb-5 xl:p-5 mb-4" >
                  <div className="cardMusic">
                    <Song trackId="2TdmH7Ei4hvys9sBqIV5B4" />
                  </div>
                  <div className="cardMusic">
                    <Song trackId="2t8yVaLvJ0RenpXUIAC52d" />
                  </div>
                  <div className="cardMusic">
                    <Song trackId="7KA4W4McWYRpgf0fWsJZWB" />
                  </div>
                  <div className="cardMusic">
                    <Song trackId="1zI3RU0boCVsAXChjCvESu" />
                  </div>
                </div>
              </div>
            </div>
          </div>
      </div>

        );
    };
    
export default AboutMe;