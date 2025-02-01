'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { usePathname } from 'next/navigation';

import Blocks from './Blocks'; // Componente Blocks que renderiza blocos animados

// Componente funcional TransitionBlocks
const TransitionBlocks = () => {
  // Obtém o caminho atual da URL usando o hook usePathname
  const pathname = usePathname();

  return (
    <>
      {/* Wrapper para animações de entrada e saída usando AnimatePresence */}
      <AnimatePresence mode="wait">
        {/* Cada mudança de rota gera uma nova chave no div */}
        <div key={pathname}>
          {/* Container para renderizar o componente de blocos animados */}
          <div className="h-screen w-screen fixed top-0 left-0 right-0 pointer-events-none z-[1000] flex">
            <Blocks /> {/* Renderiza os blocos animados */}
          </div>

          {/* Animação de transição para desvanecimento da página */}
          <motion.div
            className="h-screen w-screen fixed top-0 pointer-events-none"
            initial={{ opacity: 1 }} // Estado inicial com opacidade total
            animate={{
              opacity: 0, // Animação para desaparecer (opacidade zero)
              transition: { delay: 1, duration: 0.4, ease: 'backInOut' }, // Configuração de tempo e estilo da transição
            }}
          />
        </div>
      </AnimatePresence>
    </>
  );
};

export default TransitionBlocks;
