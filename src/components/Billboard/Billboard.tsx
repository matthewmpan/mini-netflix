import Image from "next/image";
import styles from './Billboard.module.scss';

/**
 * Renders the billboard component.
 */
export default function Billboard() {
  return (
    <header className="billboard">
      <div className={styles.billboardPreview}>
        <Image
          src="/mini-netflix-billboard.jpg"
          alt="Mini Netflix Billboard"
          width="1200"
          height="675"
          priority
        />
        <div className={styles.billboardOverlay} />
      </div>
    </header>
  );
}