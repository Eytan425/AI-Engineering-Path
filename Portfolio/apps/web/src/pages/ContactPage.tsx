import { useForm, ValidationError } from '@formspree/react';
import "./ContactPage.css";

export default function ContactPage() {
  const [state, handleSubmit] = useForm("xqewqpqz");

  if (state.succeeded) { //Verifies its connection
    return (
      <section className="contact-page">
        <div className="contact-page-shell">
          <header className="contact-page-intro">
            <h1>Contact</h1>
            <p className="introText">Thanks for reaching out! I'll get back to you soon.</p>
          </header>
        </div>
      </section>
    );
    
  }

  return (
    <section className="contact-page">
      <div className="contact-page-shell">
        <header className="contact-page-intro">
          <h1>Contact</h1>
          <p className="introText">Get in touch before I write another line of code!</p>
        </header>

        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Name<span className="required-star">*</span></label>
            <input id="name" type="text" name="name" placeholder="Your name, your fame" required />
            <ValidationError prefix="Name" field="name" errors={state.errors} />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email<span className="required-star">*</span></label>
            <input id="email" type="email" name="email" placeholder="Where can I reach you back?" required />
            <p className="form-hint">Temporary emails are also accepted, unless you wish to hear back 😉</p>
            <ValidationError prefix="Email" field="email" errors={state.errors} />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message<span className="required-star">*</span></label>
            <textarea id="message" name="message" placeholder="Your words, my inbox." required />
            <ValidationError prefix="Message" field="message" errors={state.errors} />
          </div>

          <button type="submit" className="submit-btn" disabled={state.submitting}>
            {state.submitting ? "Sending..." : "Submit"}
          </button>
          
          <button type="reset" className="reset-btn">Reset</button>
        </form>
      </div>
    </section>
  );
}