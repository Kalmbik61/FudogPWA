import React from "react";
import styles from "./Header.module.scss";
import Burger from "@/components/Burger/Burger";
import Cart from "@/components/Cart/Cart";

export default function Header() {
  return (
    <header className={styles.header}>
      <Burger />
      <h1 className={styles.title}>Fudog China</h1>
      <Cart />
    </header>
  );
}
