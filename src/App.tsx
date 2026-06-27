import { useEffect } from 'react'
import './App.css'

const bookingUrl =
  'https://calendly.com/stepping-higher-coaching/sample-coaching-session-with-anthony-harrison'

const assetUrl = (path: string) => `${import.meta.env.BASE_URL}${path}`

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

const clientSignals = [
  'Successful, but questioning what comes next',
  'Navigating change or uncertainty',
  'Ready for something different, but not yet clear what that is',
  'Looking for clarity, not just more motion',
]

const coachingIs = [
  'Time to think clearly',
  'Questions that challenge your assumptions',
  'A structured process for sorting through change, uncertainty, and possibility',
  'Support for making decisions that reflect who you are and what matters most',
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
    excerpt:
      'Anthony helped me step back from constant problem-solving and focus on the kind of leader I wanted to become.',
    quote:
      'Anthony helped me step back from the constant pressure of solving problems and focus on the kind of leader I wanted to become. Our conversations gave me space to think strategically, navigate uncertainty with more confidence, and lead my team in a way that felt aligned with my values.',
    source: 'Senior leader, technology and design',
  },
  {
    excerpt:
      'Anthony helped me recognize strengths I had overlooked and trust myself in a way I had not before.',
    quote:
      "When we started coaching, I was questioning myself more than I realized. Anthony helped me recognize strengths I had overlooked and trust myself in a way I had not before. As I pursued new opportunities and navigated significant personal challenges, I found myself making decisions with more confidence and believing more fully in what I was capable of.",
    source: 'Senior government professional',
  },
  {
    excerpt:
      "Anthony's questions helped me see my situation differently and become clearer about the value I bring.",
    quote:
      "Anthony has a way of asking questions that helped me see myself and my situation differently. Through a major career transition, I became clearer about the value I bring, the choices I wanted to make, and the kind of professional I wanted to be. The result was not just a new job. It was a stronger sense of direction.",
    source: 'Global business professional',
  },
  {
    excerpt:
      'Coaching helped me become more intentional, see patterns clearly, and approach difficult situations with greater confidence.',
    quote:
      'Coaching with Anthony helped me become more intentional as a leader. Rather than reacting to every challenge, I learned to step back, see patterns more clearly, and approach difficult situations with greater confidence. I left our conversations with practical next steps, but more importantly, a stronger sense of how I wanted to show up.',
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
      <span className="sr-only"> (opens in a new tab)</span>
      <span className="cta-mark" aria-hidden="true">
        <span />
      </span>
    </a>
  )
}

function useRevealOnScroll() {
  useEffect(() => {
    const elements = Array.from(document.querySelectorAll<HTMLElement>('.reveal'))

    if (!('IntersectionObserver' in window)) {
      elements.forEach((element) => element.classList.add('is-visible'))
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        })
      },
      { rootMargin: '0px 0px -8%', threshold: 0.12 },
    )

    elements.forEach((element) => observer.observe(element))
    return () => observer.disconnect()
  }, [])
}

