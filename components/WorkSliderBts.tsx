'use client'; // Indica que este componente deve ser executado no lado do cliente

import { BsCaretLeft, BsCaretRight } from 'react-icons/bs'; // Importa ícones para os botões de navegação

// Define a interface para as propriedades do componente
interface WorkSliderBtnsProps {
  onPrev: () => void; // Função chamada ao clicar no botão de voltar
  onNext: () => void; // Função chamada ao clicar no botão de avançar
  containerStyles: string; // Classe CSS para estilização do container dos botões
  btnStyles: string; // Classe CSS para estilização dos botões individuais
  iconsStyles: string; // Classe CSS para estilização dos ícones dentro dos botões
}

// Componente funcional que recebe as propriedades definidas na interface
const WorkSliderBtns: React.FC<WorkSliderBtnsProps> = ({
  onPrev,
  onNext,
  containerStyles,
  btnStyles,
  iconsStyles,
}) => {
  return (
    <div className={containerStyles}> {/* Container dos botões de navegação */}
      {/* Botão para ir ao slide anterior */}
      <button 
        className={btnStyles} 
        onClick={onPrev} // Chama a função onPrev ao clicar
        type="button"
        aria-label="Previous slide" // Acessibilidade: descrição para leitores de tela
      >
        <BsCaretLeft className={iconsStyles} /> {/* Ícone de seta para a esquerda */}
      </button>

      {/* Botão para ir ao próximo slide */}
      <button 
        className={btnStyles} 
        onClick={onNext} // Chama a função onNext ao clicar
        type="button"
        aria-label="Next slide" // Acessibilidade: descrição para leitores de tela
      >
        <BsCaretRight className={iconsStyles} /> {/* Ícone de seta para a direita */}
      </button>
    </div>
  );
};

export default WorkSliderBtns; // Exporta o componente para ser usado em outros arquivos
