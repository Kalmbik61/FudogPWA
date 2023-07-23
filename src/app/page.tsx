"use client";

import Filters from "@/components/Filters/Filters";
import styles from "./layout.module.scss";
import { wrapper } from "@/store";

function Home() {
  return (
    <main className={styles.main}>
      <Filters />
    </main>
  );
}

export default wrapper.withRedux(Home);
