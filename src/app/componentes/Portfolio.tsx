"use client";

import Image from "next/image";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "BlackoutFlix",
    description:
      "Aplicação em React com API de filmes, músicas e séries com conteúdo e participações de pessoas pretas.",
    image: "/images/blackoutflix.png",
    technologies: ["React", "Fetch API", "Javascript", "React-Router-Dom"],
    repo: "https://github.com/beamoraess/BlackoutFlix",
    demo: "https://603e644e8301c1091fa3fa2e--blackoutflix.netlify.app/",
  },
  {
    title: "Portfólio Beatriz Moraes",
    description:
      "Portfólio criado para fins de estudo de Frammer Motion, Next.JS e Tailwind CSS",
    image: "/images/portfoliobea.JPG",
    technologies: ["Next.JS", "TypeScript", "Framer Motion", "Tailwind.CSS"],
    repo: "https://github.com/example2",
    demo: "https://espacodelas.netlify.app/",
  },
  {
    title: "ASOEC Login",
    description:
      "Página de login que desenvolvi na empresa I9 no inicio da refatoração do sistema legado em PHP com api mockada para demonstração. Usuario: 102030 Senha: 123456",
    image: "/images/asoecprototipo.JPG",
    technologies: ["Vite.JS", "Redux", "React-Router-Dom", "Axios" ],
    repo: "https://github.com/beamoraess/frontend-sistema-integrado-cp",
    demo: "https://asoec-prototipo.netlify.app/",
  },
  {
    title: "SpiderVerso",
    description:
      "Este é o repositório do projeto Spider-Verse, desenvolvido durante uma live no Youtube em parceria com a DIO. O projeto consiste em uma aplicação interativa inspirada no universo do Homem-Aranha, usando as principais stacks front-end. ",
    image: "/images/spiderman-project.JPG",
    technologies: ["Next.js", "TypeScript", "Framer Motion" ],
    repo: "https://github.com/beamoraess/aranhaversobea.github.io",
    demo: "https://aranhaversobea.github.io",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-16 text-white">
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        <h2 className="text-xl md:text-2xl font-bold text-textSecondary flex items-center">
          <span className="font-mono mr-2 text-textSecondary">03.</span> Projetos profissionais e pessoais que já desenvolvi
          <span className="ml-4 flex-1 border-t border-borderColor"></span>
        </h2>
        <div className="mt-8 space-y-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row items-center gap-6"
            >
              <div className="w-full md:w-1/2 relative group">
                <Image
                  src={project.image}
                  width={600}
                  height={350}
                  alt={project.title}
                  className="rounded-md transition-transform group-hover:scale-105"
                />
              </div>
              <div className="w-full md:w-1/2 text-left">
                <h3 className="text-lg md:text-xl font-bold">
                  {project.title}
                </h3>
                <p className="mt-2 text-gray-300 bg-bgSecondary p-4 rounded-md">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs text-gray-400 bg-gray-700 px-2 py-1 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4 mt-4">
                  <a
                    href={project.repo}
                    target="_blank"
                    className="text-white-300 hover:text-textSecondary transition"
                  >
                    <FaGithub size={20} />
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    className="text-white-300 hover:text-textSecondary transition"
                  >
                    <FaExternalLinkAlt size={20} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
