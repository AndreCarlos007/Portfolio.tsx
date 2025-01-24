import IconCloud from '@/components/ui/IconCloud';

const slugs = [
  'react',
  'typescript',
  'javascript',
  'html5',
  'css3',
  'nodedotjs',
  'express',
  'tailwindcss',
  'nextdotjs',
  'prisma',
  'postgresql',
  'mongodb',
  'vercel',
  'android',
  'docker',
  'git',
  'github',
  'visualstudiocode',
  'figma',
  'linkedin',
  'vite',
  'windows',
  'php',
  'laravel',
  'mysql',
  'discord',
  'axios',
  'npm',
  'laragon',
  'prisma',
  'adonisjs'
];

export function IconCloudDemo() {
  return (
    <div
      className="relative flex size-full max-w-lg items-center justify-center overflow-hidden
     border-none bg-background px-10 pt-8"
    >
      <IconCloud iconSlugs={slugs} />
    </div>
  );
}
