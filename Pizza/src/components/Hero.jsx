import { useEffect, useRef } from 'react'
import styles from '../assets/Style/Hero.module.css'

export default function Hero() {
  const headlineRef = useRef(null)

  useEffect(() => {
    const el = headlineRef.current
    if (!el) return
    el.style.opacity = '0'
    el.style.transform = 'translateY(30px)'
    setTimeout(() => {
      el.style.transition = 'opacity 0.9s ease, transform 0.9s ease'
      el.style.opacity = '1'
      el.style.transform = 'translateY(0)'
    }, 100)
  }, [])

  return (
    <section className={styles.hero} id="hero">
      {/* Background pizza illustration */}
      <div className={styles.bgCircle} aria-hidden="true" />
      <div className={styles.bgCircle2} aria-hidden="true" />

      {/* Decorative marquee stripe */}
      <div className={styles.marqueeWrap} aria-hidden="true">
        <div className={styles.marquee}>
          {Array(8).fill('Neapolitan · Wood-Fired · Artisan · ').map((t, i) => (
            <span key={i}>{t}</span>
          ))}
        </div>
      </div>

      <div className={styles.content}>
        <p className={styles.eyebrow}>Since 1987 · Napoli, Italia</p>
        <h1 className={styles.headline} ref={headlineRef}>
          <span className={styles.line1}>The Art of</span>
          <span className={styles.line2}>Neapolitan</span>
          <span className={styles.line3}>
            <em>Pizza</em>
          </span>
        </h1>
        <p className={styles.sub}>
          Hand-stretched dough, San Marzano tomatoes, fior di latte —<br />
          baked in our 900°F wood-fired oven in exactly 90 seconds.
        </p>
        <div className={styles.actions}>
          <a href="#menu" className={styles.btnPrimary}>Explore Our Menu</a>
          <a href="#about" className={styles.btnSecondary}>Our Story ↓</a>
        </div>
      </div>

      {/* Large decorative pizza emoji */}
      <div className={styles.pizzaVis} aria-hidden="true">
        <div className={styles.pizzaFloat}>
          <div className={styles.pizzaEmoji}>🍕</div>
          <div className={styles.pizzaRing} />
          <div className={styles.pizzaRing2} />
        </div>
      </div>

      {/* Scroll indicator */}
      <div className={styles.scrollHint} aria-hidden="true">
        <div className={styles.scrollLine} />
        <span>Scroll</span>
      </div>
    </section>
  )
}