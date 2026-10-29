export const metadata = {
  title: "Optivia Uploads — Privacy Policy & Terms of Use",
};

const mainStyle: React.CSSProperties = {
  fontFamily: 'system-ui, -apple-system, "Segoe UI", sans-serif',
  maxWidth: 720,
  margin: "2rem auto",
  padding: "0 1.25rem",
  lineHeight: 1.6,
  color: "#1a1a1a",
};

const codeStyle: React.CSSProperties = {
  background: "#f2f2f2",
  padding: "0.1em 0.35em",
  borderRadius: 4,
  fontSize: "0.92em",
};

const h2Style: React.CSSProperties = {
  fontSize: "1.15rem",
  marginTop: "1.75rem",
};

export default function OptiviaPrivacyPage() {
  return (
    <main style={mainStyle}>
      <h1 style={{ fontSize: "1.6rem" }}>Optivia Uploads</h1>
      <p style={{ color: "#555", fontSize: "0.9rem" }}>
        <strong>Privacy Policy &amp; Terms of Use</strong> · Last updated: 20 October 2026
      </p>

      <h2 style={h2Style}>What this tool is</h2>
      <p>
        <strong>Optivia Uploads</strong> is a private, single-user desktop command-line tool operated by the owner of four YouTube channels (Gavel &amp; Verdict, Coldwar Files, Giant Works, Still Here). It exists for one purpose: uploading the owner&apos;s own original video files and their metadata to the owner&apos;s own channels through the YouTube Data API. It is not offered to the public, has no other users, and has no hosted web interface or login.
      </p>

      <h2 style={h2Style}>What data the tool accesses</h2>
      <p>The tool requests two Google OAuth scopes:</p>
      <p>
        <code style={codeStyle}>https://www.googleapis.com/auth/youtube.upload</code> — used solely to call <code style={codeStyle}>videos.insert</code>: uploading and scheduling the owner&apos;s own videos on the owner&apos;s own channels.
      </p>
      <p>
        <code style={codeStyle}>https://www.googleapis.com/auth/youtube.readonly</code> — used solely to confirm, after each authorization, which of the owner&apos;s channels the resulting token belongs to (an upload-only token cannot make even that check). No other data is read with it.
      </p>
      <p>The tool does not read, store, or transmit any other YouTube or Google user data: no watch history, no comments, no subscriber lists, no analytics, no channel statistics.</p>

      <h2 style={h2Style}>How data is stored</h2>
      <p>OAuth access and refresh tokens are stored as local files on the owner&apos;s own machine, inside the tool&apos;s private <code style={codeStyle}>secrets/</code> directory (file permissions restricted to the owner). Tokens never leave that machine except in direct HTTPS calls to Google&apos;s OAuth and YouTube API endpoints. No data about any other person is collected, sold, or shared — the tool has exactly one user: the channel owner.</p>

      <h2 style={h2Style}>Revoking access and deleting data</h2>
      <p>
        Access can be revoked at any time at <a href="https://myaccount.google.com/permissions">myaccount.google.com/permissions</a> — find “Optivia Uploads” and choose <em>Remove access</em>. To delete all locally stored tokens, delete the files in the tool&apos;s <code style={codeStyle}>secrets/</code> directory, or email <a href="mailto:optiviahq@gmail.com">optiviahq@gmail.com</a> and the deletion will be confirmed in writing. No copies are kept anywhere else.
      </p>

      <h2 style={h2Style}>Third-party policies</h2>
      <p>
        The tool interacts with Google services; Google&apos;s handling of data is governed by <a href="https://policies.google.com/privacy">Google&apos;s Privacy Policy</a> and the <a href="https://developers.google.com/terms/api-services-user-data-policy">Google API Services User Data Policy</a>.
      </p>

      <h2 style={h2Style}>Terms of Use</h2>
      <p>Optivia Uploads is for the owner&apos;s personal, internal, non-commercial use in operating their own YouTube channels. It is provided as-is, without warranty of any kind. The owner is responsible for ensuring uploaded content complies with YouTube&apos;s Terms of Service and Community Guidelines, including synthetic-media disclosure where applicable.</p>

      <h2 style={h2Style}>Contact</h2>
      <p>
        Questions about this policy: <a href="mailto:optiviahq@gmail.com">optiviahq@gmail.com</a>.
      </p>
    </main>
  );
}
