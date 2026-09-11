import { Reveal } from "@/components/Reveal";

export function LocalSection() {
  return (
    <section className="local section">
      <Reveal as="div" className="container local-card">
        <div>
          <span className="section-kicker">Criado em Ipê, RS</span>
          <h2>
            Tecnologia local para <span>negócios locais.</span>
          </h2>
          <p>
            O Alô Delivery nasce em Ipê, na Serra Gaúcha, com a ideia de tornar a tecnologia mais
            acessível para quem empreende na região.
          </p>
        </div>
        <div className="local-badge">
          <strong>Ipê</strong>
          <span>RIO GRANDE DO SUL</span>
          <i>•</i>
          <small>feito por aqui, pensado para crescer</small>
        </div>
      </Reveal>
    </section>
  );
}
