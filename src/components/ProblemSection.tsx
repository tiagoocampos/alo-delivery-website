import { Reveal } from "@/components/Reveal";

const PAIN_CARDS = [
  {
    icon: "⌁",
    title: "Pedidos espalhados",
    text: "WhatsApp, Instagram e marketplaces misturados? Tenha seus pedidos organizados em um só lugar.",
  },
  {
    icon: "↗",
    title: "Dependência de apps",
    text: "Construa sua própria base de clientes e fortaleça a marca do seu negócio.",
  },
  {
    icon: "◷",
    title: "Falta de controle",
    text: "Tenha visão dos pedidos, vendas e clientes para tomar decisões melhores.",
  },
];

export function ProblemSection() {
  return (
    <section className="problem section">
      <Reveal as="div" className="container narrow-heading">
        <span className="section-kicker">CHEGA DE PERDER TEMPO</span>
        <h2>
          Seu negócio merece uma operação <span>mais inteligente.</span>
        </h2>
        <p>Centralize o que realmente importa e deixe a bagunça dos pedidos para trás.</p>
      </Reveal>

      <div className="container pain-grid">
        {PAIN_CARDS.map((card) => (
          <Reveal as="article" className="pain-card" key={card.title}>
            <div className="pain-icon">{card.icon}</div>
            <h3>{card.title}</h3>
            <p>{card.text}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
