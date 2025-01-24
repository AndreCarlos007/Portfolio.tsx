"use client"; // Indica que este componente será renderizado no lado do cliente
import React, { useState } from 'react';
import emailjs from 'emailjs-com'; // Biblioteca para enviar emails
import { BsArrowRight } from 'react-icons/bs'; // Ícone para o botão de envio

// Componente funcional da página
const Page: React.FC = () => {
  // Estado para armazenar os dados do formulário
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  // Estado para exibir mensagens de status ao usuário (sucesso ou erro)
  const [statusMessage, setStatusMessage] = useState<string>('');

  // Manipula alterações nos campos do formulário
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target; // Obtém o nome do campo e o valor digitado
    setFormData(prevData => ({
      ...prevData, // Mantém os outros valores do formulário
      [name]: value // Atualiza o campo correspondente
    }));
  };

  // Manipula o envio do formulário
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // Previne o comportamento padrão de recarregar a página

    // Identificadores do serviço EmailJS
    const serviceId = 'service_oi4yvzs'; // ID do serviço no EmailJS
    const templateId = 'template_il7i00m'; // ID do template no EmailJS
    const userId = '1JfgqlqaOWmql2M2_'; // Chave pública do EmailJS

    // Envia os dados do formulário via EmailJS
    emailjs.send(serviceId, templateId, formData, userId)
      .then(() => {
        // Mensagem de sucesso e reset do formulário
        setStatusMessage('Message sent successfully!');
        setFormData({ name: '', email: '', subject: '', message: '' });
      })
      .catch((error) => {
        // Mensagem de erro ao enviar o email
        setStatusMessage('Error sending message. Please try again.');
        console.error('EmailJS error:', error);
      });
  };

  return (
    // Contêiner principal da página
    <div style={{ backgroundImage: "url(/bg-2.jpg)" }} className="h-screen w-screen items-center justify-center flex bg-cover bg-center overflow-scroll sm:overflow-hidden">
      <div className="flex flex-col w-full max-w-[300px] sm:max-w-[340px] md:max-w-[600px] mt-72 mb-36 sm:mt-36 md:mt-0 md:mb-0">
        {/* Título */}
        <h2 className="text-white text-[2rem] font-bold mb-3 text-center">
          Let&apos;s <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500">connect.</span>
        </h2>

        {/* Formulário */}
        <form className="text-white flex-1 flex flex-col gap-6 w-full mx-auto" onSubmit={handleSubmit}>
          {/* Campos Nome e Email */}
          <div className="flex gap-x-6 w-full">
            <input
              type="text"
              placeholder="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full h-[40px] rounded-lg pl-6 capitalize bg-transparent border border-white/10 outline-none focus:ring-1 focus:ring-purple-800 placeholder:text-white/30 placeholder:font-light"
            />
            <input
              type="email"
              placeholder="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full h-[40px] rounded-lg pl-6 bg-transparent border border-white/10 outline-none focus:ring-1 focus:ring-purple-800 placeholder:text-white/30 placeholder:font-light"
            />
          </div>

          {/* Campo Assunto */}
          <input
            type="text"
            placeholder="subject"
            name="subject"
            value={formData.subject}
            onChange={handleInputChange}
            className="w-full h-[40px] rounded-lg pl-6 bg-transparent border border-white/10 outline-none focus:ring-1 focus:ring-purple-800 placeholder:text-white/30 placeholder:font-light"
          />

          {/* Campo Mensagem */}
          <textarea
            placeholder="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            className="w-full h-[120px] p-6 rounded-lg resize-none bg-transparent outline-none focus:ring-1 focus:ring-purple-800 border border-white/10 placeholder:text-white/30 placeholder:font-light"
          ></textarea>

          {/* Botão de Envio */}
          <button className="text-white h-[52px] rounded-full border border-white/30 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-purple-800 group">
            <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500">Let&apos;s talk</span>
            <BsArrowRight className="-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]" />
          </button>
        </form>

        {/* Mensagem de Status */}
        {statusMessage && <p className="text-white mt-4 text-center">{statusMessage}</p>}
      </div>
    </div>
  );
};

export default Page;
