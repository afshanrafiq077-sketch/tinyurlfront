import { Link } from "react-router-dom";

function Resources() {
  return (
    <div style={{ fontFamily: "sans-serif", minHeight: "100vh", background: "#0a4a6b", color: "white" }}>

      {/* NAVBAR */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "14px 45px" }}>
        <Link to="/" style={{ fontSize: "28px", fontWeight: "900", fontStyle: "italic", color: "white", textDecoration: "none" }}>TINYURL</Link>
        <div style={{ display: "flex", gap: "28px", fontSize: "22px", fontWeight: "600" }}>
          <Link to="/" style={{ color: "white", textDecoration: "none" }}>Plans</Link>
          <Link to="/" style={{ color: "white", textDecoration: "none" }}>Features</Link>
          <Link to="/domains" style={{ color: "white", textDecoration: "none" }}>Domains</Link>
          <Link to="/resources" style={{ color: "white", textDecoration: "none", borderBottom: "2px solid #00b140" }}>Resources</Link>
        </div>
        <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
          <Link to="/login" style={{ color: "white", textDecoration: "none", fontSize: "14px" }}>Log in</Link>
          <Link to="/signup" style={{ background: "#00b140", color: "white", padding: "8px 18px", borderRadius: "6px", textDecoration: "none", fontWeight: "700", fontSize: "14px" }}>Sign Up</Link>
        </div>
      </div>

      {/* POORA PHELA HUA WHITE HISSA - VIDEO JESA */}
      <div style={{ background: "white", color: "#222", width: "100%", minHeight: "calc(100vh - 70px)", padding: "40px 60px" }}>

        <h2 style={{ fontSize: "28px", margin: "0 0 35px" }}>Resources</h2>

        <div style={{ display: "flex", gap: "80px" }}>
          {/* LEFT - POORA PHELA HUA */}
          <div style={{ flex: 1 }}>
            <div style={{ display: "flex", gap: "14px", marginBottom: "35px" }}>
              <span style={{ fontSize: "24px" }}>📝</span>
              <div>
                <b style={{ fontSize: "18px" }}>Blog</b>
                <p style={{ fontSize: "14px", color: "#777", margin: "4px 0 0" }}>Read the latest tips an dtricks from top<br></br> expert of the link shortening</p>
              </div>
            </div>
            <div style={{ display: "flex", gap: "14px" }}>
              <span style={{ fontSize: "24px" }}>ℹ️</span>
              <div>
                <b style={{ fontSize: "18px" }}>About Us</b>
                <p style={{ fontSize: "14px", color: "#777", margin: "4px 0 0" }}>Learn about our tinyURLs journey as the<br></br>first link shortner</p>
              </div>
            </div>
          </div>

          {/* RIGHT - POORA PHELA HUA */}
          <div style={{ flex: 1 }}>
            <div style={{ display: "flex", gap: "14px", marginBottom: "35px" }}>
              <span style={{ fontSize: "24px" }}>👨‍💻</span>
              <div>
                <b style={{ fontSize: "18px" }}>For Developers</b>
                <p style={{ fontSize: "14px", color: "#777", margin: "4px 0 0" }}>Power your Apps and software with<br></br>automated fully customURL custom<br></br> shortening</p>
              </div>
            </div>
            <div style={{ display: "flex", gap: "14px" }}>
              <span style={{ fontSize: "24px" }}>🏆</span>
              <div>
                <b style={{ fontSize: "18px" }}>Our Proven Process</b>
                <p style={{ fontSize: "14px", color: "#777", margin: "4px 0 0" }}>Learn how aur customers go from<br></br>zero to hero with our link<br></br>management tools</p>             </div>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
}

export default Resources;