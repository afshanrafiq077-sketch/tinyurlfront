import { useState } from "react";

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState(0); // 0 matlab pehli wali pehle se khuli hogi

  const faqs = [
    {
      q: "What Is a URL Shortener?",
      a: "A URL Shortener is a tool that converts long website links into short and simple links It makes links easier to share, remember, and manage."
    },
    {
      q: "How Does a URL Shortener Work?",
      a: "A URL Shortener works by taking a long URL and creating a unique, shorter version of it. When someone clicks on the short URL, they are redirected to the original, longer URL."
    },
    {
      q: "What Are the Benefits of Using a Short URL?",
      a: "Using a short URL makes it easier to share links on social media, in emails, or in text messages. It also helps to track the performance of your links and provides a more professional appearance."
    },
    {
      q: "What Is a Custom URL Shortener?",
      a: "A Custom URL Shortener allows you to create short URLs with your own custom domain or brand name, giving you more control over your links and enhancing your brand visibility."
    },
    {
      q: "How Do I Shorten a URL for Free?",
      a: "You can use our free URL shortening service to convert your long links into short, shareable URLs."
    },
    {
      q: "How Do I Know Your Service Is Reliable and Scalable?",
      a: "Our service is built on a robust infrastructure that ensures high availability and performance, even under heavy usage."
    },
    {
      q: "Can I Use a Domain I Already Own?",
      a: "Yes, you can use a domain you already own with our Custom URL Shortener service."
    },
  ];

  return (
    <section style={{ width: "100%", background: "#fff", padding: "60px 20px" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", display: "flex", gap: "50px", flexWrap: "wrap" }}>

        {/* LEFT */}
        <div style={{ width: "260px" }}>
          <h2 style={{ fontSize: "28px", fontWeight: "bold", color: "#0F2A3D", lineHeight: "1.3" }}>
            Frequently<br />Asked<br />Questions
          </h2>
        </div>

        {/* RIGHT - Dropdowns */}
        <div style={{ flex: "1", minWidth: "300px" }}>
          {faqs.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={i} style={{ borderBottom: "1px solid #eee", padding: "18px 0" }}>
                {/* Click wali line */}
                <div
                  onClick={() => setOpenIndex(isOpen ? -1 : i)}
                  style={{ display: "flex", justifyContent: "space-between", alignItems: "center", cursor: "pointer" }}
                >
                  <b style={{ fontSize: "16px", color: "#0F2A3D" }}>{item.q}</b>
                  <span style={{ fontSize: "18px", transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" }}>⌄</span>
                </div>

                {/* Answer - Sirf tab dikhega jab isOpen true ho */}
                {isOpen && (
                  <p style={{ fontSize: "14px", lineHeight: "1.7", color: "#555", marginTop: "12px" }}>
                    {item.a}
                  </p>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default FaqSection;