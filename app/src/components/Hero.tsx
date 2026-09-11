import { Reveal } from "@/components/Reveal";

export function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="hero-grid container">
        <Reveal className="hero-copy">
          <div className="eyebrow">
            <span className="dot"></span>
            Feito para quem vive de delivery
          </div>

          <h1>
            Seu delivery.
            <br />
            <span>Mais simples.</span>
            <br />
            Mais lucrativo.
          </h1>

          <p className="hero-text">
            Cardápio digital, gestão de pedidos, clientes e muito mais em uma
            plataforma feita para deixar seu negócio mais organizado e vender mais.
          </p>

          <div className="hero-actions">
            <a className="btn btn-primary" href="#contato">
              Quero conhecer
              <span>→</span>
            </a>
            <a className="btn btn-secondary" href="#recursos">
              Conhecer a plataforma
              <span>↓</span>
            </a>
          </div>

          <div className="hero-proof">
            <div className="avatar-stack">
              <span>🍔</span>
              <span>🍕</span>
              <span>🥤</span>
              <span>🍟</span>
            </div>
            <div>
              <strong>Para negócios de todos os tamanhos</strong>
              <small>Hamburguerias, pizzarias, restaurantes e muito mais.</small>
            </div>
          </div>
        </Reveal>

        <Reveal className="hero-visual" delay>
          <div className="glow"></div>

          <div className="floating-card card-orders">
            <div className="mini-icon blue">✓</div>
            <div>
              <strong>Pedido confirmado</strong>
              <small>Agora mesmo · R$ 58,90</small>
            </div>
          </div>

          <div className="dashboard-window">
            <div className="window-top">
              <div className="window-brand">
                <span className="tiny-logo">A</span>
                <strong>Alô Delivery</strong>
              </div>
              <div className="window-status">
                <i></i> Loja online
              </div>
            </div>

            <div className="dashboard-body">
              <aside className="dashboard-sidebar">
                <div className="side-item active">
                  ⌂ <span>Visão geral</span>
                </div>
                <div className="side-item">
                  ▣ <span>Pedidos</span>
                </div>
                <div className="side-item">
                  ☷ <span>Cardápio</span>
                </div>
                <div className="side-item">
                  ♙ <span>Clientes</span>
                </div>
                <div className="side-item">
                  ◌ <span>Marketing</span>
                </div>
              </aside>

              <div className="dashboard-content">
                <div className="dash-heading">
                  <div>
                    <small>Hoje, 07 de setembro</small>
                    <h3>Olá, restaurante 👋</h3>
                  </div>
                  <div className="dash-avatar">AD</div>
                </div>

                <div className="metrics">
                  <div className="metric">
                    <span>Pedidos hoje</span>
                    <strong>48</strong>
                    <small className="positive">+18,4%</small>
                  </div>
                  <div className="metric">
                    <span>Faturamento</span>
                    <strong>R$ 2.846</strong>
                    <small className="positive">+12,7%</small>
                  </div>
                  <div className="metric">
                    <span>Ticket médio</span>
                    <strong>R$ 59,29</strong>
                    <small>por pedido</small>
                  </div>
                </div>

                <div className="dash-lower">
                  <div className="orders-panel">
                    <div className="panel-head">
                      <strong>Pedidos recentes</strong>
                      <span>Ver todos</span>
                    </div>
                    <div className="order-row">
                      <span className="order-number">#1048</span>
                      <div>
                        <strong>João da Silva</strong>
                        <small>2 itens · Pix</small>
                      </div>
                      <b>R$ 74,90</b>
                      <em>Em preparo</em>
                    </div>
                    <div className="order-row">
                      <span className="order-number">#1047</span>
                      <div>
                        <strong>Mariana Costa</strong>
                        <small>3 itens · Cartão</small>
                      </div>
                      <b>R$ 92,50</b>
                      <em className="ready">Saiu</em>
                    </div>
                    <div className="order-row">
                      <span className="order-number">#1046</span>
                      <div>
                        <strong>Carlos Souza</strong>
                        <small>1 item · Pix</small>
                      </div>
                      <b>R$ 39,90</b>
                      <em className="done">Entregue</em>
                    </div>
                  </div>

                  <div className="sales-panel">
                    <div className="panel-head">
                      <strong>Vendas</strong>
                      <span>7 dias</span>
                    </div>
                    <div className="chart">
                      <div style={{ height: "34%" }}></div>
                      <div style={{ height: "50%" }}></div>
                      <div style={{ height: "43%" }}></div>
                      <div style={{ height: "70%" }}></div>
                      <div style={{ height: "58%" }}></div>
                      <div style={{ height: "84%" }}></div>
                      <div style={{ height: "96%" }}></div>
                    </div>
                    <div className="chart-labels">
                      <span>Seg</span>
                      <span>Ter</span>
                      <span>Qua</span>
                      <span>Qui</span>
                      <span>Sex</span>
                      <span>Sáb</span>
                      <span>Dom</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="phone-card">
            <div className="phone-notch"></div>
            <div className="phone-content">
              <div className="phone-head">
                <span>←</span>
                <strong>Minha loja</strong>
                <span>🛒</span>
              </div>
              <div className="store-banner">
                <div>
                  <small>ABERTO AGORA</small>
                  <strong>
                    Seu sabor,
                    <br />
                    do seu jeito.
                  </strong>
                </div>
                <div className="burger">🍔</div>
              </div>
              <div className="phone-search">⌕ &nbsp; Buscar no cardápio</div>
              <div className="phone-tabs">
                <b>Mais pedidos</b>
                <span>Hambúrgueres</span>
                <span>Combos</span>
              </div>
              <div className="phone-product">
                <div>
                  <strong>Classic Burger</strong>
                  <small>Blend 180g, cheddar e molho especial</small>
                  <b>R$ 29,90</b>
                </div>
                <div className="food-img">🍔</div>
              </div>
              <div className="phone-product">
                <div>
                  <strong>Combo da Casa</strong>
                  <small>Burger + fritas + refrigerante</small>
                  <b>R$ 42,90</b>
                </div>
                <div className="food-img fries">🍟</div>
              </div>
              <div className="phone-cart">
                🛒 &nbsp; 2 itens <strong>R$ 72,80 →</strong>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
