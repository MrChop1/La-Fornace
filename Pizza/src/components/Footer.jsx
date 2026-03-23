import styles from '../assets/Style/Footer.module.css'

const hours = [
  { day: 'Mon – Tue', time: '12:00 – 22:00' },
  { day: 'Wed – Thu', time: '12:00 – 23:00' },
  { day: 'Fri – Sat', time: '12:00 – 00:00' },
  { day: 'Sunday', time: '13:00 – 22:00' },
]

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        <div className={styles.container}>
          {/* Brand */}
          <div className={styles.brand}>
            <div className={styles.logo}>
              <span className={styles.logoEmoji}>🍕</span>
              <span className={styles.logoName}>La Fornace</span>
            </div>
            <p className={styles.tagline}>
              Authentic Neapolitan pizza,<br />
              wood-fired since 1987.
            </p>
            <div className={styles.socials}>
              {['Instagram', 'Facebook', 'TripAdvisor'].map(s => (
                <a key={s} href="#" className={styles.social}>{s}</a>
              ))}
            </div>
          </div>

          {/* Hours */}
          <div className={styles.col}>
            <h4 className={styles.colTitle}>Opening Hours</h4>
            <div className={styles.hours}>
              {hours.map(({ day, time }) => (
                <div key={day} className={styles.hourRow}>
                  <span className={styles.hourDay}>{day}</span>
                  <span className={styles.hourTime}>{time}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Address */}
          <div className={styles.col}>
            <h4 className={styles.colTitle}>Find Us</h4>
            <address className={styles.address}>
              <p>Via dei Tribunali, 32</p>
              <p>80138 Napoli NA, Italy</p>
              <p style={{ marginTop: 16 }}>
                <a href="tel:+390817541234" className={styles.contactLink}>
                  +39 081 754 1234
                </a>
              </p>
              <p>
                <a href="mailto:ciao@lafornace.it" className={styles.contactLink}>
                  ciao@lafornace.it
                </a>
              </p>
            </address>
          </div>

          {/* Newsletter */}
          <div className={styles.col}>
            <h4 className={styles.colTitle}>Stay in the Loop</h4>
            <p className={styles.newsletterText}>
              Monthly specials, seasonal menus,<br />and exclusive events.
            </p>
            <div className={styles.form}>
              <input
                type="email"
                placeholder="your@email.com"
                className={styles.input}
              />
              <button className={styles.formBtn}>→</button>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.bottom}>
        <div className={styles.bottomInner}>
          <p className={styles.copy}>
            © {new Date().getFullYear()} La Fornace. All rights reserved.
          </p>
          <div className={styles.bottomLinks}>
            <a href="#">Privacy</a>
            <a href="#">Cookies</a>
            <a href="#">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  )
}