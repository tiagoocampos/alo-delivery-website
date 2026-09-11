import { Reveal } from "@/components/Reveal";

const FEATURES = [
  "Cardápio digital personalizado",
  "Gestão de pedidos",
  "Cadastro de produtos e categorias",
  "Área de clientes",
  "Responsivo para celular",
];

export function Pricing() {
  return (
    <section className="plans section" id="planos">
      <Reveal as="div" className="container narrow-heading">
        <span className="section-kicker">PLANO SIMPLES</span>
        <h2>
          Uma mensalidade que cabe no <span>seu negócio.</span>
        </h2>
        <p>Comece com o essencial e evolua conforme sua operação crescer.</p>
      </Reveal>

      <Reveal as="div" className="container pricing-card">
        <div>
          <span className="pricing-label">PLANO ESSENCIAL</span>
          <h3>Alô Delivery</h3>
          <p>Para colocar seu delivery próprio no ar com uma experiência profissional.</p>
          <ul>
            {FEATURES.map((feature) => (
              <li key={feature}>✓ {feature}</li>
            ))}
          </ul>
        </div>
        <div className="price-box">
          <small>A partir de</small>
          <div>
            <strong>R$ 99</strong>
            <span>/mês</span>
          </div>
          <p>Sem comissão por pedido*</p>
          <a className="btn btn-primary" href="#contato">
            Quero começar →
          </a>
        </div>
      </Reveal>
      <p className="price-note">* Valores e recursos podem variar conforme o plano contratado.</p>
    </section>
  );
}
