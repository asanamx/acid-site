'use client';

import { useEffect, useState, useCallback, useRef } from 'react';
import { Wordmark, Asterisk } from '@/components/Brand';
import Chat from '@/components/Chat';
import { BRANDS, PROJECTS, STEPS, SERVICES, ARSENAL, UI, FORM, FOOTER } from '@/data/content';

function ContactForm({ lang }) {
  const t = (o) => o[lang];
  const [status, setStatus] = useState('idle'); // idle | sending | ok | error
  async function onSubmit(e) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.target));
    if (!FORM.endpoint) {
      // Sin endpoint: abre el correo con los datos precargados.
      const body = encodeURIComponent(
        `${t(FORM.name)}: ${data.name}\n${t(FORM.email)}: ${data.email}\n${t(FORM.company)}: ${data.company || '—'}\n${t(FORM.type)}: ${data.type}\n\n${data.message}`
      );
      window.location.href = `mailto:${UI.contactEmail}?subject=${encodeURIComponent('Nuevo proyecto — ' + data.name)}&body=${body}`;
      return;
    }
    setStatus('sending');
    try {
      const res = await fetch(FORM.endpoint, {
        method: 'POST',
        headers: { 'content-type': 'application/json', accept: 'application/json' },
        body: JSON.stringify(data),
      });
      setStatus(res.ok ? 'ok' : 'error');
    } catch {
      setStatus('error');
    }
  }
  if (status === 'ok') return <p className="form-ok">{t(FORM.ok)}</p>;
  return (
    <form className="cform" onSubmit={onSubmit}>
      <div className="crow">
        <input name="name" required placeholder={t(FORM.name)} />
        <input name="email" type="email" required placeholder={t(FORM.email)} />
      </div>
      <div className="crow">
        <input name="company" placeholder={t(FORM.company)} />
        <select name="type" defaultValue="">
          <option value="" disabled>{t(FORM.type)}</option>
          {FORM.types.map((op) => (
            <option key={op.es} value={t(op)}>{t(op)}</option>
          ))}
        </select>
      </div>
      <textarea name="message" required rows={5} placeholder={t(FORM.message)} />
      <div className="crow-btn">
        <button className="btn" type="submit" disabled={status === 'sending'}>
          {status === 'sending' ? t(FORM.sending) : t(FORM.send)}
        </button>
        {status === 'error' && <span className="form-err">{t(FORM.error)} <a href={`mailto:${UI.contactEmail}`}>{UI.contactEmail}</a></span>}
      </div>
    </form>
  );
}

function BrandLogo({ brand }) {
  const [failed, setFailed] = useState(false);
  const ref = useRef(null);
  // El error de carga puede ocurrir antes de la hidratación: verificar al montar.
  useEffect(() => {
    const img = ref.current;
    if (img && img.complete && img.naturalWidth === 0) setFailed(true);
  }, []);
  if (failed) return <b className="brand-text">{brand.name}</b>;
  return (
    <img
      ref={ref}
      className="brand-logo"
      src={brand.logo}
      alt={brand.name}
      onError={() => setFailed(true)}
    />
  );
}

