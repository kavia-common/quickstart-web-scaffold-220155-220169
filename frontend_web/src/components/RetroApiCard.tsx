"use client";

import { useEffect, useState } from "react";
import { apiGetJson } from "@/lib/api";

type RetroPayload = {
  message: string;
  accent: string;
  success: boolean;
};

type TimePayload = { now: string };

// PUBLIC_INTERFACE
export default function RetroApiCard() {
  /** Demonstrates consuming the Express backend from the Next.js UI (loading/error/success). */
  const [retro, setRetro] = useState<RetroPayload | null>(null);
  const [serverTime, setServerTime] = useState<string | null>(null);
  const [status, setStatus] = useState<"idle" | "loading" | "ready" | "error">("idle");
  const [error, setError] = useState<string>("");

  async function load() {
    setStatus("loading");
    setError("");

    const [retroRes, timeRes] = await Promise.all([
      apiGetJson<RetroPayload>("/api/retro?name=Kavia"),
      apiGetJson<TimePayload>("/api/time"),
    ]);

    if (!retroRes.ok) {
      setStatus("error");
      setError(retroRes.error);
      return;
    }

    if (!timeRes.ok) {
      setStatus("error");
      setError(timeRes.error);
      return;
    }

    setRetro(retroRes.data);
    setServerTime(timeRes.data.now);
    setStatus("ready");
  }

  useEffect(() => {
    void load();
  }, []);

  return (
    <section className="card" aria-labelledby="api-card-title">
      <header className="cardHeader">
        <h2 id="api-card-title" className="cardTitle">
          API Link-Up
        </h2>
        <p className="cardSubtitle">Frontend ⇄ Backend (REST)</p>
      </header>

      <div className="cardBody">
        {status === "loading" && <p className="muted">Dialing… negotiating baud rate…</p>}

        {status === "error" && (
          <div className="alert" role="alert">
            <p className="alertTitle">Connection error</p>
            <p className="alertBody">{error}</p>
            <p className="muted">
              Tip: set <code className="code">NEXT_PUBLIC_API_BASE_URL</code> to your backend URL (e.g.
              <code className="code"> http://localhost:3001</code>).
            </p>
          </div>
        )}

        {status === "ready" && retro && (
          <>
            <p className="lead">{retro.message}</p>

            <dl className="kv">
              <div className="kvRow">
                <dt>Accent</dt>
                <dd>
                  <span className="chip">{retro.accent}</span>
                </dd>
              </div>
              <div className="kvRow">
                <dt>Server time</dt>
                <dd>
                  <span className="chip">{serverTime}</span>
                </dd>
              </div>
            </dl>

            <div className="cardActions">
              <button className="btn" type="button" onClick={() => void load()}>
                Refresh Payload
              </button>
              <a className="btn btnGhost" href="/about">
                Read More
              </a>
            </div>
          </>
        )}
      </div>
    </section>
  );
}
