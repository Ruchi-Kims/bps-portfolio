import styles from "./page.module.css";
import projectsData from "@/data/projects.json";
import { notFound } from "next/navigation";
import Image from "next/image";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = projectsData.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: "Projet non trouvé",
    };
  }

  return {
    title: `${project.title} | Portfolio`,
    description: project.longDescription,
    openGraph: {
      title: project.title,
      description: project.shortDescription,
      images: [project.image],
    },
  };
}

export default async function ProjectDetail({ params }) {
  const { slug } = await params;
  // Next.js passe automatiquement le slug dans params
  const project = projectsData.find((project) => project.slug === slug);

  // Si le projet n'existe pas, afficher la page 404
  if (!project) {
    notFound();
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>{project.title}</h1>
        <p className={styles.description}>{project.description}</p>
      </div>

      <div className={styles.content}>
        <div className={styles.imageWrapper}>
          <Image
            className={styles.image}
            src={project.image}
            alt={project.title}
            width={800}
            height={600}
            preload
          />
        </div>

        <div className={styles.details}>
          <h2>{project.longDescription}</h2>
          <p>{project.tags}</p>
        </div>
      </div>
    </div>
  );
}

// Cette fonction génère toutes les pages statiques au build
export function generateStaticParams() {
  return projectsData.map((project) => ({
    slug: project.slug,
  }));
}