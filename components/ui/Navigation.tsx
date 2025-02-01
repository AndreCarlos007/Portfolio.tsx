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
    <div className="relative h-full">
      <div
        // Posiciona o menu na horizontal com margem à esquerda de 20%
        className="left-[17%] md:left-[20%] fixed gap-1 z-[50] -bottom-20 w-[70%] md:w-[60%] lg:w-[32%] max-h-[150px] rounded-full flex justify-between items-center  bg-[#00000077] md:pl-16 px-7 py-7 overflow-hidden"
      >
        {/* Estado de transição */}
        {isRouting}

        {/* Itera sobre o array de links de navegação e renderiza cada link */}
        {NavLinks.map((nav) => (
          <Link key={nav.name} href={nav.link} className="mb-16 pl- min-w-[15%]">
            {/* Ícone correspondente ao link */}
            <nav.icon
              className={`w-[22px] h-[24px] hover:w-[25px] transition-all duration-300 ${
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
