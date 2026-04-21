/**
 * Shown when an unhandled error escapes a React subtree. The error has
 * already been reported to GlitchTip by Sentry.ErrorBoundary.
 */
export function ErrorFallback() {
  return (
    <div className="notfound" role="alert" aria-live="assertive">
      <div>
        <div className="code">!</div>
        <h1>Something went wrong.</h1>
        <p className="lead" style={{ maxWidth: "48ch", margin: "0 auto" }}>
          An unexpected error occurred. Our team has been notified.
          Try reloading the page — if the problem persists, contact support.
        </p>
        <div style={{ display: "flex", justifyContent: "center", gap: 12, marginTop: 20, flexWrap: "wrap" }}>
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => window.location.reload()}
          >
            Reload page
          </button>
          <a href="mailto:support.digital@hartmann.info" className="btn btn-secondary">
            Contact support
          </a>
        </div>
      </div>
    </div>
  );
}
