const Footer = () => {
  return (
    <footer style={{ width: "100%" }}>

      {/* TOP CTA - Ready to get started */}
      <div style={{ background: "#0F2A3D", color: "white", padding: "60px 20px", textAlign: "center" }}>
        <h2 style={{ fontSize: "32px", fontWeight: "800", margin: "0" }}>
          Ready for Shorter, Smarter Links?
        </h2>
        <p style={{ fontSize: "15px", color: "#CBD5E1", marginTop: "12px" }}>
          Transform a long link into a short, trackable one using our platform. Create a free account or subscribe to a paid plan today!


        </p>
        <button style={{ marginTop: "22px", background: "white", color: "#0F2A3D", padding: "12px 28px", border: "none", borderRadius: "5px", fontWeight: "700", cursor: "pointer", fontSize: "15px" }}>
          Create Free Account
        </button>
      </div>

      {/* MAIN FOOTER */}
      <div style={{ background: "#081C2C", color: "white", padding: "50px 20px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "flex", gap: "40px", flexWrap: "wrap" }}>

          {/* LOGO + ABOUT */}
          <div style={{ flex: "1.2", minWidth: "250px" }}>
            <h2 style={{ fontSize: "28px", fontWeight: "900", letterSpacing: "1px", margin: "0" }}>TINYURL</h2>
            <p style={{ fontSize: "13px", lineHeight: "1.7", color: "#94A3B8", marginTop: "14px" }}>
              Welcome to the original link shortener — simplifying the Internet through the power of the URL since 2002.
            </p>
          </div>

          {/* PRODUCTS */}
          <div style={{ flex: "1", minWidth: "150px" }}>
            <h4 style={{ fontSize: "14px", fontWeight: "700", marginBottom: "16px" }}>Products</h4>
            <p style={linkStyle}>URL Shortener</p>
            <p style={linkStyle}>Branded Links</p>
            <p style={linkStyle}>Link Analytics</p>
            <p style={linkStyle}>QR Codes</p>
          </div>

          {/* FEATURES */}
          <div style={{ flex: "1", minWidth: "150px" }}>
            <h4 style={{ fontSize: "14px", fontWeight: "700", marginBottom: "16px" }}>Features</h4>
            <p style={linkStyle}>Custom Domains</p>
            <p style={linkStyle}>Bulk Short URLs</p>
            <p style={linkStyle}>Link Management</p>
            <p style={linkStyle}>Plans & Pricing</p>
          </div>

          {/* COMPANY */}
          <div style={{ flex: "1", minWidth: "150px" }}>
            <h4 style={{ fontSize: "14px", fontWeight: "700", marginBottom: "16px" }}>Company</h4>
            <p style={linkStyle}>About Us</p>
            <p style={linkStyle}>Blog</p>
            <p style={linkStyle}>Contact Sales</p>
            <p style={linkStyle}>Help Center</p>
          </div>

        </div>

        {/* BOTTOM BAR */}
        <div style={{ maxWidth: "1200px", margin: "40px auto 0", paddingTop: "20px", borderTop: "1px solid #1E3A4F", display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "10px" }}>
          <p style={{ fontSize: "12px", color: "#94A3B8", margin: "0" }}>© 2026 TinyURL. All rights reserved.</p>
          <p style={{ fontSize: "12px", color: "#94A3B8", margin: "0" }}>Privacy Policy &nbsp; | &nbsp; Terms of Service</p>
        </div>
      </div>

    </footer>
  );
};

const linkStyle = { fontSize: "13px", color: "#CBD5E1", margin: "0 0 10px", cursor: "pointer" };

export default Footer;