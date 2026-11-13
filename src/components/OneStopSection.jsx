const OneStopSection = () => {
  const features = [
    {
      title: "Unlimited Tracked Links",
      desc: "Our plans offer limitless tracking, so you'll never miss out on key link data, including clicks, referrers, and locations.",
    },
    {
      title: "Detailed Link Analytics",
      desc: "Stay on top of your links' performance and get insights into the clicks you earn and people you reach.",
    },
    {
      title: "Branded Domains",
      desc: "Create links that match your brand. Customize your domain to build trust and boost click-through rates.",
    },
    {
      title: "Fully Custom Links",
      desc: "Customize the back-half of your links for easy recognition, clear messaging, and enhanced trustworthiness.",
    },
    {
      title: "Bulk Short URLs",
      desc: "Scale your communications with our API, and create thousands of unique short links in the blink of an eye.",
    },
    {
      title: "Link Management",
      desc: "Take full control of your links: search, edit, and manage thousands at a time from a convenient dashboard.",
    },
  ];

  return (
    <section style={{ width: "100%", background: "#fff", padding: "60px 20px" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>

        {/* Top Heading */}
        <div style={{ display: "flex", gap: "40px", alignItems: "flex-start", marginBottom: "50px", flexWrap: "wrap" }}>
          <div style={{ flex: "1", minWidth: "300px" }}>
            <h2 style={{ fontSize: "32px", fontWeight: "bold", color: "#0F2A3D", lineHeight: "1.2", textAlign: "center" }}>
              Your One-Stop Solution for Branding and Managing Links
            </h2>
            <button style={{ marginTop: "20px", background: "#0F2A3D", color: "white", padding: "10px 20px", border: "none", borderRadius: "4px", fontWeight: "600", cursor: "pointer" }}>
              View Plans
            </button>
          </div>
          <div style={{ flex: "1", minWidth: "300px", paddingTop: "10px" }}>
            <p style={{ fontSize: "20px", lineHeight: "1.7", color: "#555" }}>
              We're a comprehensive suite of premium tools made to maximize the reach of your links — and get you more clicks and shares.
            </p>
           
          </div>
        </div>

        {/* 6 Boxes - 3 in 1 row */}
       {/* 3 Columns: Left | Centre Video | Right */}
<div style={{ display: "flex", gap: "25px", alignItems: "center" }}>

  {/* LEFT */}
  <div style={{ width: "32%", display: "flex", flexDirection: "column", gap: "20px" }}>
    <div style={{ background: "#F8FAFC", padding: "20px" }}>
      <h3 style={{ fontSize: "16px", fontWeight: "bold", color: "#0F2A3D" }}>Unlimited Tracked Links</h3>
      <p style={{ fontSize: "13px", lineHeight: "1.6", color: "#555", marginTop: "8px" }}>Our plans offer limitless tracking, so you'll never miss out on key link data.</p>
    </div>
    <div style={{ background: "#F8FAFC", padding: "20px" }}>
      <h3 style={{ fontSize: "16px", fontWeight: "bold", color: "#0F2A3D" }}>Detailed Link Analytics</h3>
      <p style={{ fontSize: "13px", lineHeight: "1.6", color: "#555", marginTop: "8px" }}>Stay on top of your links' performance and get insights into the clicks you earn.</p>
    </div>
    <div style={{ background: "#F8FAFC", padding: "20px" }}>
      <h3 style={{ fontSize: "16px", fontWeight: "bold", color: "#0F2A3D" }}>Branded Domains</h3>
      <p style={{ fontSize: "13px", lineHeight: "1.6", color: "#555", marginTop: "8px" }}>Create links that match your brand. Customize your domain to build trust.</p>
    </div>
  </div>

  {/* CENTRE - Video */}
  <div style={{ width: "36%" }}>
    <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80" style={{ width: "100%", borderRadius: "12px" }} />
  </div>

  {/* RIGHT */}
  <div style={{ width: "32%", display: "flex", flexDirection: "column", gap: "20px" }}>
    <div style={{ background: "#F8FAFC", padding: "20px" }}>
      <h3 style={{ fontSize: "16px", fontWeight: "bold", color: "#0F2A3D" }}>Fully Custom Links</h3>
      <p style={{ fontSize: "13px", lineHeight: "1.6", color: "#555", marginTop: "8px" }}>Customize the back-half of your links for easy recognition and trust.</p>
    </div>
    <div style={{ background: "#F8FAFC", padding: "20px" }}>
      <h3 style={{ fontSize: "16px", fontWeight: "bold", color: "#0F2A3D" }}>Bulk Short URLs</h3>
      <p style={{ fontSize: "13px", lineHeight: "1.6", color: "#555", marginTop: "8px" }}>Scale your communications with our API, create thousands of links in seconds.</p>
    </div>
    <div style={{ background: "#F8FAFC", padding: "20px" }}>
      <h3 style={{ fontSize: "16px", fontWeight: "bold", color: "#0F2A3D" }}>Link Management</h3>
      <p style={{ fontSize: "13px", lineHeight: "1.6", color: "#555", marginTop: "8px" }}>Take full control: search, edit, and manage thousands at a time.</p>
    </div>
  </div>

</div>
      </div>
    </section>
  );
};

export default OneStopSection;