export default function Home() {
  const [lang, setLang] = useState('es');
  const [lightbox, setLightbox] = useState(null); // project or null
  const [menuOpen, setMenuOpen] = useState(false); // menú móvil
  const [heroPlay, setHeroPlay] = useState(false); // dispara el reveal cinematográfico una sola vez
  const [scrolled, setScrolled] = useState(false); // nav sólido al hacer scroll / transparente sobre el hero
  const t = useCallback((obj) => obj[lang], [lang]);

  // reveal cinematográfico del hero: se ejecuta una única vez tras la hidratación
  useEffect(() => {
    const id = requestAnimationFrame(() => setHeroPlay(true));
    return () => cancelAnimationFrame(id);
  }, []);

  // nav: transparente sobre el hero, sólido en cuanto se hace scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // reveal-on-scroll
  useEffect(() => {
    const io = new IntersectionObserver(
      (es) =>
        es.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('in');
            io.unobserve(e.target);
          }
        }),
      { threshold: 0.12 }
    );
    document.querySelectorAll('.rv').forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  // lightbox: lock scroll + esc to close
  useEffect(() => {
    document.body.style.overflow = (lightbox || menuOpen) ? 'hidden' : '';
    const onKey = (e) => { if (e.key === 'Escape') { setLightbox(null); setMenuOpen(false); } };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [lightbox, menuOpen]);

  return (
    <>
      <div className="grain" />

      <nav className={`${menuOpen ? 'menu-open' : ''} ${scrolled ? 'scrolled' : ''}`}>
        <a className="logo" href="#top" aria-label="ACID" onClick={() => setMenuOpen(false)}>
          <Asterisk className="ast" style={{ color: 'var(--red)' }} />
          <Wordmark withR={false} className="wm" />
        </a>
        <button
          className={`nav-burger ${menuOpen ? 'open' : ''}`}
          aria-label="Menú"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
          data-testid="mobile-menu-toggle"
        >
          <span /><span /><span />
        </button>
        <div className={`nav-links ${menuOpen ? 'open' : ''}`} data-testid="mobile-menu">
          <a href="#work" onClick={() => setMenuOpen(false)}>{t(UI.nav.work)}</a>
          <a href="#studio" onClick={() => setMenuOpen(false)}>{t(UI.nav.studio)}</a>
          <a href="#services" onClick={() => setMenuOpen(false)}>{t(UI.nav.services)}</a>
          <a href="#method" onClick={() => setMenuOpen(false)}>{t(UI.method.t)}</a>
          <a href="#contact" className="cta-nav" onClick={() => setMenuOpen(false)}>{t(UI.nav.cta)}</a>
          <div className="lang">
            <button className={lang === 'es' ? 'on' : ''} onClick={() => setLang('es')}>ES</button>
            <button className={lang === 'en' ? 'on' : ''} onClick={() => setLang('en')}>EN</button>
          </div>
        </div>
      </nav>

      <header className={`hero hero-cine ${heroPlay ? 'play' : ''}`} id="top">
        <video autoPlay muted loop playsInline>
          <source src="/media/hero_loop.webm" type="video/webm" />
          <source src="/media/hero_loop.mp4" type="video/mp4" />
        </video>
        <div className="hero-veil" aria-hidden="true" />
        <div className="hero-inner">
          <div className="kicker">{t(UI.hero.kicker)}</div>
          <h1>
            {t(UI.hero.l1)}
            <br />
            <span className="alt">{t(UI.hero.l2)}</span>
          </h1>
          <div className="hero-row">
            <p className="hero-sub">{t(UI.hero.sub)}</p>
            <div className="scroll-hint">{t(UI.hero.scroll)}</div>
          </div>
        </div>
      </header>

      <div className="marquee">
        <div className="track">
          {[0, 1].map((dup) => (
            <span key={dup} aria-hidden={dup === 1}>
              {BRANDS.map((b) => (
                <span className="brand-item" key={b.name}>
                  <BrandLogo brand={b} />
                </span>
              ))}
            </span>
          ))}
        </div>
      </div>

      <section id="work">
        <div className="sec-head rv">
          <div>
            <div className="sec-num">01</div>
            <h2>{t(UI.work.t)}</h2>
          </div>
          <p className="sec-note">{t(UI.work.n)}</p>
        </div>
        <div className="work-grid">
          {PROJECTS.map((p) => (
            <div key={p.key} className={`card span${p.span} rv`} onClick={() => setLightbox(p)}>
              <span className="tag">{t(p.tag)}</span>
              <img src={p.img} alt={`${p.client} — ${t(p.desc)}`} />
              <div className="info">
                <div className="client">{p.client}</div>
                <div className="proj">{t(p.desc)}</div>
                <div className="play">{t(UI.work.play)}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="statement" id="studio">
        <div className="sec-head rv">
          <div>
            <div className="sec-num">02</div>
            <h2>{t(UI.studio.t)}</h2>
          </div>
        </div>
        <p className="big rv" dangerouslySetInnerHTML={{ __html: t(UI.studio.p) }} />
        <div className="stats">
          {UI.studio.stats.map((st) => (
            <div className="stat rv" key={st.b}>
              <b>{st.b}</b>
              <span>{t(st.s)}</span>
            </div>
          ))}
        </div>
      </section>

      <section id="services">
        <div className="sec-head rv">
          <div>
            <div className="sec-num">03</div>
            <h2>{t(UI.services.t)}</h2>
          </div>
          <p className="sec-note">{t(UI.services.n)}</p>
        </div>
        <div className="serv-grid">
          {SERVICES.map((sv) => (
            <div className="serv rv" key={sv.n}>
              <div className="n">{sv.n}</div>
              <h3>{t(sv.t)}</h3>
              <p>{t(sv.p)}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="method">
        <div className="sec-head rv">
          <div>
            <div className="sec-num">04</div>
            <h2>{t(UI.method.t)}</h2>
          </div>
          <p className="sec-note">{t(UI.method.n)}</p>
        </div>
        <div className="steps">
          {STEPS.map((st) => (
            <div className="step rv" key={st.n}>
              <b>{st.n}</b>
              <h3>{t(st.t)}</h3>
              <p>{t(st.p)}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="arsenal">
        <div className="sec-head rv">
          <div>
            <div className="sec-num">05</div>
            <h2>{t(UI.arsenal.t)}</h2>
          </div>
          <p className="sec-note">{t(UI.arsenal.n)}</p>
        </div>
        <div>
          {ARSENAL.map((a) => (
            <div className="ars rv" key={a.n}>
              <span className="idx">{a.n}</span>
              <h3>{t(a.t)}</h3>
              <p>{t(a.p)}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="contact" id="contact">
        <div className="contact-grid">
          <div className="rv in">
            <Asterisk className="ast-contact" style={{ color: 'var(--red)', margin: '0 0 26px' }} />
            <div className="kicker">{t(UI.contact.k)}</div>
            <h2 style={{ textAlign: 'left' }}>{t(UI.contact.t)}</h2>
            <p className="contact-p">{t(UI.contact.p)}</p>
            <a className="contact-mail" href={`mailto:${UI.contactEmail}`}>{UI.contactEmail}</a>
          </div>
          <div className="rv in">
            <ContactForm lang={lang} />
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <div className="foot-grid">
          <div className="foot-brand">
            <div className="foot-logo">
              <Asterisk style={{ height: 22, width: 22, color: 'var(--red)' }} />
              <Wordmark className="foot-wm" />
            </div>
            <p>{t(FOOTER.blurb)}</p>
          </div>
          <div className="foot-col">
            <h4>{t(FOOTER.colNav)}</h4>
            <a href="#work">{t(UI.nav.work)}</a>
            <a href="#studio">{t(UI.nav.studio)}</a>
            <a href="#services">{t(UI.nav.services)}</a>
            <a href="#method">{t(UI.method.t)}</a>
          </div>
          <div className="foot-col">
            <h4>{t(FOOTER.colContact)}</h4>
            <a href={`mailto:${UI.contactEmail}`}>{UI.contactEmail}</a>
            <span>{t(FOOTER.location)}</span>
          </div>
          <div className="foot-col">
            <h4>{t(FOOTER.colSocial)}</h4>
            {FOOTER.social.map((s) => (
              <a key={s.name} href={s.url} target="_blank" rel="noreferrer">{s.name}</a>
            ))}
          </div>
        </div>
        <div className="foot-bottom">
          <span>© {new Date().getFullYear()} ACID · {t(UI.footer.f1)}. {t(FOOTER.legal)}</span>
          <span className="foot-legal-links">
            <a href="/aviso-de-privacidad">{lang === 'es' ? 'Aviso de Privacidad' : 'Privacy Notice'}</a>
            <a href="/aviso-legal">{lang === 'es' ? 'Aviso Legal' : 'Legal Notice'}</a>
          </span>
        </div>
      </footer>

      <Chat lang={lang} />

      {lightbox && (
        <div id="lb" className="open" role="dialog" aria-modal="true" onClick={(e) => e.target.id === 'lb' && setLightbox(null)}>
          <button id="lb-x" aria-label="Cerrar" onClick={() => setLightbox(null)}>✕</button>
          {lightbox.video ? (
            <video id="lb-v" src={lightbox.video} controls autoPlay playsInline />
          ) : (
            <div id="lb-err" style={{ display: 'block' }}>{t(UI.lightbox.empty)}</div>
          )}
          <div id="lb-t">
            <b>{lightbox.client}</b>
            {t(lightbox.desc)}
          </div>
        </div>
      )}
    </>
  );
}
