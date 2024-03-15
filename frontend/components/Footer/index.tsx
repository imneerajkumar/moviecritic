import styles from "./footer.module.css";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <h4 className={styles.copyright}>Copyright 2021</h4>
      <a className={styles.social} href="https://www.instagram.com">
        Follow us on Instagram
      </a>
    </div>
  );
}
