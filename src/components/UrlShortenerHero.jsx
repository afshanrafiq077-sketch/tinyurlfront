import { useState } from "react";

const UrlShortenerHero = () => {
  const [tab, setTab] = useState("shorten");
  const [longUrl, setLongUrl] = useState("");
  const [alias, setAlias] = useState("");
  const [domain, setDomain] = useState("tinyurl.com");
  const [shortLink, setShortLink] = useState("");
  const [copied, setCopied] = useState(false);

  const handleShorten = () => {
    if (!longUrl.trim()) {
      alert("Please paste a long URL first!");
      return;
    }
    const code = alias.trim() ? alias.trim() : Math.random().toString(36).substring(2, 7);
    setShortLink(`https://${domain}/${code}`);
    setCopied(false);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(shortLink);
    setCopied(true);
  };

  // Box ka common style - yahi masla fix karega
  const inputStyle = {
    width: "100%",
    padding: "12px",
    marginTop: "6px",
    border: "1px solid #CBD5E1",
    borderRadius: "5px",
    outline: "none",
    boxSizing: "border-box",
    color: "#000000",
    backgroundColor: "#ffffff",
    fontSize: "14px",
    caretColor: "#000000",
  };

  return (
    <section style={{ background: "#0B2A4A", padding: "120px 20px 70px 20px", display: "flex", alignItems: "center", gap: "40px", flexWrap: "wrap", maxWidth: "1200px", margin: "0 auto" }}>

      {/* LEFT */}
      <div style={{ flex: "1", minWidth: "300px", textAlign: "left" }}>
        <h1 style={{ fontSize: "42px", fontWeight: "800", lineHeight: "1.2", margin: "0", color: "white" }}>
          URL Shortener, Branded<br />Short Links & Analytics
        </h1>
        <p style={{ fontSize: "15px", color: "#CBD5E1", marginTop: "20px", lineHeight: "1.7" }}>
          Welcome to the original link shortener — simplifying the Internet through the power of the URL since 2002.
        </p>
        <p style={{ fontSize: "15px", color: "#CBD5E1", marginTop: "14px", lineHeight: "1.7" }}>
          Use branded domains to fully customize your short links, track link analytics and enjoy other powerful features with our paid plans.
        </p>
      </div>

      {/* RIGHT - BOX */}
      <div style={{ flex: "1.1", minWidth: "320px", background: "white", borderRadius: "8px", overflow: "hidden", textAlign: "left" }}>

        <div style={{ display: "flex" }}>
          <button onClick={() => setTab("shorten")} style={{ flex: "1", padding: "14px", border: "none", cursor: "pointer", fontWeight: "700", background: tab === "shorten" ? "#0E7A9B" : "#F1F5F9", color: tab === "shorten" ? "white" : "#0F2A3D" }}>
            Shorten a Link
          </button>
          <button onClick={() => setTab("qr")} style={{ flex: "1", padding: "14px", border: "none", cursor: "pointer", fontWeight: "700", background: tab === "qr" ? "#0E7A9B" : "#F1F5F9", color: tab === "qr" ? "white" : "#0F2A3D" }}>
            Generate QR Code
          </button>
        </div>

        <div style={{ padding: "22px" }}>
          {tab === "shorten" ? (
            <>
              {/* 1. LONG URL BOX */}
              <label style={{ fontSize: "13px", fontWeight: "700", color: "#0F2A3D" }}>Long URL *</label>
              <input
                type="text"
                value={longUrl}
                onChange={(e) => setLongUrl(e.target.value)}
                placeholder="Paste long URL here"
                style={inputStyle}
              />

              <div style={{ display: "flex", gap: "12px", marginTop: "16px" }}>
                {/* 2. DOMAIN BOX */}
                <div style={{ flex: "1" }}>
                  <label style={{ fontSize: "13px", fontWeight: "700", color: "#0F2A3D" }}>Domain</label>
                  <select value={domain} onChange={(e) => setDomain(e.target.value)} style={inputStyle}>
                    <option value="tinyurl.com">tinyurl.com</option>
                    <option value="tiny.one">tiny.one</option>
                  </select>
                </div>

                {/* 3. ALIAS BOX */}
                <div style={{ flex: "1" }}>
                  <label style={{ fontSize: "13px", fontWeight: "700", color: "#0F2A3D" }}>Alias (optional)</label>
                  <input
                    type="text"
                    value={alias}
                    onChange={(e) => setAlias(e.target.value)}
                    placeholder="Add alias here"
                    style={inputStyle}
                  />
                </div>
              </div>

              <button onClick={handleShorten} style={{ width: "100%", marginTop: "18px", background: "#1E8A4C", color: "white", border: "none", padding: "13px", borderRadius: "5px", fontWeight: "700", cursor: "pointer" }}>
                Shorten Link
              </button>

              {shortLink && (
                <div style={{ marginTop: "14px", background: "#ECFDF5", border: "1px solid #A7F3D0", padding: "12px", borderRadius: "5px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ color: "#065F46", fontWeight: "700", fontSize: "14px" }}>{shortLink}</span>
                  <button onClick={handleCopy} style={{ background: "#0F2A3D", color: "white", border: "none", padding: "7px 12px", borderRadius: "4px", cursor: "pointer" }}>
                    {copied ? "Copied" : "Copy"}
                  </button>
                </div>
              )}
            </>
          ) : (
            <>
              <label style={{ fontSize: "13px", fontWeight: "700", color: "#0F2A3D" }}>Enter URL for QR Code</label>
              <input type="text" value={longUrl} onChange={(e) => setLongUrl(e.target.value)} placeholder="Paste long URL here" style={inputStyle} />
              <button style={{ width: "100%", marginTop: "16px", background: "#1E8A4C", color: "white", border: "none", padding: "13px", borderRadius: "5px", fontWeight: "700", cursor: "pointer" }}>
                Generate QR Code
              </button>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default UrlShortenerHero;