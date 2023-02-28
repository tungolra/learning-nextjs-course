import Link from "next/link";
import styles from "../styles/Home.module.css";

function Menu() {
  return (
    <ul>
      <Link legacyBehavior href="/">
        Home
      </Link>
      <Link legacyBehavior href="/contacts">
        Contacts
      </Link>
    </ul>
  );
}

export default function Layout({ children }) {
  return (
    <div className={styles.container}>
      <Menu />
      {children}
    </div>
  );
}
