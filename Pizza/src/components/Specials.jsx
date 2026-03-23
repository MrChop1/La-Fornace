import styles from '../assets/Style/Specials.module.css'

const specials = [
  {
    day: 'Tuesday',
    short: 'TUE',
    title: 'Two for One',
    desc: 'Any two classic pizzas for the price of one. All evening.',
    emoji: '🍕🍕',
  },
  {
    day: 'Thursday',
    short: 'THU',
    title: 'Wine Night',
    desc: 'Half-price on our full Italian wine list with any main course.',
    emoji: '🍷',
  },
  {
    day: 'Sunday',
    short: 'SUN',
    title: 'Family Feast',
    desc: 'Four pizzas + tiramisu + soft drinks for €60. Families only.',
    emoji: '👨‍👩‍👧‍👦',
  },
]

export default function Specials() {
  return (
    <section className={styles.specials} id="specials">
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.label}>Weekly Specials</span>
          <h2 className={styles.heading}>
            Good things happen <em>often</em>.
          </h2>
        </div>

        <div className={styles.cards}>
          {specials.map(s => (
            <div key={s.day} className={styles.card}>
              <div className={styles.cardDay}>
                <span className={styles.dayShort}>{s.short}</span>
                <span className={styles.dayFull}>{s.day}</span>
              </div>
              <div className={styles.cardMain}>
                <span className={styles.cardEmoji}>{s.emoji}</span>
                <h3 className={styles.cardTitle}>{s.title}</h3>
                <p className={styles.cardDesc}>{s.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Big CTA band */}
        <div className={styles.cta}>
          <div className={styles.ctaText}>
            <p className={styles.ctaSmall}>Ready to come in?</p>
            <p className={styles.ctaBig}>Reserve your table tonight.</p>
          </div>
          <div className={styles.ctaActions} id="contact">
            <a href="tel:+390817541234" className={styles.ctaPhone}>
              <span className={styles.ctaPhoneIcon}>📞</span>
              +39 081 754 1234
            </a>
            <a href="mailto:ciao@lafornace.it" className={styles.ctaEmail}>
              ciao@lafornace.it
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}