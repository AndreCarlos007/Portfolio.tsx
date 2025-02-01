"use client"; // Indica que este componente é renderizado no lado do cliente
import { NavLinks } from "@/constants"; // Importa um array de links de navegação a partir das constantes
import Link from "next/link"; // Componente de link do Next.js para navegação entre páginas
import { usePathname } from "next/navigation"; // Hook para acessar o caminho atual da URL
import React, { useEffect, useState } from "react"; // Importa React e hooks para gerenciar estado e efeitos colaterais

// Componente de navegação
const Navigation = () => {
  // Estado para determinar se o usuário está mudando de rota
  const [isRouting, setisRouting] = useState(false);

  // Estado para armazenar o caminho atual da URL
  const path = usePathname(); // Obtém o caminho da rota atual
  const [prevPath, setPrevPath] = useState("/"); // Guarda a rota anterior, com valor inicial "/"

  // Efeito que detecta mudanças na rota e ativa o estado de transição (isRouting)
  useEffect(() => {
    if (prevPath !== path) {
      setisRouting(true); // Ativa o estado de transição quando a rota muda
    }
  }, [path, prevPath]);

  // Efeito que desativa o estado de transição após 1,2 segundos
  useEffect(() => {
    if (isRouting) {
      setPrevPath(path); // Atualiza a rota anterior para a rota atual
      const timeout = setTimeout(() => {
        setisRouting(false); // Desativa o estado de transição após o tempo definido
      }, 1200);

      return () => clearTimeout(timeout); // Limpa o timeout se o componente for desmontado
    }
  }, [isRouting]);

  // Renderização do componente
  return (
    <div className="flex flex-col items-center md:justify-center gap-y-4 fixed h-max bottom-0 mt-auto md:right-[2%] z-50 top-0 w-full
    md:w-16 md:max-w-md md:h-screen ">
      <div
        // Posiciona o menu na horizontal com margem à esquerda de 20%
        className="flex w-full md:flex-col items-center justify-between md:justify-center gap-y-10 px-4 sm:px-6 md:px-0 h-[80px] 
        md:h-max py-8 bg-[#0000008a] backdrop-blur-sm text-3xl md:text-xl rounded-t-[3rem] md:rounded-full"
      >
        {/* Estado de transição */}
        {isRouting}
        {/* Itera sobre o array de links de navegação e renderiza cada link */}
        {NavLinks.map((nav) => (
          <Link key={nav.name} href={nav.link} className="">
            {/* Ícone correspondente ao link */}
            <nav.icon
              className={`w-[40px] hover:h-[42px] transition-all duration-300 ${
                path === nav.name ? "text-purple-700" : "text-white"
              }`} // Aplica a cor ao ícone dependendo se é a rota ativa ou não
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navigation;
