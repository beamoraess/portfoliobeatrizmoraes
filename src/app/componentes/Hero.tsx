"use client";

import { motion } from "framer-motion";
import ProfileImage from "./ProfileImage";

export default function Hero() {
  return (
    <section
      id="about"
      className="h-auto min-h-[80vh] flex flex-col md:flex-row justify-center items-center px-6 md:px-20 text-white gap-12 pt-32 pb-16"
    >
      <div className="md:w-1/2">
        <motion.p
          className="font-mono text-textSecondary text-sm md:text-base"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Olá, meu nome é
        </motion.p>
        <motion.h1
          className="font-sans text-4xl md:text-6xl font-bold mt-2"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Beatriz Moraes.
        </motion.h1>
        <motion.h2
          className="font-sans text-3xl md:text-5xl font-bold text-gray-400 mt-2"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Desenvolvedora Front End
        </motion.h2>

        <motion.p
          className="text-gray-400 max-w-2xl mt-4 text-sm md:text-lg"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
        >
          Desenvolvedora Front-End com expertise em TypeScript e React,
          estudando Python e Machine Learning para aplicações inovadoras. Com
          experiência em estratégias de negócios, pesquisa de tendências
          tecnológicas e impacto social, atuo na criação de soluções escaláveis
          e integradas que unem tecnologia, educação e inovação. Foco em
          desenvolvimento ágil, UI/UX e otimização de desempenho em aplicações
          web.
        </motion.p>

        <motion.a
          href="/#projects"
          className="font-mono mt-6 inline-block border border-textSecondary text-textSecondary px-6 py-3 rounded-md text-sm md:text-base transition duration-300 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[4px_4px_0px_0px_#E4A6D3]"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.8 }}
        >
          Veja meus projetos!
        </motion.a>
      </div>
      <motion.div
        className="flex justify-center items-center relative group"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
      >
        <ProfileImage />
      </motion.div>
    </section>
  );
}
