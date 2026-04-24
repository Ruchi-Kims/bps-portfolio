import styles from "./page.module.css"
import Tag from "../components/Tag/Tag"

const technologies = [
  "Caneco",
  "Dialux",
  "Ecodial",
  "Autocad",
  "Revit",
]

export default function Home() {
  return (
    <div className={styles.hero}>
      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>
          Bonjour, je suis <span className={styles.highlight}>Précieux BITOUKOU</span>
        </h1>
        <p className={styles.heroSubtitle}>
          Dessinateur projeteur électricité | Chargé d’études en électricité & Climatisation
        </p>
        <p className={styles.heroDescription}>
          Je conçois les infrastructures techniques des bâtiments de demain. 
          Spécialisé en électricité (CFO/CFA) et climatisation, 
          j'assure la synergie entre puissance électrique (MT/BT)
           et confort thermique pour des projets tertiaires et industriels maîtrisés.
        </p>
        <div className={styles.heroButtons}>
          <a href="/projets" className={`${styles.btn} ${styles.btnPrimary}`}>
            Voir mes expériences
          </a>
          <a href="/contact" className={`${styles.btn} ${styles.btnSecondary}`}>
            Me contacter
          </a>
        </div>
        <div className={styles.tagsContainer}>
          {technologies.map((tech, index) => (
            <Tag key={index}>{tech}</Tag>
          ))}
        </div>
      </div>
    </div>
  )
}