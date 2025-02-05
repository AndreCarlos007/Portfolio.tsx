# Meu Portfólio - Desenvolvido com Next.js, TypeScript e TailwindCSS

Este é o repositório do meu portfólio pessoal, desenvolvido com tecnologias modernas como Next.js, TypeScript e TailwindCSS. O projeto foi criado com foco em desempenho, acessibilidade e uma interface atraente e responsiva. 

## 💪 Sobre o Projeto.
Este portfólio foi projetado para exibir minhas habilidades, experiência e projetos de forma profissional e interativa. Utilizando animações fluidas, sliders dinâmicos e otimização para SEO, ele proporciona uma experiência imersiva para recrutadores e visitantes.

## ✨ Tecnologias Utilizadas.
- **Next.js** - Framework React para renderização otimizada e SEO-friendly.
- **TypeScript** - Tipagem estática para maior segurança e manutenibilidade do código.
- **TailwindCSS** - Estilização eficiente e responsiva baseada em classes utilitárias.
- **React Hooks** - Gerenciamento de estado e efeitos colaterais.
- **Swiper.js** - Slider interativo e responsivo para apresentação de projetos.
- **Framer Motion** - Animações fluidas e performáticas para melhor experiência do usuário.
- **React Icons** - Conjunto de ícones para melhorar a composição visual.
- **React Icon Cloud** - Efeito visual dinâmico para exibição de ícones.

## 📁 Estrutura do Projeto.
```
├── app/
│   ├── about-me/
│   │   ├── page.tsx
│   ├── contact-me/
│   │   ├── page.tsx
│   ├── my-projects/
│   │   ├── page.tsx
│   ├── my-skills/
│   │   ├── page.tsx
│   ├── layout.tsx
│   ├── page.tsx
├── components/
│   ├── ui/
│   │   ├── Blocks.tsx
│   │   ├── iconCloud.tsx
│   │   ├── iconCloudDemo.tsx
│   │   ├── Navbar.tsx
│   │   ├── Navigation.tsx
│   │   ├── tooltip.tsx
│   │   ├── TransitionBlocks.tsx
│   │   ├── TransitionPage.tsx
│   ├── WorkSliderBts.tsx
├── constants/
│   ├── index.ts
├── public/
```

## 🎮 Demonstração.
O portfólio pode ser acessado [aqui](https://seu-site.vercel.app/) e possui as seguintes seções:
- **Sobre Mim**: Apresentação profissional e habilidades principais.
- **Projetos**: Exibição interativa dos projetos desenvolvidos.
- **Habilidades**: Tecnologias e ferramentas com as quais trabalho.
- **Contato**: Links para redes sociais e meio de contato direto.

## 🚀 Instalação e Execução.
Para rodar o projeto localmente, siga os passos abaixo:

```bash
git clone https://github.com/seu-usuario/Portfolio.tsx.git
cd seu-portfolio
npm install  # ou yarn install
npm run dev  # ou yarn dev
```
Acesse em: `http://localhost:3000`

## 🌟 Funcionalidades e Implementação.

### 1. Next.js e TypeScript para Performance
O uso de Next.js melhora a performance e o SEO por meio da renderização estática (SSG) e renderização dinâmica (SSR). 

```tsx
export default function Home() {
  return (
    <main>
      <h1>Bem-vindo ao meu Portfólio</h1>
    </main>
  );
}
```

### 2. TailwindCSS para Estilização.

```tsx
<div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
  <h1 className="text-4xl font-bold">Bem-vindo ao meu Portfólio</h1>
</div>
```

### 3. Swiper.js para Sliders Interativos.

```tsx
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

<Swiper spaceBetween={50} slidesPerView={1} autoplay>
  <SwiperSlide>Slide 1</SwiperSlide>
  <SwiperSlide>Slide 2</SwiperSlide>
</Swiper>
```

### 4. Framer Motion para Animações Suaves.

```tsx
import { motion } from 'framer-motion';

<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
  <h1>Portfólio</h1>
</motion.div>
```

### 5. React Icons e React Icon Cloud para Elementos Visuais.

```tsx
import { FaGithub, FaLinkedin } from 'react-icons/fa';

<div className="flex gap-4">
  <FaGithub size={30} />
  <FaLinkedin size={30} />
</div>
```

## 🏰 Práticas de Otimização.
- Uso de **next/image** para carregamento otimizado de imagens.
- Implementação de **Lazy Loading** para componentes pesados.
- Utilização de **SSG e SSR** para melhor performance.

## 🚀 Deploy na Vercel.
O site está hospedado na Vercel. Para fazer deploy manualmente:

```bash
npm run build  # ou yarn build
vercel deploy
```

## 📞 Contato.
- **Email**: andreacarlos.oc@gmail.com
- **LinkedIn**: [Meu Perfil](https://www.linkedin.com/in/andr%C3%A9-carloscx/)
- **GitHub**: [Repositório](https://github.com/seu-usuario/Portfolio.tsx)

Se você quiser saber mais sobre mim e meus projetos, sinta-se à vontade para entrar em contato!

---

Feito por **André Carlos Oliveira Da Costa**
