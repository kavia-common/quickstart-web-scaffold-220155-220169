import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="panel">
      <header className="panelHeader">
        <h1 className="h1">About</h1>
        <p className="subhead">A minimal quickstart web scaffold with a retro twist.</p>
      </header>

      <div className="panelBody">
        <section className="card" aria-label="About this scaffold">
          <header className="cardHeader">
            <h2 className="cardTitle">What’s included</h2>
            <p className="cardSubtitle">Home + About + REST API + Swagger docs</p>
          </header>

          <div className="cardBody">
            <p className="lead">
              This app demonstrates a tiny, end-to-end setup: a Next.js frontend with basic navigation
              and an Express backend with example REST endpoints.
            </p>

            <dl className="kv">
              <div className="kvRow">
                <dt>Frontend</dt>
                <dd>
                  <span className="chip">Next.js (App Router)</span>
                </dd>
              </div>
              <div className="kvRow">
                <dt>Backend</dt>
                <dd>
                  <span className="chip">Express + Swagger UI</span>
                </dd>
              </div>
              <div className="kvRow">
                <dt>Docs</dt>
                <dd>
                  <span className="chip">/docs on the backend</span>
                </dd>
              </div>
            </dl>

            <div className="cardActions">
              <Link className="btn" href="/">
                Back to Home
              </Link>
              <a
                className="btn btnGhost"
                href="http://localhost:3001/docs"
                target="_blank"
                rel="noreferrer"
              >
                Open API Docs
              </a>
            </div>

            <p className="muted">
              If you deploy, configure <code className="code">NEXT_PUBLIC_API_BASE_URL</code> to your
              backend URL.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