function App() {
  useRevealOnScroll()

  return (
    <main
      id="main-content"
      tabIndex={-1}
      className="min-h-[100dvh] overflow-x-hidden bg-[var(--mist)] text-[var(--ink)]"
    >
      <a className="skip-link" href="#home">Skip to content</a>

      <header className="site-header">
        <nav aria-label="Primary navigation">
          <a href="#home">Home</a>
          <a href="#coaching">Coaching</a>
          <a href="#about">About</a>
          <a href="#clients">Clients</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section id="home" className="hero-shell" aria-labelledby="hero-title">
        <div className="hero-copy reveal">
          <p className="hero-brand">Stepping Higher Coaching</p>
          <h1 id="hero-title">
            <span>Find clarity for</span>
            <span>what comes next</span>
          </h1>
          <p className="hero-subline">A calm, thoughtful space to navigate change and move forward with confidence.</p>
        </div>
        <div className="hero-portrait-wrap">
          <img
            className="hero-portrait"
            src={assetUrl('images/anthony-harrison.jpg')}
            alt="Anthony Harrison, founder of Stepping Higher Coaching"
            width="1366"
            height="2048"
            loading="eager"
            fetchPriority="high"
            decoding="async"
          />
        </div>
      </section>

      <section className="section opening-section" aria-labelledby="opening-title">
        <div className="opening-grid">
          <div className="opening-statement reveal">
            <h2 id="opening-title">Your next chapter is not about doing more</h2>
            <p className="opening-lead">
              It begins with seeing clearly what no longer fits, and what is ready to change.
            </p>
            <p className="opening-support">
              After years of working with leaders and organizations, I have learned that real change rarely follows a perfect plan. It grows from an honest look at what is true.
            </p>
            <p className="opening-support">
              I work with people who are ready to make that shift and move forward on their own terms.
            </p>
          </div>
          <div className="signal-list reveal">
            <h3>You may be here because</h3>
            <ul>
              {signals.map((signal) => (
                <li key={signal}>{signal}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section id="coaching" className="section focus-section" aria-labelledby="focus-title">
        <div className="section-header reveal">
          <h2 id="focus-title">What I do</h2>
          <p className="focus-thesis">I help clients think clearly, decide confidently, and move forward with intention.</p>
          <p>
            Coaching with me is not about quick fixes or prescribed answers. It is a thoughtful process for seeing your situation clearly, understanding what is actually true for you, and making decisions that align with who you are and where you want to go.
          </p>
        </div>

        <div className="focus-rows">
          {focusAreas.map((area) => (
            <article className="focus-row reveal" key={area.label}>
              <h3>{area.label}</h3>
              <p>{area.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section process-section" aria-labelledby="process-title">
        <div className="process-panel reveal">
          <h2 id="process-title">How it works</h2>
          <p>
            We typically meet for 60 minutes every other week. Most people begin with a six-session engagement over three months.
          </p>
          <p>
            From there, we decide together whether to continue, pause, or close. The process is flexible and designed to support meaningful work without overcomplicating it.
          </p>
          <p className="process-emphasis">The structure is simple, but the work goes deep.</p>
          <CtaLink>Schedule a session</CtaLink>
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

      <section className="section fit-section" aria-labelledby="fit-title">
        <div className="fit-intro reveal">
          <p className="section-name">The Fit</p>
          <h2 id="fit-title">Coaching, without the noise</h2>
          <p>
            Coaching works best when there is room for curiosity, honesty, and a willingness to see yourself in a new way.
          </p>
        </div>

        <div className="client-profile reveal">
          <div className="client-profile-intro">
            <h3>Who I work with</h3>
            <p>I work with people at a point of transition in their careers, their leadership, or their sense of direction.</p>
          </div>
          <ul className="client-signals">
            {clientSignals.map((signal) => (
              <li key={signal}>{signal}</li>
            ))}
          </ul>
        </div>

        <div className="fit-lists">
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

        <div className="fit-closing reveal">
          <p>Coaching is less about finding the right answer and more about asking better questions.</p>
          <p>Together, we will explore assumptions, challenge familiar patterns, and create space for new possibilities to emerge.</p>
          <p>The goal is not to become someone different. It is to become more fully yourself.</p>
        </div>
      </section>

      <section id="about" className="section about-section" aria-labelledby="about-title">
        <div className="about-top">
          <div className="about-image reveal">
            <img
              src={assetUrl('images/anthony-harrison-portrait.jpg')}
              alt="Anthony Harrison smiling"
              width="1200"
              height="1800"
              loading="lazy"
              decoding="async"
            />
          </div>
          <div className="about-copy reveal">
            <h2 id="about-title">About me</h2>
            <p className="about-thesis">The work behind the work.</p>
            <p>
              I have spent my career helping organizations find their voice, clarifying who they are, what they stand for, and how they communicate in moments that matter.
            </p>
            <p>My work has taken me into global leadership roles at Facebook/Meta, Microsoft, Starbucks, and Disney.</p>
            <p>It was meaningful work. And I was good at it. But over time, something became clear.</p>
          </div>
        </div>

        <div className="about-story reveal">
          <section>
            <h3>The pivot</h3>
            <p>
              The work that stayed with me most was not the messaging. It was the conversations behind it: mentoring colleagues, supporting leaders, and helping people navigate important decisions.
            </p>
            <p>That is where real change started.</p>
          </section>
          <section>
            <h3>What I do now</h3>
            <p>
              That realization led me to coaching. Today, through Stepping Higher Coaching, I work with individuals at a point of transition in their careers, their leadership, or their sense of direction.
            </p>
            <p>I help clients think clearly, reconnect with what matters most, and move forward with intention.</p>
          </section>
          <section>
            <h3>How I work</h3>
            <p>I do not believe most people need more advice.</p>
            <p>More often than not, they need the space, questions, and perspective that help them hear themselves more clearly.</p>
            <p>My role is not to provide answers. It is to help uncover the ones already waiting beneath the noise.</p>
            <p>I bring a strategic mind, a calm presence, and a willingness to ask questions others often avoid.</p>
          </section>
        </div>

        <div className="about-belief reveal">
          <blockquote>
            No scripts. No formulas. Just thoughtful coaching focused on what matters.
          </blockquote>
          <div className="about-belief-copy">
            <p>
              Together, we will explore what is true, what is getting in the way, and what wants to happen next.
            </p>
            <p>
              Sometimes the most important discoveries come from noticing the difference between what we say we want and what our choices are actually creating.
            </p>
            <p>Less about pushing. More about understanding.</p>
            <p>Less about external success. More about making choices that are honest, grounded, and clear.</p>
            <p>I am here to help you see more clearly what is already there and decide what to do with it.</p>
          </div>
        </div>
      </section>

      <section id="clients" className="section testimonial-section" aria-labelledby="clients-title">
        <div className="testimonial-inner">
          <div className="section-header reveal">
            <h2 id="clients-title">Client words</h2>
            <p className="testimonial-thesis">Perspective, confidence, and clearer decisions.</p>
          </div>
          <div className="testimonial-track">
            {testimonials.map((testimonial) => (
              <figure className="testimonial reveal" key={testimonial.source}>
                <details className="testimonial-details">
                  <summary>
                    <span className="quote-excerpt">{testimonial.excerpt}</span>
                    <span className="quote-card-footer">
                      <span className="quote-source">{testimonial.source}</span>
                      <span className="quote-action quote-open">Read quote</span>
                      <span className="quote-action quote-close">Close</span>
                    </span>
                  </summary>
                  <blockquote>{testimonial.quote}</blockquote>
                </details>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <div className="closing-shell">
        <section id="contact" className="final-cta" aria-labelledby="contact-title">
          <div className="final-cta-inner">
            <div className="final-cta-copy">
              <h2 id="contact-title">Start with a complimentary session</h2>
              <p>
                We begin with 60 minutes to talk about what is on your mind, what you are navigating, and whether coaching feels like the right fit.
              </p>
              <p>No pressure. No obligation. Just a chance to see whether working together makes sense.</p>
            </div>
            <div className="final-cta-action">
              <p className="ready-note">Whenever you are ready</p>
              <CtaLink variant="light">Schedule a session</CtaLink>
              <p className="confidential">Everything shared here is confidential.</p>
            </div>
          </div>
        </section>

        <footer className="site-footer">
          <div className="site-footer-inner">
            <div className="footer-identity">
              <a className="footer-brand" href="#home">Stepping Higher Coaching</a>
              <p className="footer-copyright">© 2026 Stepping Higher Coaching</p>
            </div>
            <nav className="footer-nav" aria-label="Footer navigation">
              <a href="#coaching">Coaching</a>
              <a href="#about">About</a>
              <a href="#clients">Clients</a>
              <a href="#contact">Contact</a>
            </nav>
          </div>
        </footer>
      </div>
    </main>
  )
}

export default App
