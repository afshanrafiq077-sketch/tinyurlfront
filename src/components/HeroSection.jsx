const HeroSection = () => {
  return (
    <section style={{ width: "100%", display: "flex", flexWrap: "wrap", minHeight: "520px", background: "#fff" }}>

      {/* LEFT - Image + Green Circle */}
      <div style={{ flex: "1.15", minWidth: "320px", position: "relative", overflow: "hidden", minHeight: "420px", background: "#E8EEF1" }}>
        
        {/* Green Circle */}
        <div style={{
          position: "absolute",
          top: "50%",
          left: "58%",
          transform: "translate(-50%, -50%)",
          width: "380px",
          height: "380px",
          background: "#1E8A4C",
          borderRadius: "50%",
          zIndex: "1"
        }}></div>

        {/* Hands + Tablet Image */}
        <img
          src="https://tinyurl.com/build/assets/shortener-video-5-iGTGim.webp"
          alt="Link Shortening"
          style={{
            position: "absolute",
            top: "0",
            left: "0",
            width: "100%",
            height: "100%",
            objectFit: "cover",
            zIndex: "2"
          }}
        />
      </div>

      {/* RIGHT - Blue Content */}
      <div style={{ flex: "1", minWidth: "320px", background: "#0E7A9B", color: "white", padding: "60px 45px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
        <h1 style={{ fontSize: "38px", fontWeight: "800", lineHeight: "1.15", margin: "0" }}>
          Link Shortening Done<br />Quick and Easy
        </h1>

        <p style={{ fontSize: "15px", lineHeight: "1.7", marginTop: "22px", color: "#EAF6FA" }}>
          Our URL shortener is not only among the first-ever link shorteners on the Internet — it's the best out there.
        </p>

        <p style={{ fontSize: "15px", lineHeight: "1.7", marginTop: "18px", color: "#EAF6FA" }}>
          Shorten links for social media, blogs, SMS, emails, ads, and almost anything both off- and online.
        </p>

        <p style={{ fontSize: "15px", lineHeight: "1.7", marginTop: "18px", color: "#EAF6FA" }}>
          Wave goodbye to long, clunky links and give your audiences the experiences they deserve!
        </p>

        <div style={{ display: "flex", gap: "12px", marginTop: "30px", flexWrap: "wrap" }}>
          <button style={{ background: "white", color: "#0F2A3D", padding: "10px 18px", border: "none", borderRadius: "4px", fontWeight: "700", cursor: "pointer" }}>
            View Plans
          </button>
          <button style={{ background: "#0F2A3D", color: "white", padding: "10px 18px", border: "none", borderRadius: "4px", fontWeight: "700", cursor: "pointer" }}>
            Contact Sales
          </button>
        </div>
      </div>

    </section>
  );
};

export default HeroSection;