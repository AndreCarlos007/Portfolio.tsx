'use client';

// Importações necessárias do React e bibliotecas auxiliares
import { AnimatePresence, motion } from 'framer-motion'; // Framer Motion para animações de elementos
import { usePathname } from 'next/navigation'; // Hook para acessar o caminho atual da URL no Next.js
import { ReactNode } from 'react'; // Tipo ReactNode para tipagem de filhos do componente

// Interface para tipar as propriedades do componente
interface TransitionPageProps {
  children: ReactNode; // Define que o componente pode receber qualquer tipo de nó React como filhos
}

// Componente funcional TransitionPage
const TransitionPage: React.FC<TransitionPageProps> = ({ children }) => {
  // Obtém o caminho atual da URL usando o hook usePathname
  const pathname = usePathname();

  return (
    <AnimatePresence> 
      {/* Wrapper para animações de entrada e saída de elementos */}
      <div key={pathname}>
        {/* Animação do fundo roxo que desaparece com opacidade */}
        <motion.div
          initial={{ opacity: 1 }} // Estado inicial com opacidade total
          animate={{
            opacity: 0, // Animação para desaparecer (opacidade zero)
            transition: { delay: 0.58, duration: 0.5, ease: 'easeInOut' }, // Configuração de tempo e estilo de transição
          }}
          className="h-screen w-screen fixed bg-purple-900 top-0 pointer-events-none z-[101]"
        />
        {/* Renderização dos filhos do componente */}
        {children}
      </div>
    </AnimatePresence>
  );
};

export default TransitionPage;
