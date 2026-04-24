import Link from "next/link";
import styles from "./page.module.css";
import formationsData from "@/data/formations.json";
import Image from "next/image";

export default function Formations() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Mon Parcours</h1>
      <p className={styles.description}>
        Découvrez mon parcours
      </p>

      <div className={styles.grid}>
        {formationsData.map((formation) => (
          <Link
            href={`/formation/${formation.slug}`}
            key={formation.slug}
            className={styles.card}
          >
            <div className={styles.imageWrapper}>
              <Image
                src={formation.image}
                alt={formation.title}
                className={styles.image}
                width={300}
                height={200}
                preload
              />
            </div>
            <h2>{formation.title}</h2>
            <p>{formation.description}</p>
            <div className={styles.tags}>
              {formation.tags.map((tag, index) => (
                <span key={index}>{tag}</span>
              ))}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}