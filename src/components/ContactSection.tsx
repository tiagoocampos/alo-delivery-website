
"use client";

import { useActionState, useState } from "react";

import { Reveal } from "@/components/Reveal";

import { submitLead, type ContactFormState } from "@/lib/actions";

const initialContactFormState: ContactFormState = {
  status: "idle",
  message: "",
};

const BUSINESS_TYPES = [
  "Hamburgueria",
  "Pizzaria",
  "Restaurante",
  "Lanchonete",
  "Açaí / Bebidas",
  "Outro",
];

export function ContactSection() {
  const [state, formAction, pending] = useActionState(
    submitLead,
    initialContactFormState
  );

  const [name, setName] = useState("");
  const [businessName, setBusinessName] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [businessType, setBusinessType] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const message = `Olá! Vim pelo Alô Delivery e gostaria de conhecer a plataforma.

Meu nome: ${name}
Nome do negócio: ${businessName}
Tipo de negócio: ${businessType}
Meu WhatsApp: ${whatsapp}`;

    const whatsappLink = `https://wa.me/5554999067417?text=${encodeURIComponent(
      message
    )}`;

    // Abre o WhatsApp diretamente a partir do clique do usuário
    window.open(whatsappLink, "_blank");

    // Continua enviando os dados para o Server Action
    const formData = new FormData(event.currentTarget);

    formAction(formData);
  };

  return (
    <section className="contact section" id="contato">
      <Reveal as="div" className="container contact-grid">
        <div>
          <span className="section-kicker">VAMOS CONVERSAR?</span>

          <h2>
            Seu próximo pedido pode começar <span>agora.</span>
          </h2>

          <p>
            Conte um pouco sobre seu negócio e veja como o Alô Delivery pode
            funcionar para você.
          </p>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <label>
            Seu nome

            <input
              required
              type="text"
              name="name"
              placeholder="Como podemos te chamar?"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
          </label>

          <label>
            Nome do negócio

            <input
              required
              type="text"
              name="businessName"
              placeholder="Ex.: Burger da Serra"
              value={businessName}
              onChange={(event) => setBusinessName(event.target.value)}
            />
          </label>

          <label>
            WhatsApp

            <input
              required
              type="tel"
              name="whatsapp"
              placeholder="(54) 99999-9999"
              value={whatsapp}
              onChange={(event) => setWhatsapp(event.target.value)}
            />
          </label>

          <label>
            Tipo de negócio

            <select
              required
              name="businessType"
              value={businessType}
              onChange={(event) => setBusinessType(event.target.value)}
            >
              <option value="">Selecione</option>

              {BUSINESS_TYPES.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </label>

          <button
            className="btn btn-primary form-submit"
            type="submit"
            disabled={pending}
          >
            {pending ? "Enviando…" : "Falar com um especialista →"}
          </button>

          <small
            className={`form-feedback${
              state.status === "error" ? " is-error" : ""
            }`}
            role="status"
          >
            {state.message}
          </small>
        </form>
      </Reveal>
    </section>
  );
}

