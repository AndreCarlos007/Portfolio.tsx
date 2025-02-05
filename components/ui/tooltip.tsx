'use client'; // Indica que este componente deve ser executado no lado do cliente

import * as React from 'react';
import * as TooltipPrimitive from '@radix-ui/react-tooltip'; // Importa a biblioteca Radix UI para tooltips
import { type ClassValue, clsx } from 'clsx'; // Importa clsx para manipulação de classes condicionalmente
import { twMerge } from 'tailwind-merge'; // Importa twMerge para mesclar classes Tailwind de forma eficiente

// Função utilitária para combinar classes CSS
function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs)); // Usa clsx para manipular classes condicionalmente e twMerge para evitar conflitos do Tailwind
}

// Definição dos componentes de Tooltip fornecidos pelo Radix UI
const TooltipProvider = TooltipPrimitive.Provider; // Provedor que envolve todos os tooltips
const Tooltip = TooltipPrimitive.Root; // Componente raiz do Tooltip
const TooltipTrigger = TooltipPrimitive.Trigger; // Elemento que ativa o Tooltip

// Interface para definir as propriedades do TooltipContent
interface TooltipContentProps extends React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content> {
  className?: string; // Permite estilização adicional via classes
  sideOffset?: number; // Define o deslocamento do tooltip em relação ao elemento acionador
}

// Componente que define o conteúdo do Tooltip
const TooltipContent = React.forwardRef<
  React.ElementRef<typeof TooltipPrimitive.Content>,
  TooltipContentProps
>(({ className, sideOffset = 4, ...props }, ref) => (
  <TooltipPrimitive.Content
    ref={ref}
    sideOffset={sideOffset} // Define o deslocamento do tooltip
    className={cn(
      'z-50  rounded-md border border-slate-200 bg-white px-3 py-1.5 text-sm text-slate-950 shadow-md animate-in fade-in-0 zoom-in-95',
      'data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95',
      'data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
      'dark:border-slate-800 dark:bg-slate-950 dark:text-slate-50', // Adaptação para temas escuros
      className // Permite adicionar classes extras via props
    )}
    {...props} // Passa outras propriedades para o componente
  />
));

TooltipContent.displayName = TooltipPrimitive.Content.displayName; // Define um nome para o componente para facilitar depuração

// Exportação dos componentes de Tooltip para reutilização
export { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider };
