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
  'mongodb',
  'vercel',
  'docker',
  'git',
  'github',
  'visualstudiocode',
  'figma',
  'linkedin',
  'vite',
  'windows',
  'mysql',
  'discord',
  'axios',
  'npm',
  'laragon',
  'prisma',
  'adonisjs',
  'amazonwebservices',
  'terraform',
  '	claude',
  'openai',
  'kubernetes',
  
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

export default IconCloudDemo
