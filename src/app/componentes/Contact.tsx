"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section
      id="contact"
      className="flex flex-col items-center justify-center text-center py-20 px-6 md:px-20 text-textPrimary"
    >
      <motion.p
        className="text-accent font-mono text-sm md:text-base"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        04. O que vem a seguir?
      </motion.p>

      <motion.h2
        className="text-4xl md:text-5xl font-bold mt-2"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        Entre em Contato
      </motion.h2>

      <motion.p
        className="text-textSecondary max-w-xl mt-4 text-sm md:text-lg"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.4 }}
      >
        No momento, estou buscando novas oportunidades e adoraria ouvir de
        você! Se você tem um projeto interessante, uma oportunidade de trabalho
        ou apenas quer bater um papo, minha caixa de entrada está sempre aberta.
        Vamos conversar!
      </motion.p>

      <motion.a
        href="mailto:beamoraes.work@gmail.com"
        className="mt-6 inline-block border border-accent text-accent px-6 py-3 rounded-md text-sm md:text-base transition duration-300 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[4px_4px_0px_0px_#E4A6D3]"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.6 }}
      >
        Diga Olá!
      </motion.a>
    </section>
  );
}