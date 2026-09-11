
"use client";

import { useState } from "react";

const NAV_LINKS = [
  { href: "#recursos", label: "Funcionalidades" },
  { href: "#segmentos", label: "Segmentos" },
  { href: "#como-funciona", label: "Como funciona" },
  { href: "#planos", label: "Planos" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="container nav">
        <a className="brand" href="#inicio" aria-label="Alô Delivery">
          <img
            className="alo-delivery-logo"
            src="/logo.png"
            alt="Alô Delivery"
          />
        </a>

        <nav className="desktop-nav" aria-label="Navegação principal">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className="nav-actions">
          <a
            className="nav-panel"
            href="https://alo-delivery-painel.vercel.app"
          >
            Acessar
          </a>

          <a className="nav-cta" href="#contato">
            Falar com um especialista
            <span aria-hidden="true">↗</span>
          </a>
        </div>

        <button
          className="menu-toggle"
          aria-label="Abrir menu"
          aria-expanded={open}
          onClick={() => setOpen((prev) => !prev)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      <div className={`mobile-menu${open ? " open" : ""}`}>
        {NAV_LINKS.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={() => setOpen(false)}
          >
            {link.label}
          </a>
        ))}

        <a
          className="mobile-panel"
          href="https://alo-delivery-painel.vercel.app/login"
          onClick={() => setOpen(false)}
        >
          Acessar painel
        </a>

        <a
          className="mobile-cta"
          href="#contato"
          onClick={() => setOpen(false)}
        >
          Falar com um especialista
        </a>
      </div>
    </header>
  );
}

