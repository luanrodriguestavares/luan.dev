import { Circle } from 'lucide-react';

const Timeline = () => {
    return (
        <div className="flex flex-col lg:flex-row justify-between items-start rounded bg-gray-800 dark:bg-gray-950 p-4">
            <div id="timeline" className="p-4 border border-1 border-gray-700 rounded overflow-hidden relative w-full lg:w-1/2 h-96 mb-12">        
                <h1 className="text-2xl sm:text-xl font-bold dark:text-white mb-8">Professional Timeline</h1>

                <ol className="relative">
                    <li id="time1" className="flex items-start mb-10">
                        <span className="absolute left-3 h-full bg-blue-100 dark:bg-gray-700" style={{ width: '2px' }}></span>
                        <span className="absolute flex items-center justify-center left-0 w-6 h-6 bg-indigo-100 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-indigo-900">
                            <Circle className="w-2.5 h-2.5 text-indigo-800 dark:text-indigo-300" />
                        </span>
                        <div className="ml-3 pl-3">
                            <h3 className="ml-4 mb-1 text-md font-semibold text-gray-900 dark:text-white">Start of Graduation</h3>
                            <time className="ml-4 block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">February 2022 to Present</time>
                            <p className="ml-4 mb-4 text-gray-500 sm:text-sm dark:text-gray-400 relative">I started my graduation in Information Systems at Centro Universitário Uninta</p>
                        </div>
                    </li>
                    <li id="time2" className="flex items-start mb-4">
                        <div className="relative">
                            <span className="absolute left-3 h-full bg-blue-100 dark:bg-gray-700" style={{ width: '2px' }}></span>
                            <span className="absolute flex items-center justify-center left-0 w-6 h-6 bg-indigo-100 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-indigo-900">
                                <Circle className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" />
                            </span>
                            <div className="ml-3 pl-3">
                                <h3 className="ml-4 mb-1 text-md font-semibold text-gray-900 dark:text-white">Youth Apprentice</h3>
                                <time className="ml-4 block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">July 2023 to Present</time>
                                <p className="ml-4 text-sm font-normal text-gray-500 dark:text-gray-400">I worked as a full-stack developer on a project for industrial process automation.</p>
                            </div>
                        </div>
                    </li>
                </ol>
            </div>
        </div>
    );
};

export default Timeline;