import ThemeToggle from "@/components/ThemeToggle";
import CopyButton from "@/components/CopyButton";
import ProjectGrid from "@/components/ProjectGrid";
import {
  profile,
  responseCard,
  projects,
  filters,
  moreSystems,
  experience,
  skills,
} from "@/data/content";

function JsonValue({ v, indent }) {
  const pad = "  ".repeat(indent);
  if (Array.isArray(v)) {
    const inline = v.join(", ").length < 34;
    if (inline) {
      return (
        <>
          [
          {v.map((x, i) => (
            <span key={i}>
              <span className="s">&quot;{x}&quot;</span>
              {i < v.length - 1 ? ", " : ""}
            </span>
          ))}
          ]
        </>
      );
    }
    return (
      <>
        [{"\n"}
        {v.map((x, i) => (
          <span key={i}>
            {pad}  <span className="s">&quot;{x}&quot;</span>
            {i < v.length - 1 ? "," : ""}
            {"\n"}
          </span>
        ))}
        {pad}]
      </>
    );
  }
  return <span className="s">&quot;{v}&quot;</span>;
}

function ResponseCard() {
  const entries = Object.entries(responseCard.body);
  return (
    <div className="resp" aria-label="Profile summary as a JSON response">
      <div className="bar">
        <span>{responseCard.request}</span>
        <span className="ok">200 OK</span>
      </div>
      <pre>
        <span className="d">{"{"}</span>
        {"\n"}
        {entries.map(([k, v], i) => (
          <span key={k}>
            {"  "}
            <span className="k">&quot;{k}&quot;</span>: <JsonValue v={v} indent={1} />
            {i < entries.length - 1 ? "," : ""}
            {"\n"}
          </span>
        ))}
        <span className="d">{"}"}</span>
        <span className="caret" aria-hidden="true" />
      </pre>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <nav className="top" aria-label="Main">
        <div className="wrap">
          <a className="mark" href="#top">
            dimas<span>.</span>pangestu
          </a>
          <div className="navr">
            <ul>
              <li><a href="#work">Work</a></li>
              <li><a href="#experience">Experience</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
            <ThemeToggle />
          </div>
        </div>
      </nav>

      <header className="hero" id="top">
        <div className="wrap">
          <div>
            <div className="eyebrow">{profile.roles.join(" · ")}</div>
            <h1>{profile.name}</h1>
            <p className="pitch">
              I build <strong>{profile.pitch.strong}</strong>
              {profile.pitch.rest}
            </p>
            <div className="cta">
              <a className="btn primary" href="#work">See selected work</a>
              <a className="btn" href={profile.github} target="_blank" rel="noopener noreferrer">GitHub ↗</a>
              <a className="btn" href={profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn ↗</a>
            </div>
            <div className="facts">
              {profile.facts.map((f) => (
                <span key={f.b}>
                  {f.pre ? `${f.pre} ` : ""}
                  <b>{f.b}</b>
                  {f.t.startsWith(",") ? f.t : ` ${f.t}`}
                </span>
              ))}
            </div>
          </div>
          <ResponseCard />
        </div>
      </header>

      <main>
        <section className="block" id="work">
          <div className="wrap">
            <div className="head">
              <h2>Selected work</h2>
              <p>Systems I designed and built, all running in production.</p>
            </div>
            <ProjectGrid projects={projects} filters={filters} />

            <p className="more-title">More systems I&apos;ve built</p>
            <div className="more">
              {moreSystems.map((m) => (
                <div key={m.t}>
                  <b>{m.t}</b>
                  <span>{m.d}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="block" id="experience">
          <div className="wrap">
            <div className="head">
              <h2>Experience</h2>
              <p>Most recent first.</p>
            </div>
            <div className="ledger">
              {experience.map((e) => (
                <div className="row" key={e.org + e.when}>
                  <div className="when">
                    {e.when}
                    <small>{e.sub}</small>
                  </div>
                  <div className="what">
                    <h3>
                      {e.org}
                      {e.remote && <span className="tag">Remote</span>}
                    </h3>
                    <div className="r">{e.role}</div>
                    {e.desc && <p>{e.desc}</p>}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="block" id="skills">
          <div className="wrap">
            <div className="head">
              <h2>Skills</h2>
            </div>
            <div className="skills">
              {skills.map((s) => (
                <div key={s.h}>
                  <h3>{s.h}</h3>
                  <p>{s.p}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <section className="contact" id="contact">
        <div className="wrap">
          <div>
            <h2>Let&apos;s talk</h2>
            <p>Open to remote roles and relocation for Python backend, payments and integration work. English for daily communication.</p>
          </div>
          <div className="lines">
            <div className="line">
              <span>
                <span className="lbl">Email</span>
                <span className="val" id="v-email">{profile.email}</span>
              </span>
              <CopyButton value={profile.email} targetId="v-email" />
            </div>
            <div className="line">
              <span>
                <span className="lbl">Phone / WhatsApp</span>
                <span className="val" id="v-phone">{profile.phone}</span>
              </span>
              <CopyButton value={profile.phone} targetId="v-phone" />
            </div>
            <div className="line">
              <span>
                <span className="lbl">GitHub</span>
                <a href={profile.github} target="_blank" rel="noopener noreferrer">github.com/dimspangestu</a>
              </span>
            </div>
            <div className="line">
              <span>
                <span className="lbl">LinkedIn</span>
                <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">linkedin.com/in/dimas-pangestu-76b378182</a>
              </span>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <div className="wrap">© {new Date().getFullYear()} {profile.name}</div>
      </footer>
    </>
  );
}
