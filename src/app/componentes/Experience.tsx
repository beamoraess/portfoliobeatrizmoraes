"use client";

import { useState } from "react";

const experiences = [
  {
    company: "IEBT Innovation",
    role: "Desenvolvedora Front End",
    period: "2024 – Atual",
    description: [
      "Desenvolvo soluções para o sistema de consignado com React, Redux e Ant Design, componentizando páginas reutilizáveis.",
      "Implementei um monitoramento que renova tokens ativos e desloga usuários inativos, garantindo segurança e fluidez",
      "aperfeiçoei a comunicação entre front-end e back-end por meio de integrações eficientes com APIs REST utilizando Axios.",
    ],
  },
  {
    company: "Aerolito",
    role: "Pesquisadora de Futuros",
    period: "2024",
    description: [
      "Conduzi pesquisas para identificar sinais de mudança e tendências emergentes utilizando o método das 3 ondas para projetar cenários futuros e oportunidades estratégicas.",
      "Desenvolvi expertise em estratégias de negócios e comportamento emergente dos consumidores, explorando o uso de IA, blockchain e robótica para criar soluções inovadoras em diversos contextos.",
    ],
  },
  {
    company: "I9 Soluções",
    role: "Desenvolvedora Front End",
    period: "2023",
    description: [
      "Atuei na refatoração e sustentação das plataformas educacionais da ASOEC, modernizando sistemas legados com PHP e JavaScript.",
      "Desenvolvi um novo fluxo de login e termo de aceite para professores.",
      "Liderei a renovação da interface de listagem e edição de notas com Next.js, React Hooks, Redux, Docker e AWS.",
    ],
  },
  {
    company: "TQI",
    role: "Desenvolvedora Front End",
    period: "2021 – 2022",
    description: [
      "Participei do desenvolvimento completo de novas Landing Pages e demandas do Blog PagSeguro, desde a concepção até a entrega final",
      "Utilizei stacks modernas, incluindo SASS, Tailwind CSS, JavaScript, React.js, PHP (WordPress) e Docker, seguindo a metodologia ágil para garantir eficiência e qualidade nos projetos entregues.",
    ],
  },
];

export default function Experience() {
  const [selected, setSelected] = useState(0);

  return (
    <section id="experience" className="py-16 text-white">
      <div className="max-w-5xl mx-auto px-6 md:px-12">
          <h2 className="text-xl md:text-2xl font-bold text-textSecondary flex items-center">
            <span className="font-mono mr-2 text-textSecondary">02.</span> Onde já
            trabalhei
            <span className="ml-4 flex-1 border-t border-borderColor"></span>
          </h2>
        <div className="flex flex-col md:flex-row mt-8">
          <div className="md:w-1/4 flex flex-col border-l border-white-700">
            {experiences.map((exp, index) => (
              <button
                key={index}
                className={`py-3 px-4 text-left transition-all ${
                  selected === index
                    ? "text-textSecondary border-l-2 border-textSecondary bg-bgSecondary"
                    : "text-white hover:text-textSecondary"
                }`}
                onClick={() => setSelected(index)}
              >
                {exp.company}
              </button>
            ))}
          </div>
          <div className="md:w-3/4 p-6 md:p-8">
            <h3 className="text-lg md:text-xl font-bold">
              {experiences[selected].role}{" "}
              <span className="text-textSecondary">
                @ {experiences[selected].company}
              </span>
            </h3>
            <p className="text-gray-400 mt-1">{experiences[selected].period}</p>

            <ul className="mt-4 space-y-2">
              {experiences[selected].description.map((desc, index) => (
                <li key={index} className="flex items-start text-white-300">
                  <span className="text-textSecondary mr-2">▸</span>
                  {desc}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
