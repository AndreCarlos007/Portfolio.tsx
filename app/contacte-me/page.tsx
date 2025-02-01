"use client";
import React, { useState } from "react";
import emailjs from "emailjs-com";
import { BsArrowRight } from "react-icons/bs";

const Page: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [statusMessage, setStatusMessage] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false); // Estado para controlar se o envio está em andamento

  // Função para lidar com mudanças nos inputs
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Função para verificar se todos os campos estão preenchidos
  const isFormValid = (): boolean => {
    return Object.values(formData).every((value) => value.trim() !== "");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (isSubmitting) return; // Impede o envio múltiplo

    setIsSubmitting(true); // Marca o início do envio

    const serviceId = "service_oi4yvzs";
    const templateId = "template_il7i00m";
    const userId = "1JfgqlqaOWmql2M2_";

    emailjs
      .send(serviceId, templateId, formData, userId)
      .then(() => {
        setStatusMessage("Message sent successfully!");
        setFormData({ name: "", email: "", subject: "", message: "" });
      })
      .catch((error) => {
        setStatusMessage("Error sending message. Please try again.");
        console.error("EmailJS error:", error);
      })
      .finally(() => {
        setIsSubmitting(false); // Marca o fim do envio
      });
  };

  return (
    <div
      style={{ backgroundImage: "url(/bg-2.jpg)" }}
      className="h-screen w-screen items-center justify-center flex bg-cover bg-center overflow-scroll sm:overflow-hidden"
    >
      <div className="flex flex-col w-full max-w-[300px] sm:max-w-[340px] md:max-w-[600px] mt-72 mb-36 sm:mt-36 md:mt-0 md:mb-0">
        <h2 className="text-white text-[2rem] font-bold mb-3 text-center">
          Let&apos;s{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500">
            connect.
          </span>
        </h2>
        <form
          className="text-white flex-1 flex flex-col gap-6 w-full mx-auto"
          onSubmit={handleSubmit}
        >
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
          <input
            type="text"
            placeholder="subject"
            name="subject"
            value={formData.subject}
            onChange={handleInputChange}
            className="w-full h-[40px] rounded-lg pl-6 bg-transparent border border-white/10 outline-none focus:ring-1 focus:ring-purple-800 placeholder:text-white/30 placeholder:font-light"
          />
          <textarea
            placeholder="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            className="w-full h-[120px] p-6 rounded-lg resize-none bg-transparent outline-none focus:ring-1 focus:ring-purple-800 border border-white/10 placeholder:text-white/30 placeholder:font-light"
          ></textarea>


          {/* Botão de envio desabilitado se o formulário for inválido ou se o envio já estiver em andamento */}
          <button
            type="submit"
            className={`text-white h-[52px] rounded-full border border-white/30 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-purple-800 group ${
              isFormValid() && !isSubmitting
                ? ""
                : "opacity-10 cursor-not-allowed text-opacity-0"
            }`}
            disabled={!isFormValid() || isSubmitting} // Desabilita o botão se o formulário for inválido ou se já estiver enviando
          >
            <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500">
              Let&apos;s talk
            </span>
            <BsArrowRight className="-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]" />
          </button>
        </form>

        {statusMessage && <p className="text-white mt-4 text-center">{statusMessage}</p>}
      </div>
    </div>
  );
};

export default Page;
