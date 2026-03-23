import { useState } from 'react'
import styles from '../assets/Style/Menu.module.css'

const categories = ['All', 'Classic', 'Signature', 'White', 'Vegan']

const pizzas = [
  {
    name: 'Margherita',
    category: 'Classic',
    emoji: '🍕',
    price: '14',
    desc: 'San Marzano tomato, fior di latte, fresh basil, extra-virgin olive oil',
    tag: 'Most Popular',
  },
  {
    name: 'Marinara',
    category: 'Classic',
    emoji: '🍅',
    price: '12',
    desc: 'San Marzano tomato, garlic, oregano, olive oil — no cheese',
    tag: null,
  },
  {
    name: 'Diavola',
    category: 'Classic',
    emoji: '🌶️',
    price: '16',
    desc: 'Spicy Calabrian salami, tomato, fior di latte, fresh chilli',
    tag: 'Spicy',
  },
  {
    name: 'Quattro Formaggi',
    category: 'White',
    emoji: '🧀',
    price: '18',
    desc: 'Fior di latte, gorgonzola, pecorino, parmigiano — no tomato',
    tag: null,
  },
  {
    name: 'Funghi e Tartufo',
    category: 'Signature',
    emoji: '🍄',
    price: '22',
    desc: 'Wild mushrooms, truffle cream, parmigiano, fresh thyme',
    tag: "Chef's Pick",
  },
  {
    name: 'Prosciutto e Rucola',
    category: 'Signature',
    emoji: '🥩',
    price: '20',
    desc: 'San Daniele prosciutto, buffalo mozzarella, wild rocket, shaved parmigiano',
    tag: null,
  },
  {
    name: 'Salmone',
    category: 'Signature',
    emoji: '🐟',
    price: '21',
    desc: 'Smoked salmon, crème fraîche, capers, red onion, dill — no tomato',
    tag: null,
  },
  {
    name: 'Primavera',
    category: 'Vegan',
    emoji: '🥦',
    price: '15',
    desc: 'Grilled courgette, aubergine, cherry tomato, olives, basil pesto',
    tag: 'Vegan',
  },
]

export default function Menu() {
  const [active, setActive] = useState('All')

  const filtered = active === 'All' ? pizzas : pizzas.filter(p => p.category === active)

  return (
    <section className={styles.menu} id="menu">
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.label}>The Menu</span>
          <h2 className={styles.heading}>
            Every pizza, a <em>masterpiece</em>.
          </h2>
          <p className={styles.sub}>
            Twelve inches. 48-hour fermented dough. Cooked in 90 seconds.
          </p>
        </div>

        {/* Category filter */}
        <div className={styles.filters}>
          {categories.map(cat => (
            <button
              key={cat}
              className={`${styles.filter} ${active === cat ? styles.filterActive : ''}`}
              onClick={() => setActive(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className={styles.grid}>
          {filtered.map(pizza => (
            <div key={pizza.name} className={styles.card}>
              {pizza.tag && (
                <span className={styles.tag}>{pizza.tag}</span>
              )}
              <div className={styles.cardEmoji}>{pizza.emoji}</div>
              <div className={styles.cardBody}>
                <div className={styles.cardTop}>
                  <h3 className={styles.cardName}>{pizza.name}</h3>
                  <span className={styles.cardPrice}>€{pizza.price}</span>
                </div>
                <p className={styles.cardDesc}>{pizza.desc}</p>
                <button className={styles.orderBtn}>
                  Add to Order
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}