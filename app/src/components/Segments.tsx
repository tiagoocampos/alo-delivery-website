import { Reveal } from "@/components/Reveal";

const SEGMENT_LIST = [
  "🍔 Hamburguerias",
  "🍕 Pizzarias",
  "🍱 Restaurantes",
  "🥤 Açaí & bebidas",
  "🍰 Docerias",
  "🥡 Lanchonetes",
];

export function Segments() {
  return (
    <section className="segments section" id="segmentos">
      <div className="container segment-wrap">
        <Reveal as="div" className="segment-copy">
          <span className="section-kicker">PARA QUEM É?</span>
          <h2>
            Seu negócio tem espaço no <span>Alô Delivery.</span>
          </h2>
          <p>Uma estrutura flexível para diferentes modelos de alimentação.</p>
          <div className="segment-list">
            {SEGMENT_LIST.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </Reveal>
        <Reveal as="div" className="segment-art">
          <div className="orbit orbit-1"></div>
          <div className="orbit orbit-2"></div>
          <div className="art-card art-main">
            <span>🍔</span>
            <b>Seu negócio</b>
            <small>online</small>
          </div>
          <div className="art-card art-small art-one">🍕</div>
          <div className="art-card art-small art-two">🍱</div>
          <div className="art-card art-small art-three">🥤</div>
        </Reveal>
      </div>
    </section>
  );
}
