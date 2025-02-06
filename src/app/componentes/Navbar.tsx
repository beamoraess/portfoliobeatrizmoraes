"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [active, setActive] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full text-textPrimary shadow-md py-4 px-6 flex justify-between items-center bg-bgGradientStart z-[1000]">
      <div className="flex items-center">
        <div className="border-2 border-textSecondary p-2 rounded-md">
          <span className="text-textSecondary font-bold text-xl">BM</span>
        </div>
      </div>
      <ul className="hidden md:flex space-x-6 text-sm text-gray-300">
        {[
          { id: "01", label: "Sobre Mim", href: "#about" },
          { id: "02", label: "Experiências", href: "#experience" },
          { id: "03", label: "Projetos", href: "#projects" },
          { id: "04", label: "Contatos", href: "#contact" },
        ].map((item, index) => (
          <li key={index}>
            <Link href={item.href} className="hover:text-textSecondary transition">
              <span className="font-mono text-textSecondary">{item.id}.</span> {item.label}
            </Link>
          </li>
        ))}
      </ul>
      <Link
        href="/documents/BeatrizMSilvaCVPortfolio.pdf"
        target="_blank"
        className="font-mono relative hidden md:block border border-textSecondary text-textSecondary px-4 py-2 rounded-md transition duration-300 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[4px_4px_0px_0px_#E4A6D3]"
      >
        Currículo
      </Link>
      <button
        className="md:hidden text-gray-300 focus:outline-none"
        onClick={() => setActive(!active)}
      >
        ☰
      </button>
      {active && (
        <div className="absolute top-16 right-6  border border-textSecondary rounded-md p-4 text-sm flex flex-col space-y-3">
          <ul>
            {[
              { id: "01", label: "Sobre", href: "#about" },
              { id: "02", label: "Experiências", href: "#experience" },
              { id: "03", label: "Portfólio", href: "#work" },
              { id: "04", label: "Contatos", href: "#contact" },
            ].map((item, index) => (
              <li key={index}>
                <Link href={item.href} className="text-gray-300 hover:text-textSecondary transition">
                  <span className="text-textSecondary">{item.id}.</span> {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href="/documents/BeatrizMSilvaCVPortfolio.pdf"
            target="_blank"
            className="border border-textSecondary text-textSecondary px-4 py-2 rounded-md hover:bg-textSecondary hover:text-black transition"
          >
            Currículo
          </Link>
        </div>
      )}
    </nav>
  );
}