import './App.css'

const bookingUrl =
  'https://calendly.com/stepping-higher-coaching/sample-coaching-session-with-anthony-harrison'

const focusAreas = [
  {
    label: 'Clarity',
    text: "Cut through the noise and get to what is true for you.",
  },
  {
    label: 'Confidence',
    text: 'Reconnect with your instincts and trust your own judgment.',
  },
  {
    label: 'Direction',
    text: 'Move forward with intention, not just momentum.',
  },
]

const signals = [
  "What used to feel right does not quite fit anymore.",
  'You are successful on paper, but something is missing.',
  'You are ready for a shift, but not sure what it looks like yet.',
  'You want clarity, not just more motion.',
]

const coachingIs = [
  'Time to think clearly',
  'Questions that challenge your assumptions',
  'A structured process for sorting through change, uncertainty, and possibility',
  'Support for decisions that reflect who you are and what matters most',
  'Accountability without pressure',
]

const coachingIsNot = [
  'Advice or quick answers',
  'A fixed program or formula',
  'Generic coaching scripts or jargon',
  'Pressure to have it all figured out',
]

const testimonials = [
  {
    quote:
      'Our conversations helped me slow down and see the bigger picture. I came in focused on solving immediate problems but left with a clearer sense of direction and a better understanding of how I want to lead.',
    source: 'Senior leader, technology and design',
  },
  {
    quote:
      'I walked into coaching carrying a lot: self-doubt, pressure, and uncertainty about what I was capable of. Anthony created a space where I could sort through all of it.',
    source: 'Senior government professional',
  },
  {
    quote:
      "Anthony did not give me answers. He asked the right questions. That helped me rethink how I see my own value and how I show up in my career.",
    source: 'Global business professional',
  },
  {
    quote:
      'Working with Anthony helped me step back from the day-to-day noise and think more strategically about where I am headed.',
    source: 'Corporate communications leader',
  },
]

function CtaLink({
  children,
  variant = 'dark',
}: {
  children: React.ReactNode
  variant?: 'dark' | 'light'
}) {
  return (
    <a
      className={`cta-link ${variant === 'light' ? 'cta-link-light' : ''}`}
      href={bookingUrl}
      target="_blank"
      rel="noreferrer"
    >
      <span>{children}</span>
      <span className="cta-mark" aria-hidden="true">
        <span />
      </span>
    </a>
  )
}

function App() {
  return (
    <main className="min-h-[100dvh] overflow-x-hidden bg-[var(--linen)] text-[var(--charcoal)]">
      <header className="site-header">
        <nav aria-label="Primary navigation">
          <a href="#home">Home</a>
          <a href="#coaching">Coaching</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section id="home" className="hero-shell">
        <div className="hero-copy reveal">
          <p className="eyebrow">Anthony Harrison Coaching</p>
          <h1>Stepping Higher</h1>
          <p className="hero-line">
            <span>Clarity</span> changes what comes next.
          </p>
          <p className="hero-subline">
            For the moment when what used to fit no longer does.
          </p>
          <CtaLink variant="light">Meet with Anthony</CtaLink>
        </div>
        <div className="hero-portrait-wrap" aria-hidden="true">
          <img
            className="hero-portrait"
            src="/images/anthony-harrison.jpg"
            alt=""
          />
        </div>
        <p className="hero-side-note">Clarity before strategy.</p>
      </section>

      <section className="section opening-section">
        <div className="section-kicker">Start here</div>
        <div className="opening-grid">
          <div className="opening-statement reveal">
            <p>
              After years as a communications executive in Fortune 100
              companies working with leaders and organizations, Anthony learned
              something essential.
            </p>
            <h2>Real change rarely starts with a perfect plan. It begins with clarity.</h2>
          </div>
          <div className="signal-list reveal">
            <p className="small-title">You may be here because</p>
            <ul>
              {signals.map((signal) => (
                <li key={signal}>{signal}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section id="coaching" className="section focus-section">
        <div className="section-header reveal">
          <p className="eyebrow">What I do</p>
          <h2>I help clients think clearly, decide confidently, and move forward with intention.</h2>
        </div>

        <div className="focus-rows">
          {focusAreas.map((area, index) => (
            <article className="focus-row reveal" key={area.label}>
              <div className="focus-heading">
                <span>{String(index + 1).padStart(2, '0')}</span>
                <h3>{area.label}</h3>
              </div>
              <p>{area.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section process-section">
        <div className="process-panel reveal">
          <p className="eyebrow">How it works</p>
          <h2>Simple structure. Meaningful work.</h2>
          <p>
            Coaching with Anthony is not about quick fixes or prescribed
            answers. It is a structured, thoughtful process designed to help you
            see your situation clearly and make decisions that align with who
            you are and where you want to go.
          </p>
        </div>
        <div className="process-facts reveal">
          <div>
            <strong>60</strong>
            <span>minutes per session</span>
          </div>
          <div>
            <strong>2</strong>
            <span>weeks between conversations</span>
          </div>
          <div>
            <strong>6</strong>
            <span>sessions to begin the work</span>
          </div>
        </div>
      </section>

      <section className="section contrast-section">
        <div className="contrast-copy reveal">
          <p className="eyebrow">The fit</p>
          <h2>Coaching, without the noise.</h2>
          <p>
            The complimentary session is a chance to explore fit on both sides.
            You will get a feel for how Anthony works, and decide together
            whether it makes sense to continue.
          </p>
        </div>
        <div className="contrast-lists">
          <div className="reveal">
            <h3>What it is</h3>
            <ul>
              {coachingIs.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="reveal">
            <h3>What it is not</h3>
            <ul>
              {coachingIsNot.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section id="about" className="section about-section">
        <div className="about-image reveal">
          <img src="/images/anthony-harrison-portrait.jpg" alt="Anthony Harrison smiling" />
        </div>
        <div className="about-copy reveal">
          <p className="eyebrow">About Anthony</p>
          <h2>The work behind the work.</h2>
          <p>
            Anthony spent his career helping organizations find their voice,
            clarifying who they are, what they stand for, and how they
            communicate in moments that matter.
          </p>
          <p>
            His work has taken him into global leadership roles at companies
            such as Facebook/Meta, Microsoft, Starbucks, and Disney.
          </p>
          <blockquote>
            The work that stayed with me most was what happened before the
            message, when people paused long enough to look honestly at what was
            really going on.
          </blockquote>
          <p>
            Today, through Stepping Higher, he helps people think clearly,
            reconnect with what matters most, and move forward with intention.
          </p>
        </div>
      </section>

      <section className="section testimonial-section">
        <div className="section-header reveal">
          <p className="eyebrow">Client words</p>
          <h2>Perspective, confidence, and clearer decisions.</h2>
        </div>
        <div className="testimonial-track">
          {testimonials.map((testimonial, index) => (
            <figure
              className="testimonial reveal"
              style={{ ['--i' as string]: index }}
              key={testimonial.source}
            >
              <blockquote>{testimonial.quote}</blockquote>
              <figcaption>{testimonial.source}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section id="contact" className="final-cta">
        <div className="final-cta-inner reveal">
          <p className="eyebrow">Whenever you are ready</p>
          <h2>Start with a complimentary session.</h2>
          <p>
            Talk about what is on your mind, what you are navigating, and
            whether coaching feels like the right fit. No pressure. No
            obligation.
          </p>
          <div className="contact-actions">
            <CtaLink variant="light">Schedule the 60-minute session</CtaLink>
          </div>
          <p className="confidential">Everything shared here is confidential.</p>
        </div>
      </section>
    </main>
  )
}

export default App
