import { Reveal } from "@/components/Reveal";

export function FeaturesSection() {
  return (
    <section className="features section" id="recursos">
      <Reveal as="div" className="container feature-intro">
        <div>
          <span className="section-kicker">TUDO EM UM SÓ LUGAR</span>
          <h2>
            Uma plataforma para <span>vender, organizar e crescer.</span>
          </h2>
        </div>
        <p>Do primeiro clique ao pedido entregue, o Alô Delivery acompanha a rotina do seu negócio.</p>
      </Reveal>

      <div className="container feature-grid">
        <Reveal as="article" className="feature-card feature-large">
          <div className="feature-copy">
            <span className="feature-number">01</span>
            <h3>
              Seu próprio
              <br />
              cardápio digital
            </h3>
            <p>Uma loja online com a identidade da sua empresa, pronta para seus clientes comprarem pelo celular.</p>
            <a href="#contato">Quero meu cardápio →</a>
          </div>
          <div className="mock-menu">
            <div className="mock-top">
              <span>Alô Burger</span>
              <small>🛒 2</small>
            </div>
            <div className="mock-cover"></div>
            <div className="mock-cats">
              <b>Todos</b>
              <span>Burguers</span>
              <span>Combos</span>
            </div>
            <div className="mock-food">
              <span>🍔</span>
              <div>
                <b>Alô Bacon</b>
                <small>R$ 32,90</small>
              </div>
              <i>+</i>
            </div>
            <div className="mock-food">
              <span>🍟</span>
              <div>
                <b>Fritas Cheddar</b>
                <small>R$ 19,90</small>
              </div>
              <i>+</i>
            </div>
          </div>
        </Reveal>

        <Reveal as="article" className="feature-card">
          <span className="feature-number">02</span>
          <div className="feature-symbol">▦</div>
          <h3>Gestão de pedidos</h3>
          <p>Acompanhe pedidos novos, em preparo, saiu para entrega e concluídos.</p>
          <div className="mini-kanban">
            <span>
              <i></i> 4 novos
            </span>
            <span>
              <i></i> 7 preparo
            </span>
            <span>
              <i></i> 5 entrega
            </span>
          </div>
        </Reveal>

        <Reveal as="article" className="feature-card">
          <span className="feature-number">03</span>
          <div className="feature-symbol">◎</div>
          <h3>Clientes e fidelização</h3>
          <p>Conheça quem compra de você e crie ações para trazer seus clientes de volta.</p>
          <div className="customer-mini">
            <b>+ 24</b>
            <span>novos clientes</span>
            <strong>este mês</strong>
          </div>
        </Reveal>

        <Reveal as="article" className="feature-card feature-wide">
          <div>
            <span className="feature-number">04</span>
            <h3>Marketing para vender mais</h3>
            <p>Cupons, promoções, combos e campanhas para transformar visitantes em clientes recorrentes.</p>
            <div className="chips">
              <span>🔥 Promoção</span>
              <span>🎟️ Cupom</span>
              <span>🎁 Combo</span>
              <span>💙 Fidelidade</span>
            </div>
          </div>
          <div className="campaign-preview">
            <small>CAMPANHA ATIVA</small>
            <strong>10% OFF</strong>
            <span>para clientes que não compram há 30 dias</span>
            <div className="campaign-bar">
              <i></i>
            </div>
            <b>64 clientes alcançados</b>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
