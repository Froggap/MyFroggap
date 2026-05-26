import { BiLogoVisualStudio } from 'react-icons/bi';
import { FaJava, FaCss3Alt, FaHtml5, FaMarkdown, FaReact, FaAngular, FaGitAlt, FaDocker, FaTrello } from 'react-icons/fa';
import { PiFileSql } from 'react-icons/pi';
import { RiNextjsFill, RiTailwindCssFill } from 'react-icons/ri';
import { SiJavascript, SiTypescript, SiMysql, SiMongodb, SiExpress, SiNodedotjs, SiChakraui, SiNestjs, SiPostman, SiNotion, SiVsco, SiVscodium, SiSpring, SiIntellijidea, SiVercel, SiRailway, SiGithub, SiCloudflare, SiFirebase } from 'react-icons/si';
import { TbBrandAstro } from 'react-icons/tb';


const languages = [
    { name: 'CSS', icon: <FaCss3Alt className="text-blue-500" /> },
    { name: 'HTML', icon: <FaHtml5 className="text-orange-700" /> },
    { name: 'Java', icon: <FaJava className="text-sky-500" /> },
    { name: 'JavaScript', icon: <SiJavascript className="text-yellow-400" /> },
    { name: 'Markdown', icon: <FaMarkdown className="text-white" /> },
    { name: 'Java', icon: <FaJava className="text-orange-600" /> },
    { name: 'SQL', icon: <PiFileSql className="text-gray-400" /> },
    { name: 'MySQL', icon: <SiMysql className="text-yellow-600" /> },
    { name: 'TypeScript', icon: <SiTypescript className="text-blue-500" /> },
    { name: 'Mongodb ', icon: <SiMongodb className="text-green-500" /> },

];

const frameworks = [
    { name: 'NextJS', icon: <RiNextjsFill className="text-white" /> },
    { name: 'React', icon: <FaReact className="text-blue-500" /> },
    { name: 'Angular', icon: <FaAngular className="text-red-500" /> },
    { name: 'Astro', icon: <TbBrandAstro className='text-orange-400' /> },
    { name: 'Express ', icon: <SiExpress className="text-green-500" /> },
    { name: 'Node.js', icon: <SiNodedotjs className="text-green-600" /> },
    { name: 'Chakra UI ', icon: <SiChakraui className="#00b87c" /> },
    { name: 'NestJS', icon: <SiNestjs className="text-red-500" /> },
    { name: 'Tailwind', icon: <RiTailwindCssFill className="text-sky-500" /> },
    { name: 'Spring Boot', icon: <SiSpring className="text-green-700" /> },
]


const tools = [
    { name: 'Git', icon: <FaGitAlt className="text-orange-500" /> },
    { name: 'Docker', icon: <FaDocker className="text-sky-400" /> },
    { name: 'Postman', icon: <SiPostman className="text-orange-500" /> },
    { name: 'Trello', icon: <FaTrello className="text-blue-600" /> },
    { name: 'Notion', icon: <SiNotion className="text-white" /> },
    { name: 'Visual Studio Code', icon: <BiLogoVisualStudio className="text-blue-500" /> },
    { name: 'IntelliJ IDEA', icon: <SiIntellijidea className="text-white" /> },
]

const cloudServices = [
    { name: 'Vercel', icon: <SiVercel className="text-white" /> },
    { name: 'Railway', icon: <SiRailway className='text-purple-600' /> },
    { name: 'GitHub Pages', icon: <SiGithub className='text-white' /> },
    { name: 'Cloudflare', icon: <SiCloudflare className='text-orange-400' /> },
    { name: 'Firebase', icon: <SiFirebase className='text-orange-400' /> },
]

export default function TechnologySection() {
    return (
        <section className= "flex flex-col  items-center  px-10 py-20 gap-8 w-full min-h-screen">
            <h1 className="text-5xl font-bold text-center text-blue-500">
                Technology
            </h1>

            <div className='flex flex-col gap-5 '>
                <div className="bg-[#1e1e1e] text-white p-6 rounded-2xl shadow-md w-full">
                    <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                        <span>🧋</span> Languages
                    </h2>
                    <div className="grid grid-cols-4 gap-4">
                        {languages.map((lang, i) => (
                            <div key={i} className="flex items-center gap-2 bg-[#2a2a2a] p-2 px-3 rounded-lg">
                                {lang.icon}
                                <span className="text-sm">{lang.name}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="bg-[#1e1e1e] text-white p-6 rounded-2xl shadow-md w-full">
                    <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                        <span>📚</span> Frameworks y librerías
                    </h2>
                    <div className="grid grid-cols-4 gap-4">
                        {frameworks.map((framework, index) => (
                            <div key={index} className="flex items-center gap-2 bg-[#2a2a2a] p-2 px-3 rounded-lg">
                                {framework.icon}
                                <span className="text-sm">{framework.name}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="bg-[#1e1e1e] text-white p-6 rounded-2xl shadow-md w-full">
                    <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                        <span>🛠️</span> Tools
                    </h2>
                    <div className="grid grid-cols-4 gap-4">
                        {tools.map((tool, index) => (
                            <div key={index} className="flex items-center gap-2 bg-[#2a2a2a] p-2 px-3 rounded-lg">
                                {tool.icon}
                                <span className="text-sm">{tool.name}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="bg-[#1e1e1e] text-white p-6 rounded-2xl shadow-md w-full">
                    <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                        <span>🛠️</span> Tools
                    </h2>
                    <div className="grid grid-cols-4 gap-4">
                        {cloudServices.map((cloud, index) => (
                            <div key={index} className="flex items-center gap-2 bg-[#2a2a2a] p-2 px-3 rounded-lg">
                                {cloud.icon}
                                <span className="text-sm">{cloud.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>


        </section>
    )
}