import { Link } from "react-router-dom";

function Domains() {
  return (
    <div style={{ fontFamily: "sans-serif", minHeight: "100vh", background: "#0a4a6b", color: "white" }}>

      {/* NAVBAR - Sab pages me same */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "14px 45px" }}>
        <Link to="/" style={{ fontSize: "28px", fontWeight: "900", fontStyle: "italic", letterSpacing: "-1px", color: "white", textDecoration: "none" }}>TINYURL</Link>
        <div style={{ display: "flex", gap: "28px", fontSize: "14px" }}>
          <Link to="/" style={{ color: "white", textDecoration: "none" }}>Plans</Link>
          <Link to="/" style={{ color: "white", textDecoration: "none" }}>Features</Link>
          <Link to="/domains" style={{ color: "white", textDecoration: "none", fontWeight: "bold", borderBottom: "2px solid #00b140" }}>Domains</Link>
          <Link to="/" style={{ color: "white", textDecoration: "none" }}>Resources</Link>
        </div>
        <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
          <Link to="/login" style={{ color: "white", textDecoration: "none", fontSize: "14px" }}>Log in</Link>
          <Link to="/signup" style={{ background: "#00b140", color: "white", padding: "8px 18px", borderRadius: "6px", textDecoration: "none", fontWeight: "700", fontSize: "14px" }}>Sign Up</Link>
        </div>
      </div>

      {/* DOMAINS PAGE - VIDEO WALA HISSA */}
      <div style={{ display: "flex", alignItems: "center", padding: "50px 55px", gap: "40px" }}>

        {/* LEFT SIDE - TEXT */}
        <div style={{ flex: 1.1 }}>
          <h1 style={{ fontSize: "46px", lineHeight: "1.15", marginBottom: "16px" }}>Custom Domains:<br />Your Links,<br />Your Branding</h1>
          <p style={{ color: "#cfe0ff", lineHeight: "1.6", fontSize: "15px", maxWidth: "480px", marginBottom: "22px" }}>
            Build trust and brand recognition with your own custom domain.
            Create short, branded links that reflect your identity, not ours.
            Use your own domain to make every link memorable, professional and fully yours.
          </p>
          <p style={{ color: "#cfe0ff", lineHeight: "1.6", fontSize: "14px", maxWidth: "480px", marginBottom: "25px" }}>
            With a Pro plan or higher, you can connect your own domain, or purchase
            a new domain directly through TinyURL. Use your custom domain to create
            branded links for your business, campaigns and social media.
          </p>

          <div style={{ display: "flex", gap: "12px" }}>
            <Link to="/signup" style={{ background: "#00b140", color: "white", padding: "13px 24px", borderRadius: "6px", fontWeight: "700", textDecoration: "none", fontSize: "15px" }}>Get Premium</Link>
            <button style={{ background: "transparent", color: "white", padding: "13px 24px", borderRadius: "6px", fontWeight: "700", border: "1px solid white", cursor: "pointer", fontSize: "15px" }}>Try it now</button>
          </div>

          <div style={{ display: "flex", gap: "10px", marginTop: "28px", flexWrap: "wrap" }}>
            <span style={{ background: "rgba(255,255,255,0.12)", padding: "8px 14px", borderRadius: "20px", fontSize: "13px" }}>✓ Branded Links</span>
            <span style={{ background: "rgba(255,255,255,0.12)", padding: "8px 14px", borderRadius: "20px", fontSize: "13px" }}>✓ Custom Domain</span>
            <span style={{ background: "rgba(255,255,255,0.12)", padding: "8px 14px", borderRadius: "20px", fontSize: "13px" }}>✓ Link Analytics</span>
          </div>
        </div>

        {/* RIGHT SIDE - IMAGE */}
        <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
          <img
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600"
            alt="Custom Domains"
            style={{ width: "100%", maxWidth: "480px", borderRadius: "15px", objectFit: "cover", boxShadow: "0 15px 40px rgba(0,0,0,0.3)" }}
          />
          <div style={{ background: "white", color: "#222", width: "100%", maxWidth: "480px", padding: "16px", borderRadius: "10px", marginTop: "-30px", display: "flex", alignItems: "center", gap: "12px", boxShadow: "0 10px 25px rgba(0,0,0,0.2)" }}>
            <span style={{ fontSize: "22px" }}>🌐</span>
            <div style={{ textAlign: "left", flex: 1 }}>
              <b style={{ fontSize: "14px" }}>yourbrand.com / summer-sale</b>
              <p style={{ fontSize: "12px", color: "#777" }}>Your custom branded short link</p>
            </div>
            <span style={{ background: "#00b140", color: "white", padding: "6px 12px", borderRadius: "5px", fontSize: "12px", fontWeight: "700" }}>LIVE</span>
          </div>

          {/* 3 Domains Example - Video jaisa */}
          <div style={{ display: "flex", gap: "10px", marginTop: "18px", width: "100%", maxWidth: "480px" }}>
            <div style={{ flex: 1, background: "white", color: "#222", padding: "12px", borderRadius: "8px", fontSize: "13px", fontWeight: "600" }}>🔗 tinyurl.com</div>
            <div style={{ flex: 1, background: "#ff9f1c", color: "white", padding: "12px", borderRadius: "8px", fontSize: "13px", fontWeight: "700" }}>🌐 yourbrand.com</div>
            <div style={{ flex: 1, background: "white", color: "#222", padding: "12px", borderRadius: "8px", fontSize: "13px", fontWeight: "600" }}>🔗 tiny.one</div>
          </div>
        </div>
      </div>

      {/* NEECHAY - 3 CARDS */}
      <div style={{ display: "flex", gap: "20px", padding: "0 55px 50px" }}>
        <div style={{ flex: 1, background: "rgba(255,255,255,0.08)", padding: "22px", borderRadius: "12px" }}>
          <h3>1. Connect Your Domain</h3>
          <p style={{ color: "#cfe0ff", fontSize: "14px", marginTop: "8px", lineHeight: "1.6" }}>Apna pehle se khareeda hua domain connect karo, ya TinyURL se naya khareedo.</p>
        </div>
        <div style={{ flex: 1, background: "rgba(255,255,255,0.08)", padding: "22px", borderRadius: "12px" }}>
          <h3>2. Create Branded Links</h3>
          <p style={{ color: "#cfe0ff", fontSize: "14px", marginTop: "8px", lineHeight: "1.6" }}>Har link tumhare brand ke naam se banega, jo dekhne me professional lagega.</p>
        </div>
        <div style={{ flex: 1, background: "rgba(255,255,255,0.08)", padding: "22px", borderRadius: "12px" }}>
          <h3>3. Track & Grow</h3>
          <p style={{ color: "#cfe0ff", fontSize: "14px", marginTop: "8px", lineHeight: "1.6" }}>Clicks, location aur devices ki analytics dekho aur apni audience ko samjho.</p>
        </div>
      </div>

    </div>
  );
}

export default Domains;