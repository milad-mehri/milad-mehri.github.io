import React, { useEffect } from "react";

const ProjectClosure = () => {
  useEffect(() => {
    document.title = "Project Update - Closure Notice";

    // Add Google Analytics
    const gaScript = document.createElement('script');
    gaScript.async = true;
    gaScript.src = 'https://www.googletagmanager.com/gtag/js?id=G-BNFMDXLG3B';
    document.head.appendChild(gaScript);
    
    window.dataLayer = window.dataLayer || [];
    function gtag(){window.dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-BNFMDXLG3B');
    gtag('config', 'G-BNFMDXLG3B', { 'page_path': window.location.pathname + window.location.search });

    const fontAwesome = document.createElement("link");
    fontAwesome.href =
      "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css";
    fontAwesome.rel = "stylesheet";
    fontAwesome.crossOrigin = "anonymous";
    document.head.appendChild(fontAwesome);

    const style = document.createElement("style");
    style.textContent = `
      :root {
        --accent: #22c55e;
        --accent-light: #bbf7d0;
      }
      .gradient-text {
        background: linear-gradient(90deg, #22c55e, #14b8a6);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        color: transparent;
      }
      [disabled], .unclickable {
        pointer-events: none;
        opacity: 0.6;
        cursor: not-allowed;
      }
      @media (max-width: 768px) {
        .mobile-menu { display: none; }
        .mobile-menu.open { display: block; }
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(fontAwesome);
      document.head.removeChild(style);
      if (document.head.contains(gaScript)) {
        document.head.removeChild(gaScript);
      }
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      {/* HEADER */}
      <header className="w-full bg-white shadow-sm border-b border-gray-200 relative z-50">
        <div
          id="notice-banner"
          className="w-full border-b border-[var(--accent-light)]/30"
        >
          <div className="max-w-4xl mx-auto px-3 sm:px-6 py-2 flex items-center justify-between text-sm text-gray-700">
            <span>
              🕊️ This page marks the closure of a side project.
            </span>
            <button
              className="text-gray-500 hover:text-gray-700"
              onClick={() =>
                document.getElementById("notice-banner").classList.add("hidden")
              }
            >
              Dismiss
            </button>
          </div>
        </div>

        <div className="max-w-4xl mx-auto flex justify-between items-center px-3 sm:px-6 py-3 sm:py-5 w-full">
          <div className="flex items-center space-x-2 sm:space-x-3">
            <span className="gradient-text text-xl sm:text-2xl font-extrabold tracking-tight">
              Project Archive
            </span>
            <div className="flex items-center">
              <span className="h-4 w-px bg-gray-300 mx-2 sm:mx-3"></span>
              <span className="text-sm sm:text-base font-medium text-gray-600">
                Daily 231 - Final
              </span>
            </div>
          </div>

          <nav className="hidden md:flex items-center space-x-6 unclickable">
            <span className="text-sm sm:text-base font-medium text-gray-400">
              Home
            </span>
            <span className="text-sm sm:text-base font-medium text-gray-400">
              Archive
            </span>
            <span className="text-sm sm:text-base font-medium text-gray-400">
              Feedback
            </span>
            <button
              className="text-gray-300 p-1.5 sm:p-2 rounded-full"
              title="Streaks"
              disabled
            >
              <i className="fas fa-bolt text-lg sm:text-xl"></i>
            </button>
            <button
              className="text-gray-300 p-1.5 sm:p-2 rounded-full"
              title="Info"
              disabled
            >
              <i className="fas fa-question-circle text-lg sm:text-xl"></i>
            </button>
            <button
              className="text-gray-300 p-1.5 sm:p-2 rounded-full"
              title="Settings"
              disabled
            >
              <i className="fas fa-cog text-lg sm:text-xl"></i>
            </button>
          </nav>
        </div>
      </header>

      {/* MAIN CONTENT */}
      <main className="flex-grow flex flex-col bg-gray-100 overflow-auto">
        <section className="bg-white border-b border-gray-200">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10 text-left">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-6">
              A Short Note Before Signing Off
            </h1>

            {/* UPDATE SECTION */}
            <div className="mt-2 mb-10 border-l-4 border-[var(--accent-light)] pl-4">
              <p className="text-gray-700 text-base leading-relaxed">
                <strong>Update (November 11, 2025):</strong>
                After a Uniform Domain Name Dispute Resolution Policy process
                with the World Intellectual Property Organization (WIPO), a
                decision was made under Case No. <strong>DCO2025-0079</strong>.
                The panel decided that the domain name linked to this project
                would be transferred to the complainant.
                <br />
                <br />
                If you’d like to stay in touch or see what comes next, you can
                find me on
                <span className="text-[var(--accent)] font-semibold cursor-not-allowed select-text ml-1">
                  linkedin.com/in/milad-mehri1
                </span>
                .
              </p>
            </div>

            {/* LINKEDIN EMBED */}
            <div className="linkedin-embed max-w-2xl mt-8 flex justify-center">
              <iframe
                src="https://www.linkedin.com/embed/feed/update/urn:li:share:7356101011368800256?collapsed=1"
                style={{
                  width: "100%",
                  border: "none",
                  overflow: "hidden",
                  height: "400px",
                  marginBottom: "2rem",
                }}
                frameBorder="0"
                scrolling="no"
                allowFullScreen
                title="LinkedIn post"
              ></iframe>
            </div>

            {/* PROJECT SUMMARY */}
            <p className="text-gray-600 text-lg max-w-2xl mb-6 leading-relaxed">
              The project started as a small experiment early in the year and
              grew faster than expected. Over just a few months, it reached more
              than <strong>1 million plays</strong> across{" "}
              <strong>168 countries</strong>, building a small self-sustaining
              community that created and shared their own puzzles. It was
              simple, fun, and surprisingly global.
            </p>

            <p className="text-gray-600 text-lg max-w-2xl mb-8 leading-relaxed">
              Things took a different turn later on when a notice arrived from
              LinkedIn, followed by a formal complaint filed with WIPO under the
              UDRP process. The final decision came in November 2025, closing
              the chapter officially. Still, it was a great run — and every
              message, play, and post made it worth it.
            </p>

            {/* CLOSING PARAGRAPH */}
            <p className="text-gray-600 text-base max-w-2xl mt-8 leading-relaxed">
              Thank you to everyone who was part of it — even for a moment. The
              project might be closing, but the ideas and lessons behind it will
              continue to shape what comes next.
            </p>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="bg-white border-t border-gray-200 py-6">
        <div className="max-w-4xl mx-auto px-4 text-sm text-gray-500">
          © 2025 — Created independently as a student project.
        </div>
      </footer>
    </div>
  );
};

export default ProjectClosure;
