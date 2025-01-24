'use client';

import { useEffect, useMemo, useState } from 'react';
import { Cloud, fetchSimpleIcons, renderSimpleIcon, SimpleIcon } from 'react-icon-cloud';

export const cloudProps = {
  containerProps: {
    style: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      height: 'auto',
      paddingTop: 0,
    },
  },
  options: {
    reverse: true,
    depth: 1,
    wheelZoom: false,
    imageScale: 2,
    activeCursor: 'default',
    tooltip: 'native',
    initial: [0.1, -0.1], // Define o ponto inicial da animação
    clickToFront: 500,
    tooltipDelay: 0,
    outlineColour: '#0000',
    maxSpeed: 0.03, // Velocidade máxima da animação
    minSpeed: 0.01, // Velocidade mínima da animação
    dragControl: false,
  },
};

export const renderCustomIcon = (icon: SimpleIcon) => {
  return renderSimpleIcon({
    icon,
    bgHex: '#f3f2ef', // Cor de fundo para todos os ícones
    fallbackHex: '#6e6e73', // Cor de fallback para todos os ícones
    minContrastRatio: 1.2, // Contraste mínimo
    size: 50,
    aProps: {
      href: undefined,
      target: undefined,
      rel: undefined,
      onClick: (e) => e.preventDefault(),
    },
  });
};

interface IconCloudProps {
  iconSlugs: string[];
}

export default function IconCloud({ iconSlugs }: IconCloudProps) {
  const [data, setData] = useState<{ simpleIcons: Record<string, SimpleIcon> } | null>(null);

  useEffect(() => {
    fetchSimpleIcons({ slugs: iconSlugs }).then(setData);
  }, [iconSlugs]);

  const renderedIcons = useMemo(() => {
    if (!data) return null;

    return Object.values(data.simpleIcons).map((icon: SimpleIcon) =>
      renderCustomIcon(icon)
    );
  }, [data]);

  return (
    // @ts-expect-error: Esse erro aqui é esperado
    <Cloud {...cloudProps}>
      {renderedIcons}
    </Cloud>
  );
}