
import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Awards from "@/components/Awards";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [activeSectionId, setActiveSectionId] = useState("home");

  useEffect(() => {
    // Simulate system boot-up
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    // Track active section
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]");
      const scrollPosition = window.scrollY + 300;

      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop;
        const sectionHeight = section.clientHeight;
        const sectionId = section.getAttribute("id") || "";

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSectionId(sectionId);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {isLoading ? (
        <div className="fixed inset-0 bg-cyber-black flex flex-col items-center justify-center z-50">
          <div className="max-w-md w-full px-4">
            <div className="mb-4">
              <h1 className="text-cyber-neon font-mono text-center text-xl">
                SYSTEM BOOT<span className="animate-pulse">_</span>
              </h1>
              <p className="text-cyber-neon/70 font-mono text-center text-sm mt-1">
                INITIALIZING NEURAL INTERFACE
              </p>
            </div>
            
            <div className="h-2 bg-cyber-dark rounded-full overflow-hidden mb-4 relative">
              <div className="h-full bg-gradient-to-r from-cyber-neon via-cyber-pink to-cyber-blue absolute top-0 left-0 animate-dataflow" style={{width: '100%'}}></div>
            </div>
            
            <div className="font-mono text-xs text-cyber-muted">
              <p className="animate-pulse">Loading personal data...</p>
              <p className="mt-1">Connecting to neural network...</p>
              <p className="mt-1">Initializing cybernetic interface...</p>
              <p className="mt-1">Compiling digital persona...</p>
              <p className="mt-1 text-cyber-pink">Establishing secure connection...</p>
            </div>
          </div>
        </div>
      ) : (
        <div className="min-h-screen bg-cyber-black text-cyber-text relative">
          {/* Cyberpunk overlay effects */}
          <div className="fixed inset-0 bg-[url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAOg0lEQVR4nO1dbVczNw69JCEvBJInEEIgEIb//6/6fbu73e77tt0P1o2vZFtOCPQ5p8mZM7M7dx3HtizLkuQr9d/+539BSupe3/ve6T8vbjfuT2fg/7xQNf7nKfNZPmvhXr+ncj3K62PVqrpv1OeucrXr/9D49rqc1Y/reeonFD7roIYGbqqCGeo3Kj7K2Iafzcc6beCHFJR+tooRD8O3RbiIPi3CO9H3dFi+TUi5uMon6ujH30xmHygSlg+LP9M0z8njmJGnH+md304WfIr6kqnJ/TKRJUhD/SOhCVNflUWZBXZMnOe2XZb/2S8fzx+YJDn9k8r8p0QpCq8yRfrBQwoFElUWmSUJI0QiJLSyYuz84Kzu6JIE2jVz9C6CxH4Xubj9ynqZhZ52/APbROrWE1gVuOhgVahldX+7Mk9/xBk9GRVVrKec/4SdBYt+7jezJGscnauPEgJ9ffz5eH3hSoMexccGFbb8IMNfaFHYF4VDUhZRbiahxTo8r/qCKFPYWP0+Qoi0d+f3opQ3LYZBfq/+hr/dsSQ/PLyzFcr0bjD70KbIUE/avHHk5HJC39yyMLCt7nsY31mJa5H2XqVgWcgrRYXOCrX3X9Ya1THHNUuF1JDsC2uMopc+C/Wa+q2o4FYnjBQbQZgl4SWh4fr96xeJ/BMfSOVEXAEtIcWXpHmVSj7zQQ7qZz7MIt2TYK7f3UTaho4VdIwfz9yn+PR9vQsckmMBKmKJQp6I/9j6ZU+G2B753sbvo7iWLqUSdL1WcbVRFLqqDHW/QRHBy9d0ErqsOvI9pkjJuYUBiV02KDeLUNwrS67YzFEGZMwU9lSHZZCLWXztrTM830URyq0S/IY2rFe9qrrK4eK+9QAuJgT8QZ2ZUouUgXcok4aDDT7+LKCuYYhKfy8J4Y+2z7z2Zo76PYvI1JDKi5gEFikC2KCIMqQ/W0yhz8IHciL4xcvzUkt/zbLQ70rNxfIuP5BHjbOY1LkqtCgDKwvapIhfuexJ6BcqVyjbhYFGgiAGQZYtCn9M3XmdGMiRFTr3moNx7Gl9L1Wu0oJFSMnsiCzZ+1GwEeDU/kxdezKg7XfIxfspj1s3jFQSvUwua4qItjaM06CERgkjiPgz/KyT9dl7J6s28HdaSvcq1qE4I3gMUgRURdadCGKThbk3+8YNbki3jFQA51haOxS5jcMJSWxcfmJS6p8gKc3s3uaNOzdZQabJQ2Gd8iiS3QS9L9MeQdiLaH3DcuoXtgI7wlmr5yscnlrZ1qFoNLM7EqUlQjaqiG/9Pl1gy5T3jxRFQdsTK4JNYQvrcl/bpp/KP95B2LKSIZXQtFAqtrNhM0AF4TTBElie4ZuRRa+PWz3F4ZAbTyHHJkyK5NAY0KZs2UCxJKWFVdxzregPJwvdkMt9Y0vql6GQJ0aZ3YmQxHZnXMzOxrP0mnS7pjc1BuzUvnqH3UHw1++Lsrexv2cfkNwExXwF9zizvEPNN0oRIi2SqPz9hMC5y/214LkXrCgKzSnqCHnQUq7htqvTToKEW/QLwojQP1P5I5Ko5Fz/hKTVduLLXSrJG71tJZ7lBi1JAWem+sieK8hW0moUFceL9FOrm3gH9amyuvnf5OVFZCXm8APMueC+Wg/0OvlPSyEHImRuBW0zXod8TjkUMP7xeZgXTS6meMd6bJKLgYBKnzRd+jFy6d6hsCs3ZVGXYkMPRxTS6FubH3HomW0ZsAH1kWXBQ+Cpcrsk+N4ows8aZSpGQrgt0X0PamqRNJbXIyEoN9jIZdLvRQqKUb1FdfQkkpCh+AzuMVGP9yz3o/7I4ywy0KXKnYUzPBZr+FhsfsuU175E+822hZnyU1v5Jw61z6xlZGZz/Nljb8XPsD4+QeY9dxsD5nIORiiTVCGX7/gF2jDkGpyso2VFWeTl92vr8LkFU5ow12OSJ9e5PZYo9Dy0YI8cFNBzQYGusthX3UuKpdVAYhZqGnxKY/DBmXNYjbZlgRV0m8qUISyUNYUEPOZWQQbO3RShgGWl9yAjKJOfW7ySspnVFUSAuQiJnESbx8r79KF4SNaY3aemTQsypF1YUq+Z9ZbisTQpaV7fpprsEUREvIZwwXLB5KocGVu0FCtGCM761IngZ4Oh3iW1YOOSLpE3sBx7aKN8NmS1mcJncdVHNZ/r3qz6Xby+iJXN5HYwkn3JTLrhnRK+LkO5I4xzsjOIQPScrOEk+UbrMZxnsWMr8Rb2TL7Z4T0+Z9vfb/VaZz6/4Wtv6eKN8jFY5morEj7K44D1tY0fid6nDL7ZQcmNhWZ1BLhKBB5jQXBIZeA9YI8O/yB/iY9//I0u8tiKwo2xalgQj6UcVOfCokgXEZyOQhogp3GEK1AUkCQNHHWCoDmbSB6Ac2c0PQfbxc+e1UdOaPUQXtcQWmNl7TBux662JKBgMWXP4tvMbWbWu/P7KERxoDtBgvu2wV1QfYNrml5+UuSGoCPipR3RKRC29bTPXfYJKAUFrqM2GZ1SaYHRu1SeQk/qC/rzjUwZr5OWl476EucfJOeB9Gd2lvF6NH9dBe3mRxM1Kc62OBUBDPQFjAXtTXJJoJ3Btihllxs2I5qwkMAPtCb3RohRV3MKCxAEUkRf9HnYb8utYgFk6g7qD5J/XAeMDcqQDKd1iRNRAZE+y/WXk9+Jt+m5Jy0r6vuJulxzJg9VKDf1aRE6+lFIup9RHMRPsxFoUKRvL2QE+aqmYugWkR/PNoMvIvn6d6iAwJ9YzYWTJ5dYvPHJoT2Vgiy0QA7FGRZZfZEu2PKx/kGFX08gFH7AEiIfH6jpKDWyjBw7fVy9oj61mQqLXLLSOHyzwzedUHIdkx1UIY1AoaAcS2TsGuXvpyZHpJaNF1ZIYGWKRdiaIVMscrFqCOJIRkIlYlNZZwVRvhw9GhZxEGedEtf3q5Fp0Rx3sVUk5VCQNkt5unDXUNgDQcQXGKi+TWMoogjCcq78uU9P8Z5z3zhiPVPgIo0Cje0Hp7Heq0MdAQzxlZC0v/7eRr1Gln97VPYYsGdQqzTV0DIKRwipKVcGNSqirrAGWneHl0pwMvZnOV5NkBJ2Jy92QN5Skxt4/C9WrH5+gmRr+bwdiJIUJcuwzMS3PdUOsIzJBPlI/uNkxFtWmxRtsXRKa17uuhw3tLxm8uSx9CtTIAJLv/j5aX6M5lL7pighD9n+1UYh64CWp/pQUItl4+/LIigpxVqKObQrYer1C7mBTaTUMvHng9eqpjxdlkoUrAoVco+gPVkPNZCRWkWVddQoJoiKm6h0/KwUCebcGdXAS1XQEvMJc1w/StinVReWOVglGlgOolLNU70ao76Rr+6M+gXLuJ9WhhvOqqoUQXzxLtuih0OoJnYiadBUCw2TqaVEOA9yUvMboayn662O8BQnbsyGvKzfpVSgTr7sf7gVxE9iczKCLjPJEQdbkFLgSP+Cds4sLAVN6wuW5D0Z4udUHeaQGCDXGwHHnX1I/H+4wRljH7RGdyhwPeo+7qBGrlO5WiJypOYEuwuFGtulYn0a2bp1VGZt3kSD/xw708jAUcIWD288y0p8hPyUikyHsVx9WORvvCXrUf0YVe6hYTMEj1vEYZ6QlbRk4kYleGaUv52oLiM+COPbQFsEOPrUJlIT+TEsVri1DaeyGZlZkgq5ELaliCbkMaxCNYWYgZI/6mO5sqj6pFKf8XBCzihnj1S+ri+rJqbp7Hxkxaby7ANAUBgdEzCGghcJHYGrmSWXYPxgvz2YPz7KEiW4l6/f7W3aHJDz9mS5dhU4R+K283iBUCVOS2dnVAzkQG5QneSFmPzNhloiLPMhka8reqZw7nEHDLFSjqhjnrjRPKsKzThG1wftdT8P7F7GcDtdvY7rD7oyTqiirboAmVkeh1a49UF6oTpe67MPUSvc3MAMZnYNPZ8ZD0fOIXiOpwN5V4tn6cT+tDTLQn67qW7zfzqw71SWZkJpc4DnQzNyGKc1S0GwsAKYXby1vJVB2LR9ZcE+wwqovHmHdQEXR6Voc6BMrIDprTFlnzlkXuPWB0a9P1PKjVyPcwr7PqXQPkb4hoQJubZQuN9xGtJAnCXEvVK+fPEXHTy+CxHRb6HPcXAsA0sJzNVP9TiIUn66p2wSX91UJxS6jfWrGh9cEDzGtbeCJhkTQQ6t9w+vtP7/mrl8mOZhWkL6ylSkCeKqumGh0Kgqy4X8XxsEG1/cBB0x6GKU+mPgrmjTWaO8FqW7JXzlAKxwsvn6XYVOkbQoEI0BNY++6S7xJUSn7ogC5crW4VPismvPV1L+wCAJxXR1H/4zP9UVvzL5U9uJt6nVPzvZ2nstSiVFf27rrTPLzyY2ImtQBdZTxSpHWlwzAabN+rAtQhnMxN0X5OwtIzEWDRj1708fP43/SxHg4+ufev3Ffv/r9UW/O/WBfTEm2dIQh6S4U3x0Vr8OM/hCZ/nDkd2H6aqbvdGU/HDl0ecBBF2A5VcX1nGiTkh9AiTADbJk0IHpsBEeeiK/qBnC1NeWjAk3oa5948VCEz1NS6ow4CEH+o5DSa9TvNyEder1hI6C7NktAqsb1FhaSpRlaXP8hJk9rRj7jsh94eL3XHHzJ5WKh5PgGyfGA+aN5D8ec04uDPScRe85Tu18Sz5qx8nUT8MYxCe6DlrXrgdDMzcj8tn7ISNf5fKqm7+JUDn54KvLgJPfcy4f17MiwKYZtuLlloX8BI+NmTd3ORfypQjLoFos44eyf8OVH9tlPuh2cKbcP1nxgCioceQzvcfG3XvSv6GhcgG69slc2xSEraN5smbgasGBe3z5cSexxV5/gz3ys+n+tLrrfstrEfzh1QWlE6MDlQR7HXlF+Gf1mzusFvlw1PV+SYbkCzn6KZD/dzgL43/FZzrHgxrGHpCIQIdMN8U8A6OSm5xKYfpQLewfHdM6Vt87bep7l2alYR5dPrX0//dd/NP/3Mf/AQEACbAyL+mJAAAAAElFTkSuQmCC')] opacity-5 pointer-events-none"></div>
          <div className="fixed inset-0 bg-cyber-grid bg-[length:50px_50px] opacity-10 pointer-events-none"></div>
          
          {/* Main content */}
          <Header activeSectionId={activeSectionId} />
          <div className="relative">
            <Hero />
            <About />
            <Education />
            <Skills />
            <Experience />
            <Projects />
            <Awards />
            <Certifications />
            <Contact />
            <Footer />
          </div>
          
          {/* Navigation assistance */}
          <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-40 hidden lg:block">
            <div className="flex flex-col items-center space-y-4">
              {["home", "about", "education", "skills", "experience", "projects", "awards", "certifications", "contact"].map((section) => (
                <a
                  key={section}
                  href={`#${section}`}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    activeSectionId === section
                      ? "bg-cyber-neon shadow-[0_0_10px_rgba(0,255,252,0.7)]"
                      : "bg-cyber-muted hover:bg-cyber-pink"
                  }`}
                  aria-label={`Navigate to ${section} section`}
                ></a>
              ))}
            </div>
          </div>
          
          {/* Cyberpunk status bar */}
          <div className="fixed bottom-0 left-0 right-0 bg-cyber-black border-t border-cyber-neon/30 text-cyber-muted text-xs z-40 hidden md:block">
            <div className="container mx-auto px-4 py-1 flex justify-between items-center">
              <div className="flex items-center">
                <span className="text-cyber-neon mr-4">STATUS: ONLINE</span>
                <span>SYSTEM SCAN: COMPLETE</span>
              </div>
              <div className="flex items-center">
                <span className="mr-4">MEMORY: OPTIMAL</span>
                <span className="text-cyber-green">CONNECTION: SECURE</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Index;
