import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className="-z-50">
        <Image
          src={"/flower_bells.jpg"}
          alt={"blue small blowers on the ground"}
          fill
          quality={100}
          sizes="100vw"
        />
      </div>
      <div className={styles.appStatement}>
        <p>Swivel: Manage your balance in the smartest way possible.</p>
      </div>
    </main>
  );
}
