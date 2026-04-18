import { useI18n } from "../i18n";
import { IconDownload, IconPdf } from "./Icon";

export const PDF_HREF = "/downloads/HARTMANN_EasyCareHub_Manual_v1.4_EN.pdf";
export const PDF_FILENAME = "HARTMANN_EasyCareHub_Manual_v1.4_EN.pdf";

export function DownloadCard({ compact = false }: { compact?: boolean }) {
  const { t } = useI18n();

  return (
    <aside className={`download-card${compact ? " compact" : ""}`}>
      <div className="download-icon"><IconPdf size={compact ? 28 : 44} /></div>
      <div className="download-body">
        <h3>{t.download.pdf}</h3>
        {!compact && <p className="muted">{t.download.pdfSub}</p>}
        <div className="download-meta">{t.download.pdfMeta}</div>
      </div>
      <a
        className="btn btn-primary"
        href={PDF_HREF}
        download={PDF_FILENAME}
        aria-label={t.download.pdfCta}
      >
        <IconDownload size={16} />
        <span>{t.download.pdfCta}</span>
      </a>
    </aside>
  );
}
