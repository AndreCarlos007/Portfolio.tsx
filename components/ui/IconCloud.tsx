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
    activeCursor: 'default' as const,
    tooltip: 'native' as const,
    initial: [0.1, -0.1],
    clickToFront: 500,
    tooltipDelay: 0,
    outlineColour: '#0000',
    maxSpeed: 0.03,
    minSpeed: 0.01,
    dragControl: false,
  },
};

export const renderCustomIcon = (icon: SimpleIcon) => {
  return renderSimpleIcon({
    icon,
    bgHex: '#f3f2ef',
    fallbackHex: '#6e6e73',
    minContrastRatio: 1.2,
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
    return Object.values(data.simpleIcons).map((icon: SimpleIcon) => renderCustomIcon(icon));
  }, [data]);

  return (
      <Cloud {...cloudProps}>{renderedIcons}</Cloud>
  );
}
