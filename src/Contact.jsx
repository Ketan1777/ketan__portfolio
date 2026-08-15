import { useState } from "react";

function Contact({ sketchMode }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  /* =========================================================
     HANDLE INPUT
  ========================================================= */

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));

    setStatus("");
  };

  /* =========================================================
     SUBMIT FORM
  ========================================================= */

  const handleSubmit = async (event) => {
    event.preventDefault();

    const { name, email, message } = formData;

    /* VALIDATION */

    if (!name.trim()) {
      setStatus("Please enter your name.");
      return;
    }

    if (!email.trim()) {
      setStatus("Please enter your email.");
      return;
    }

    if (!email.includes("@")) {
      setStatus("Please enter a valid email.");
      return;
    }

    if (!message.trim()) {
      setStatus("Please enter your message.");
      return;
    }

    setLoading(true);
    setStatus("");

    /* =======================================================
       SEND TO NODE.JS BACKEND
    ======================================================= */

    try {
      const response = await fetch(
        "http://localhost:5000/api/contact",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify({
            name,
            email,
            message,
          }),
        }
      );

      const data = await response.json();

      if (data.success) {
        setStatus("Message sent successfully! 🚀");

        setFormData({
          name: "",
          email: "",
          message: "",
        });
      } else {
        setStatus(
          data.message || "Failed to send message."
        );
      }

    } catch (error) {

      console.error(
        "Contact form error:",
        error
      );

      setStatus(
        "Unable to connect to the server."
      );

    } finally {
      setLoading(false);
    }
  };

  /* =========================================================
     CONTACT
  ========================================================= */

  return (
    <section
      id="contact"
      className={`contact-section ${
        sketchMode
          ? "sketch-contact"
          : "nightmare-contact"
      }`}
    >

      <div className="contact-container">

        {/* =================================================
            SECTION LABEL
        ================================================= */}

        <div className="section-label">

          <span className="section-number">
            04
          </span>

          <span className="section-line" />

          <span>
            CONTACT
          </span>

        </div>


        {/* =================================================
            HEADING
        ================================================= */}

        <div className="contact-heading">

          <h2>
            LET'S BUILD

            <span>
              SOMETHING GREAT.
            </span>
          </h2>

          <p>
            Have an idea, project or opportunity?
            Let's turn it into something meaningful.
          </p>

        </div>


        {/* =================================================
            CONTACT GRID
        ================================================= */}

        <div className="contact-grid">

          {/* =================================================
              LEFT SIDE
          ================================================= */}

          <div className="contact-info">

            <span className="contact-small-title">
              GET IN TOUCH
            </span>

            <p>
              I'm always interested in new projects,
              creative ideas and opportunities to build
              something interesting.
            </p>

            <a
              href="mailto:ketantiwarii86@gmail.com"
              className="contact-email"
            >
              ketantiwarii86@gmail.com

              <span>
                ↗
              </span>

            </a>

          </div>


          {/* =================================================
              RIGHT SIDE
          ================================================= */}

          <form
            className="contact-form"
            onSubmit={handleSubmit}
          >

            {/* =================================================
                NAME
            ================================================= */}

            <div className="form-group">

              <label htmlFor="name">
                YOUR NAME
              </label>

              <input
                id="name"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                required
              />

            </div>


            {/* =================================================
                EMAIL
            ================================================= */}

            <div className="form-group">

              <label htmlFor="email">
                YOUR EMAIL
              </label>

              <input
                id="email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
              />

            </div>


            {/* =================================================
                MESSAGE
            ================================================= */}

            <div className="form-group">

              <label htmlFor="message">
                YOUR MESSAGE
              </label>

              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                placeholder="Tell me about your project..."
                required
              />

            </div>


            {/* =================================================
                STATUS
            ================================================= */}

            {status && (
              <div
                className={`contact-status ${
                  status.includes("successfully")
                    ? "success"
                    : "error"
                }`}
              >
                {status}
              </div>
            )}


            {/* =================================================
                SUBMIT
            ================================================= */}

            <button
              type="submit"
              className="contact-submit"
              disabled={loading}
            >

              <span>
                {loading
                  ? "SENDING..."
                  : "SEND MESSAGE"}
              </span>

              <span>
                {loading
                  ? "..."
                  : "→"}
              </span>

            </button>

          </form>

        </div>


        {/* =================================================
            SOCIAL LINKS
        ================================================= */}

        <div className="contact-socials">

          <a
            href="https://github.com/Ketan1777"
            target="_blank"
            rel="noopener noreferrer"
          >
            GITHUB ↗
          </a>

          <a
            href="https://www.linkedin.com/in/ketan-tiwari-70b07a2a6"
            target="_blank"
            rel="noopener noreferrer"
          >
            LINKEDIN ↗
          </a>

          <a
            href="https://www.instagram.com/prime_ketan_17"
            target="_blank"
            rel="noopener noreferrer"
          >
            INSTAGRAM ↗
          </a>

        </div>

      </div>

    </section>
  );
}

export default Contact;