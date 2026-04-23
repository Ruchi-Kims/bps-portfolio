import styles from "./Footer.module.css";

export default function Footer({ children }) {
  return (
    <footer className={styles.footer}>
      <p>© {new Date().getFullYear()} BPS46.</p>
      <p className={styles.links}>
        <a href="https:" target="_blank">
          Instagram
        </a>
        <a href="https://www.linkedin.com/in/john-doe/" target="_blank">
          LinkedIn
        </a>
      </p>
    </footer>
  );
}