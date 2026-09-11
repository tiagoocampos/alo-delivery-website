export function Footer() {
  return (
    <footer>
      <div className="container footer-top">
        <div className="footer-brand">
          <a className="brand" href="#inicio">
            <span className="brand-mark">A</span>
            <span className="brand-name">
              Alô <strong>Delivery</strong>
            </span>
          </a>
          <p>Seu delivery. Mais simples. Mais lucrativo.</p>
          <small>Ipê · Rio Grande do Sul</small>
        </div>
        <div className="footer-links">
          <div>
            <strong>Produto</strong>
            <a href="#recursos">Funcionalidades</a>
            <a href="#planos">Planos</a>
            <a href="#como-funciona">Como funciona</a>
          </div>
          <div>
            <strong>Empresa</strong>
            <a href="#segmentos">Segmentos</a>
            <a href="#contato">Contato</a>
          </div>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© 2026 Alô Delivery. Todos os direitos reservados.</span>
        <span>Feito em Ipê, RS 💙</span>
      </div>
    </footer>
  );
}
