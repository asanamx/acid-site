'use client';

import { useEffect, useRef, useState } from 'react';
import { Asterisk } from '@/components/Brand';
import { AGENT, UI } from '@/data/content';

export default function Chat({ lang }) {
  const t = (o) => o[lang];
  const [open, setOpen] = useState(false);
  const [msgs, setMsgs] = useState([]);
  const [input, setInput] = useState('');
  const [busy, setBusy] = useState(false);
  const bodyRef = useRef(null);

  useEffect(() => {
    if (open && msgs.length === 0) {
      setMsgs([{ role: 'assistant', content: t(AGENT.hello) }]);
    }
  }, [open]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    bodyRef.current?.scrollTo(0, bodyRef.current.scrollHeight);
  }, [msgs, busy]);

  const offlineMsg = () => t(AGENT.offline).replace('%EMAIL%', UI.contactEmail);

  async function send() {
    const text = input.trim();
    if (!text || busy) return;
    const next = [...msgs, { role: 'user', content: text }];
    setMsgs(next);
    setInput('');
    setBusy(true);
    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ messages: next.map(({ role, content }) => ({ role, content })) }),
      });
      const data = await res.json();
      setMsgs((m) => [...m, { role: 'assistant', content: data.reply || offlineMsg() }]);
    } catch {
      setMsgs((m) => [...m, { role: 'assistant', content: offlineMsg() }]);
    } finally {
      setBusy(false);
    }
  }

  return (
    <>
      <button className={`chat-fab ${open ? 'off' : ''}`} onClick={() => setOpen(true)} aria-label={t(AGENT.title)}>
        <Asterisk style={{ width: 15, height: 15, color: '#eceef0' }} />
      </button>

      {open && (
        <div className="chat-panel" role="dialog" aria-label={t(AGENT.title)}>
          <div className="chat-head">
            <Asterisk style={{ width: 16, height: 16, color: 'var(--red)' }} />
            <span>{t(AGENT.title)}</span>
            <button className="chat-x" onClick={() => setOpen(false)} aria-label="Cerrar">✕</button>
          </div>
          <div className="chat-body" ref={bodyRef}>
            {msgs.map((m, i) => (
              <div key={i} className={`chat-msg ${m.role}`}>{m.content}</div>
            ))}
            {busy && <div className="chat-msg assistant typing">···</div>}
          </div>
          <div className="chat-input">
            <input
              value={input}
              placeholder={t(AGENT.placeholder)}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && send()}
            />
            <button onClick={send} disabled={busy} aria-label="Enviar">→</button>
          </div>
        </div>
      )}
    </>
  );
}
