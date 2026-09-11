"use client";

import { useActionState, useState } from "react";
import { Reveal } from "@/components/Reveal";
import { submitLead, type ContactFormState } from "@/lib/actions";

const initialContactFormState: ContactFormState = { status: "idle", message: "" };

const BUSINESS_TYPES = [
  "Hamburgueria",
  "Pizzaria",
  "Restaurante",
  "Lanchonete",
  "Açaí / Bebidas",
  "Outro",
];

export function ContactSection() {
  const [state, formAction, pending] = useActionState(submitLead, initialContactFormState);

  const [name, setName] = useState("");
  const [businessName, setBusinessName] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [businessType, setBusinessType] = useState("");

  // React resets uncontrolled <form action> fields after every resolved
  // Server Action call, including one that returns a validation error — so
  // the fields are controlled and only cleared once the lead actually succeeds.
  // Clearing them is done during render (React's documented pattern for
  // reacting to a prop/state change) rather than in an effect.
  const [handledState, setHandledState] = useState(state);
  if (state !== handledState) {
    setHandledState(state);
    if (state.status === "success") {
      setName("");
      setBusinessName("");
      setWhatsapp("");
      setBusinessType("");
    }
  }

  return (
    <section className="contact section" id="contato">
      <Reveal as="div" className="container contact-grid">
        <div>
          <span className="section-kicker">VAMOS CONVERSAR?</span>
          <h2>
            Seu próximo pedido pode começar <span>agora.</span>
          </h2>
          <p>Conte um pouco sobre seu negócio e veja como o Alô Delivery pode funcionar para você.</p>
        </div>

        <form className="contact-form" action={formAction}>
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
                <option key={type}>{type}</option>
              ))}
            </select>
          </label>
          <button className="btn btn-primary form-submit" type="submit" disabled={pending}>
            {pending ? "Enviando…" : "Falar com um especialista →"}
          </button>
          <small
            className={`form-feedback${state.status === "error" ? " is-error" : ""}`}
            role="status"
          >
            {state.message}
          </small>
        </form>
      </Reveal>
    </section>
  );
}
