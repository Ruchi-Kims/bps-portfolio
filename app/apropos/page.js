import styles from "./page.module.css";

export default function About() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>À propos de moi</h1>

      <div className={styles.content}>
        <div className={styles.bio}>
          <h2>Qui suis-je ?</h2>
          <p>
            Expert en conception électrique et thermique, j'allie rigueur d'étude et maîtrise du dessin projeteur.
             Avec 3 ans d'expérience en intégration technique, j'interviens sur les courants forts (CFO),
              les courants faibles (CFA) et la climatisation.
          </p>
          <p>
            J&apos;aime transformer des idées en plans concrets qui répondent
            de vrais problèmes utilisateurs.
          </p>
        </div>

        <div className={styles.skills}>
          <h2>Compétences</h2>
          <div className={styles.skillGrid}>
            <div className={styles.skillCategory}>
              <h3>Electricités</h3>
              <ul>
                <li>Installation électrique</li>
                <li>Dépannage électrique</li>
                <li>Electricité solaire</li>
                <li>Maintenance électrique</li>
              </ul>
            </div>

            <div className={styles.skillCategory}>
              <h3>Divers</h3>
              <ul>
                <li>Conception assistée par l'ordinateur CAO</li>
                <li>Schemas de cablage</li>
                <li>Conception technique</li>
                <li>Dimensionnement</li>
              </ul>
            </div>

            <div className={styles.skillCategory}>
              <h3>Logiciels</h3>
              <ul>
                <li>Autocad</li>
                <li>Revit</li>
                <li>Xlpro</li>
                <li>Dialux</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}