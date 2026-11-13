import { Link } from "react-router-dom";

function Signup() {
  return (
    <div style={{ display: "flex", minHeight: "100vh", fontFamily: "sans-serif" }}>
      
      {/* LEFT SIDE - FORM */}
      <div style={{ flex: 1, padding: "30px 60px" }}>
        <h1 style={{ fontSize: "28px", fontWeight: "900", fontStyle: "italic", letterSpacing: "-1px", color: "#1e6f8a" }}>
          TINYURL
        </h1>

        <h2 style={{ fontSize: "38px", fontWeight: "800", marginTop: "60px", marginBottom: "5px" }}>Sign Up</h2>
        <p>Already have an account? <Link to="/login" style={{ color: "#1e6f8a", fontWeight: "bold", textDecoration: "none" }}>Log in</Link></p>

        <p style={{ textAlign: "center", margin: "30px 0 15px", color: "#666" }}>continue with</p>

        <label style={{ fontWeight: "600" }}>Name</label>
        <input type="text" placeholder="Enter Full Name" style={{ width: "100%", padding: "12px", margin: "8px 0 20px", border: "1px solid #ddd", borderRadius: "6px" }} />

        <label style={{ fontWeight: "600" }}>Email</label>
        <input type="email" placeholder="Enter Email Address" style={{ width: "100%", padding: "12px", margin: "8px 0 20px", border: "1px solid #ddd", borderRadius: "6px" }} />

        <label style={{ fontWeight: "600" }}>Password</label>
        <input type="password" placeholder="Enter Password" style={{ width: "100%", padding: "12px", margin: "8px 0", border: "1px solid #ddd", borderRadius: "6px" }} />

        <div style={{ display: "flex", justifyContent: "space-between", margin: "15px 0 25px", fontSize: "14px" }}>
          <label><input type="checkbox" /> I agree to Terms & Privacy Policy</label>
        </div>

        <button style={{ width: "100%", padding: "14px", background: "#8a99b0", color: "white", border: "none", borderRadius: "6px", fontSize: "16px", cursor: "pointer" }}>
          Sign Up
        </button>
        <p style={{ textAlign: "center", marginTop: "15px", color: "#888" }}>or</p>
      </div>

      {/* RIGHT SIDE - IMAGE - VIDEO WALI PICTURE */}
      <div style={{ flex: 1, background: "linear-gradient(180deg, #0a5a7a, #0d2a3a)", color: "white", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "20px", textAlign: "center" }}>
        <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500" alt="welcome" style={{ width: "320px", borderRadius: "15px", objectFit: "cover" }} />
        <h2 style={{ marginTop: "25px", fontSize: "28px" }}>Welcome to TinyURL!</h2>
        <p style={{ opacity: 0.8 }}>Create short, memorable links in seconds, track clicks and boost your brand.</p>
      </div>

    </div>
  );
}

export default Signup;