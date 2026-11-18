"use client";

import { useState } from "react";

function Bullets({ bullets }) {
  // A list of lists renders as two columns; a flat list as one.
  if (Array.isArray(bullets[0])) {
    return (
      <div className="cols">
        {bullets.map((col, i) => (
          <ul key={i}>
            {col.map((b) => (
              <li key={b}>{b}</li>
            ))}
          </ul>
        ))}
      </div>
    );
  }
  return (
    <ul>
      {bullets.map((b) => (
        <li key={b}>{b}</li>
      ))}
    </ul>
  );
}

function Case({ p, wide }) {
  const cls = ["case", wide ? "wide" : "", p.feature ? "feature" : ""].filter(Boolean).join(" ");
  return (
    <article className={cls}>
      <div className="ep">
        <span className={p.method === "GET" ? "method get" : "method"}>{p.method}</span>
        <span>{p.endpoint}</span>
        <span className="org">{p.org}</span>
      </div>
      <h3>{p.title}</h3>
      <p>{p.summary}</p>
      <Bullets bullets={p.bullets} />
      <div className="chips">
        {p.chips.map((c) => (
          <span className="chip" key={c}>
            {c}
          </span>
        ))}
      </div>
      {p.links && (
        <div className="links">
          {p.links.map((l) => (
            <a key={l.href} href={l.href} target="_blank" rel="noopener noreferrer">
              {l.label} ↗
            </a>
          ))}
        </div>
      )}
    </article>
  );
}

export default function ProjectGrid({ projects, filters }) {
  const [active, setActive] = useState("all");
  const shown = active === "all" ? projects : projects.filter((p) => p.tags.includes(active));
  const count = (id) => (id === "all" ? projects.length : projects.filter((p) => p.tags.includes(id)).length);

  return (
    <>
      <div className="filters" role="group" aria-label="Filter projects">
        {filters.map((f) => (
          <button key={f.id} type="button" aria-pressed={active === f.id} onClick={() => setActive(f.id)}>
            {f.label}
            <span>{count(f.id)}</span>
          </button>
        ))}
      </div>
      <div className="cases">
        {shown.map((p, i) => {
          // Full list: use each project's own layout. Filtered: two per row,
          // and an odd last card spans the row so nothing sits alone.
          const wide = active === "all" ? p.wide : shown.length % 2 === 1 && i === shown.length - 1;
          return <Case key={p.id} p={p} wide={wide} />;
        })}
      </div>
    </>
  );
}
