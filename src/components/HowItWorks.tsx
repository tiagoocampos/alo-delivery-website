import { Reveal } from "@/components/Reveal";

const STEPS = [
  {
    number: "01",
    title: "Crie sua loja",
    text: "Configure nome, logo, cores, categorias e produtos.",
  },
  {
    number: "02",
    title: "Compartilhe seu link",
    text: "Divulgue seu cardápio no Instagram, WhatsApp e Google.",
  },
  {
    number: "03",
    title: "Receba os pedidos",
    text: "Organize tudo em uma central simples e intuitiva.",
  },
  {
    number: "04",
    title: "Venda mais",
    text: "Use dados, promoções e fidelização para aumentar suas vendas.",
  },
];

export function HowItWorks() {
  return (
    <section className="how section" id="como-funciona">
      <Reveal as="div" className="container narrow-heading">
        <span className="section-kicker">COMO FUNCIONA</span>
        <h2>
          Comece simples. <span>Cresça do seu jeito.</span>
        </h2>
      </Reveal>
      <div className="container steps">
        {STEPS.map((step) => (
          <Reveal as="div" className="step" key={step.number}>
            <span>{step.number}</span>
            <div>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
