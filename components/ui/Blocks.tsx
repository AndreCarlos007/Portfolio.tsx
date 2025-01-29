import { motion } from 'framer-motion';

// Definição do objeto de animação para o efeito de "escada" nos blocos
const stairAnimation = {
  initial: {
    top: '0%', // Estado inicial do bloco, posicionado no topo
  },
  animate: {
    top: '100%', // Animação para mover o bloco para o final (100% do tamanho)
  },
  exit: {
    top: ['100%', '0%'], // Animação para a saída: o bloco volta para o topo
  },
};

// Função para calcular o índice reverso para um efeito de animação em cascata
const reverseIndex = (index: number) => {
  const totalStep = 6; // Número total de blocos (passos)
  return totalStep - index - 1; // Reverte o índice para obter o delay inverso
};

// Componente funcional Blocks
const Blocks = () => {
  return (
    <>
      {/* Mapeia um array de 6 elementos para renderizar 6 blocos animados */}
      {[...Array(6)].map((_: unknown, index: number) => {
        return (
          <motion.div
            key={index} // Usa o índice como chave única para cada bloco
            variants={stairAnimation} // Aplica as animações definidas
            initial="initial" // Define o estado inicial
            animate="animate" // Define o estado de animação
            exit="exit" // Define o comportamento de saída
            transition={{
              duration: 0.18, // Duração de cada transição
              delay: reverseIndex(index) * 0.1, // Calcula o delay com base no índice
              ease: 'easeInOut', // Estilo de transição (inicia lento, acelera e desacelera)
            }}
            className="relative bg-black h-full w-full" 
          />
        );
      })}
    </>
  );
};

export default Blocks;
