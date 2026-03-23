import { useState } from 'react'
import styles from '../assets/Style/Testimonials.module.css'

const reviews = [
  {
    name: 'Marco B.',
    location: 'Milano',
    stars: 5,
    text: 'The best Margherita I have had outside of Naples. The dough is impossibly light, the tomato is perfect. I drove four hours for this and I would do it again.',
    emoji: '🇮🇹',
  },
  {
    name: 'Sophie L.',
    location: 'Paris',
    stars: 5,
    text: 'We stumbled upon La Fornace on our anniversary trip. The Funghi e Tartufo was transcendent — earthy, rich, and restrained all at once. Booked again for next month.',
    emoji: '🇫🇷',
  },
  {
    name: 'James H.',
    location: 'London',
    stars: 5,
    text: 'I have eaten pizza on three continents. This is the standard by which I now judge everything else. The 90-second bake in that wood-fired oven is pure magic.',
    emoji: '🇬🇧',
  },
  {
    name: 'Yuki T.',
    location: 'Tokyo',
    stars: 5,
    text: 'Flew in specifically to eat here after reading about it. The Quattro Formaggi was a religious experience. Thank you for keeping tradition alive.',
    emoji: '🇯🇵',
  },
]

function Stars({ count }) {
  return (
    <div className={styles.stars}>
      {Array(count).fill('★').map((s, i) => <span key={i}>{s}</span>)}
    </div>
  )
}

export default function Testimonials() {
  const [active, setActive] = useState(0)

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.left}>
          <span className={styles.label}>What People Say</span>
          <h2 className={styles.heading}>
            Guests who<br />
            <em>fell in love</em>.
          </h2>
          <div className={styles.dots}>
            {reviews.map((_, i) => (
              <button
                key={i}
                className={`${styles.dot} ${active === i ? styles.dotActive : ''}`}
                onClick={() => setActive(i)}
                aria-label={`Review ${i + 1}`}
              />
            ))}
          </div>
          <div className={styles.awards}>
            <div className={styles.award}>
              <span className={styles.awardIcon}>⭐</span>
              <div>
                <div className={styles.awardTitle}>4.9 / 5</div>
                <div className={styles.awardSub}>900+ Google Reviews</div>
              </div>
            </div>
            <div className={styles.award}>
              <span className={styles.awardIcon}>🏆</span>
              <div>
                <div className={styles.awardTitle}>Best Pizza</div>
                <div className={styles.awardSub}>Napoli Food Awards 2023</div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.right}>
          {reviews.map((r, i) => (
            <div
              key={r.name}
              className={`${styles.card} ${active === i ? styles.cardActive : ''}`}
              onClick={() => setActive(i)}
            >
              <div className={styles.cardHeader}>
                <span className={styles.cardFlag}>{r.emoji}</span>
                <div>
                  <div className={styles.cardName}>{r.name}</div>
                  <div className={styles.cardLocation}>{r.location}</div>
                </div>
                <Stars count={r.stars} />
              </div>
              <p className={styles.cardText}>"{r.text}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}