import { useMemo } from "react";
import { useI18n } from "../i18n";
import { Breadcrumbs } from "../components/Breadcrumbs";
import { DownloadCard } from "../components/DownloadCard";
import { useActiveSection } from "../hooks/useActiveSection";

const SECTION_IDS = [
  "s1","s1-1","s1-2","s1-3",
  "s2","s2-1","s2-2","s2-3","s2-4",
  "s3","s3-1","s3-2",
  "s4","s4-1","s4-2","s4-3","s4-4",
  "s5","s5-1","s5-2","s5-3",
  "s6","s7","s7-1","s7-2","s7-3",
  "s8","s9",
];

export function ManualPage() {
  const { t } = useI18n();
  const active = useActiveSection(useMemo(() => SECTION_IDS, []));
  const m = t.manual;
  const isActive = (id: string) => active === id;

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <Breadcrumbs here={m.breadcrumb} />
          <span className="eyebrow">{m.eyebrow}</span>
          <h1>{m.title}</h1>
          <p className="lead">{m.intro}</p>
          <div style={{ marginTop: 28, maxWidth: 720 }}>
            <DownloadCard />
          </div>
        </div>
      </section>

      <div className="container manual">
        {/* ============== TOC ============== */}
        <aside className="toc" aria-label="Table of contents">
          <h4>{m.tocTitle}</h4>
          <ol>
            <li>
              <a href="#s1" className={isActive("s1") ? "active" : ""}>{m.sections.s1}</a>
              <ol>
                <li><a href="#s1-1" className={isActive("s1-1") ? "active" : ""}>{m.sections.s11}</a></li>
                <li><a href="#s1-2" className={isActive("s1-2") ? "active" : ""}>{m.sections.s12}</a></li>
                <li><a href="#s1-3" className={isActive("s1-3") ? "active" : ""}>{m.sections.s13}</a></li>
              </ol>
            </li>
            <li>
              <a href="#s2" className={isActive("s2") ? "active" : ""}>{m.sections.s2}</a>
              <ol>
                <li><a href="#s2-1" className={isActive("s2-1") ? "active" : ""}>{m.sections.s21}</a></li>
                <li><a href="#s2-2" className={isActive("s2-2") ? "active" : ""}>{m.sections.s22}</a></li>
                <li><a href="#s2-3" className={isActive("s2-3") ? "active" : ""}>{m.sections.s23}</a></li>
                <li><a href="#s2-4" className={isActive("s2-4") ? "active" : ""}>{m.sections.s24}</a></li>
              </ol>
            </li>
            <li>
              <a href="#s3" className={isActive("s3") ? "active" : ""}>{m.sections.s3}</a>
              <ol>
                <li><a href="#s3-1" className={isActive("s3-1") ? "active" : ""}>{m.sections.s31}</a></li>
                <li><a href="#s3-2" className={isActive("s3-2") ? "active" : ""}>{m.sections.s32}</a></li>
              </ol>
            </li>
            <li>
              <a href="#s4" className={isActive("s4") ? "active" : ""}>{m.sections.s4}</a>
              <ol>
                <li><a href="#s4-1" className={isActive("s4-1") ? "active" : ""}>{m.sections.s41}</a></li>
                <li><a href="#s4-2" className={isActive("s4-2") ? "active" : ""}>{m.sections.s42}</a></li>
                <li><a href="#s4-3" className={isActive("s4-3") ? "active" : ""}>{m.sections.s43}</a></li>
                <li><a href="#s4-4" className={isActive("s4-4") ? "active" : ""}>{m.sections.s44}</a></li>
              </ol>
            </li>
            <li>
              <a href="#s5" className={isActive("s5") ? "active" : ""}>{m.sections.s5}</a>
              <ol>
                <li><a href="#s5-1" className={isActive("s5-1") ? "active" : ""}>{m.sections.s51}</a></li>
                <li><a href="#s5-2" className={isActive("s5-2") ? "active" : ""}>{m.sections.s52}</a></li>
                <li><a href="#s5-3" className={isActive("s5-3") ? "active" : ""}>{m.sections.s53}</a></li>
              </ol>
            </li>
            <li><a href="#s6" className={isActive("s6") ? "active" : ""}>{m.sections.s6}</a></li>
            <li>
              <a href="#s7" className={isActive("s7") ? "active" : ""}>{m.sections.s7}</a>
              <ol>
                <li><a href="#s7-1" className={isActive("s7-1") ? "active" : ""}>{m.sections.s71}</a></li>
                <li><a href="#s7-2" className={isActive("s7-2") ? "active" : ""}>{m.sections.s72}</a></li>
                <li><a href="#s7-3" className={isActive("s7-3") ? "active" : ""}>{m.sections.s73}</a></li>
              </ol>
            </li>
            <li><a href="#s8" className={isActive("s8") ? "active" : ""}>{m.sections.s8}</a></li>
            <li><a href="#s9" className={isActive("s9") ? "active" : ""}>{m.sections.s9}</a></li>
          </ol>
        </aside>

        {/* ============== CONTENT ============== */}
        <article className="manual-content">

          <section id="s1">
            <h2>{m.sections.s1}</h2>
            <p>{m.s1.lead}</p>

            <div id="s1-1">
              <h3>{m.s1.scope.title}</h3>
              <p>{m.s1.scope.body}</p>

              <h3>{m.s1.safety.title}</h3>
              <ul>{m.s1.safety.points.map((p, i) => <li key={i}>{p}</li>)}</ul>
              <div className="callout warn"><strong>⚠</strong>{m.s1.safety.warn}</div>
            </div>

            <div id="s1-2">
              <h3>{m.s1.roles.title}</h3>
              <p>{m.s1.roles.lead}</p>
              <table>
                <thead>
                  <tr>{m.s1.roles.tHead.map((h, i) => <th key={i} className={i === 0 ? "" : "center"}>{h}</th>)}</tr>
                </thead>
                <tbody>
                  {m.s1.roles.rows.map((row, i) => (
                    <tr key={i}>{row.map((c, j) => <td key={j} className={j === 0 ? "" : "center"}>{c}</td>)}</tr>
                  ))}
                </tbody>
              </table>
              <p className="muted">{m.s1.roles.key}</p>
            </div>

            <div id="s1-3">
              <h3>{m.s1.abbr.title}</h3>
              <table>
                <tbody>
                  {m.s1.abbr.rows.map((row, i) => (
                    <tr key={i}>{row.map((c, j) => <td key={j}>{c}</td>)}</tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section id="s2">
            <h2>{m.sections.s2}</h2>

            <div id="s2-1">
              <h3>{m.s2.login.title}</h3>
              <p>{m.s2.login.body}</p>
              <ol>{m.s2.login.steps.map((s, i) => <li key={i}>{s}</li>)}</ol>

              <figure>
                <div className="ui-mock">
                  <div className="bar"><span /><span /><span /></div>
                  <div className="mock-row"><span className="k">Email</span><span className="v">nurse@facility.care</span></div>
                  <div className="mock-row"><span className="k">Password</span><span className="v">••••••••</span></div>
                  <div className="mock-row"><span className="k">Remember me</span><span className="v">☑</span></div>
                  <div className="mock-row"><span className="k">Forgot password?</span><span className="v">→</span></div>
                </div>
                <figcaption>Fig. 2.1 — Login screen</figcaption>
              </figure>
            </div>

            <div id="s2-2">
              <h3>{m.s2.menu.title}</h3>
              <p>{m.s2.menu.body}</p>
              <ul>{m.s2.menu.items.map((s, i) => <li key={i}>{s}</li>)}</ul>
            </div>

            <div id="s2-3">
              <h3>{m.s2.navbar.title}</h3>
              <p>{m.s2.navbar.body}</p>
              <ul>{m.s2.navbar.items.map((s, i) => <li key={i}>{s}</li>)}</ul>
            </div>

            <div id="s2-4">
              <h3>{m.s2.dash.title}</h3>
              <p>{m.s2.dash.lead}</p>
              <h4>Zones</h4><p>{m.s2.dash.zones}</p>
              <h4>View toggle</h4><p>{m.s2.dash.views}</p>
              <h4>Status filter</h4><p>{m.s2.dash.filter}</p>
              <h4>Search</h4><p>{m.s2.dash.search}</p>
              <h4>Status colour</h4><p>{m.s2.dash.color}</p>
              <h4>{m.s2.dash.sideTitle}</h4>
              <p>{m.s2.dash.sideBody}</p>

              <figure>
                <div className="ui-mock">
                  <div className="bar"><span /><span /><span /></div>
                  <div className="mock-row"><span className="k">Zone A · Room 204</span><span className="v">In bed · 68 bpm · 14 brpm</span></div>
                  <div className="mock-row"><span className="k">Zone A · Room 206</span><span className="v">Asleep · 62 bpm · 12 brpm</span></div>
                  <div className="mock-row"><span className="k">Zone B · Room 302</span><span className="v">Out of bed · 12 min</span></div>
                  <div className="mock-row"><span className="k">Zone B · Room 304</span><span className="v">Disconnected</span></div>
                </div>
                <figcaption>Fig. 2.2 — Dashboard tile view</figcaption>
              </figure>
            </div>
          </section>

          <section id="s3">
            <h2>{m.sections.s3}</h2>
            <p>{m.s3.lead}</p>
            <ul>{m.s3.columns.map((c, i) => <li key={i}>{c}</li>)}</ul>

            <div id="s3-1">
              <h3>{m.s3.searchTitle}</h3>
              <p>{m.s3.searchBody}</p>
            </div>

            <div id="s3-2">
              <h3>{m.s3.createTitle}</h3>
              <p>{m.s3.createBody}</p>
              <ol>{m.s3.createFields.map((c, i) => <li key={i}>{c}</li>)}</ol>
              <div className="callout note"><strong>ℹ</strong>{m.s3.createConflict}</div>
              <p>{m.s3.createManual}</p>
              <p>{m.s3.createSave}</p>
            </div>
          </section>

          <section id="s4">
            <h2>{m.sections.s4}</h2>
            <p>{m.s4.lead}</p>

            <div id="s4-1">
              <h3>{m.s4.overview.title}</h3>
              <p>{m.s4.overview.body}</p>
              <h4>Details</h4>
              <ul>{m.s4.overview.details.map((c, i) => <li key={i}>{c}</li>)}</ul>
              <h4>Individual notifications</h4>
              <ul>{m.s4.overview.indiv.map((c, i) => <li key={i}>{c}</li>)}</ul>
            </div>

            <div id="s4-2">
              <h3>{m.s4.trends.title}</h3>
              <p>{m.s4.trends.body}</p>
              <div className="callout"><strong>Tip</strong>{m.s4.trends.missing}</div>
            </div>

            <div id="s4-3">
              <h3>{m.s4.notif.title}</h3>
              <p>{m.s4.notif.body}</p>
              <h4>Presets</h4>
              <ul>{m.s4.notif.presets.map((c, i) => <li key={i}>{c}</li>)}</ul>
              <p>{m.s4.notif.review}</p>
              <p>{m.s4.notif.filter}</p>
            </div>

            <div id="s4-4">
              <h3>{m.s4.audit.title}</h3>
              <p>{m.s4.audit.body}</p>
            </div>
          </section>

          <section id="s5">
            <h2>{m.sections.s5}</h2>
            <p>{m.s5.lead}</p>
            <ul>{m.s5.tabs.map((c, i) => <li key={i}>{c}</li>)}</ul>

            <div id="s5-1">
              <h3>{m.s5.overview.title}</h3>
              <p>{m.s5.overview.body}</p>
            </div>

            <div id="s5-2">
              <h3>{m.s5.medical.title}</h3>
              <p>{m.s5.medical.body}</p>
              <ul>{m.s5.medical.types.map((x, i) => (
                <li key={i}><strong>{x.n}</strong> — {x.d}</li>
              ))}</ul>
              <p>{m.s5.medical.defaults}</p>
            </div>

            <div id="s5-3">
              <h3>{m.s5.bed.title}</h3>
              <p>{m.s5.bed.body}</p>
              <ol>{m.s5.bed.rules.map((c, i) => <li key={i}>{c}</li>)}</ol>
              <p>{m.s5.bed.bedtime}</p>
            </div>
          </section>

          <section id="s6">
            <h2>{m.sections.s6}</h2>
            <p>{m.s6.lead}</p>
            <ul>{m.s6.cols.map((c, i) => <li key={i}>{c}</li>)}</ul>
            <p>{m.s6.detail}</p>
          </section>

          <section id="s7">
            <h2>{m.sections.s7}</h2>
            <p>{m.s7.lead}</p>

            <div id="s7-1">
              <h3>{m.s7.zones.title}</h3>
              <p>{m.s7.zones.body}</p>
            </div>

            <div id="s7-2">
              <h3>{m.s7.locations.title}</h3>
              <p>{m.s7.locations.body}</p>
            </div>

            <div id="s7-3">
              <h3>{m.s7.users.title}</h3>
              <p>{m.s7.users.body}</p>
            </div>
          </section>

          <section id="s8">
            <h2>{m.sections.s8}</h2>
            <p>{m.s8.lead}</p>
            <ul>{m.s8.items.map((c, i) => <li key={i}>{c}</li>)}</ul>
            <p>{m.s8.save}</p>
          </section>

          <section id="s9">
            <h2>{m.sections.s9}</h2>
            <p>{m.s9.lead}</p>
            <ul>{m.s9.items.map((x, i) => (
              <li key={i}><strong>{x.t}</strong> — {x.d}</li>
            ))}</ul>
            <p className="muted">{m.s9.faqCta}</p>

            <div className="callout" style={{ marginTop: 32 }}>
              <strong>PAUL HARTMANN AG</strong> — Paul-Hartmann-Straße 12, 89522 Heidenheim, Germany · info@hartmann.info · +49 7321 360
            </div>
          </section>
        </article>
      </div>
    </>
  );
}
