import RetroApiCard from "@/components/RetroApiCard";

export default function Home() {
  return (
    <main className="panel">
      <header className="panelHeader">
        <h1 className="h1">Home</h1>
        <p className="subhead">
          Top nav + centered panel + a tiny component that calls the Express backend.
        </p>
      </header>

      <div className="panelBody">
        <RetroApiCard />
      </div>
    </main>
  );
}
