import styles from '../assets/Style/About.module.css'

const stats = [
  { num: '37', label: 'Years of Craft' },
  { num: '900°', label: 'Wood-Fired Oven' },
  { num: '90s', label: 'Bake Time' },
  { num: '12', label: 'Secret Recipes' },
]

export default function About() {
  return (
    <section className={styles.about} id="about">
      <div className={styles.container}>

        <div className={styles.textCol}>
          <span className={styles.label}>Our Philosophy</span>
          <h2 className={styles.heading}>
            Fired with <em>passion</em>,<br />
            made with soul.
          </h2>
          <p className={styles.body}>
            Every pizza that leaves our kitchen is the result of generations of knowledge.
            We use only 00-grade Caputo flour, slow-fermented for 48 hours, stretched by
            hand — never a rolling pin.
          </p>
          <p className={styles.body}>
            Our San Marzano tomatoes are imported directly from the volcanic soil of
            Mount Vesuvius. The fior di latte is made fresh each morning by our dairyman
            in Campania. This is not fast food. This is a ritual.
          </p>
          <a href="#menu" className={styles.link}>
            See what we make
            <span className={styles.arrow}>→</span>
          </a>
        </div>

        <div className={styles.rightCol}>
          {/* Visual block */}
          <div className={styles.imageBlock}>
            <div className={styles.imagePlaceholder}>
              <div className={styles.bigEmoji}>🍕</div>
              <div className={styles.imageBadge}>
                <span className={styles.badgeYear}>EST.</span>
                <span className={styles.badgeNum}>1987</span>
                <span className={styles.badgeCity}>Napoli</span>
              </div>
            </div>
            <div className={styles.accentBlock}>
              <span>Wood-Fired</span>
              <span>Artisan</span>
              <span>Traditional</span>
            </div>
          </div>

          {/* Stats */}
          <div className={styles.stats}>
            {stats.map(({ num, label }) => (
              <div key={label} className={styles.stat}>
                <span className={styles.statNum}>{num}</span>
                <span className={styles.statLabel}>{label}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}