const StatsSection = () => {
  return (
    <section style={{ width: "100%", padding: "0 20px 60px 20px", background: "#fff" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", display: "flex", overflow: "hidden", borderRadius: "8px", flexWrap: "wrap" }}>

        {/* LEFT - Dark Blue */}
        <div style={{ flex: "1", minWidth: "320px", background: "#0A2540", color: "white", padding: "45px 40px" }}>
          <h2 style={{ fontSize: "30px", fontWeight: "bold", lineHeight: "1.2" }}>
            Transforming the Digital<br />Landscape Since '02
          </h2>
          <p style={{ fontSize: "14px", lineHeight: "1.6", color: "#D1DCE6", marginTop: "18px" }}>
            TinyURL has created billions of short links for marketers, influencers, small business owners, and large businesses.
          </p>

          <div style={{ marginTop: "35px", display: "flex", flexDirection: "column", gap: "22px" }}>
            <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
              <b style={{ fontSize: "22px", minWidth: "180px" }}>Billions</b>
              <span style={{ fontSize: "14px", color: "#D1DCE6" }}>of redirects per month</span>
            </div>
            <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
              <b style={{ fontSize: "22px", minWidth: "180px" }}>24 years</b>
              <span style={{ fontSize: "14px", color: "#D1DCE6" }}>of shortening URLs</span>
            </div>
            <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
              <b style={{ fontSize: "22px", minWidth: "180px" }}>33,043,388,634</b>
              <span style={{ fontSize: "14px", color: "#D1DCE6" }}>TinyURLs Created</span>
            </div>
          </div>
        </div>

        {/* RIGHT - Image */}
        <div style={{ flex: "1", minWidth: "320px" }}>
          <img
            src="https://tinyurl.com/build/assets/platform-highlight-video-D3DEDauT.webp"
            alt="Team working"
            style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", minHeight: "350px" }}
          />
        </div>

      </div>
    </section>
  );
};

export default StatsSection;