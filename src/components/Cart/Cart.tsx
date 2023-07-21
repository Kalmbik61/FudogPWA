"use client";

import React from "react";
import styles from "./Cart.module.scss";
import Image from "next/image";

import cart from "../../assets/icon/cart-large-minimalistic-svgrepo-com.svg";
import { useCartCOntrol } from "./useCart.control";

export default function Cart() {
  const control = useCartCOntrol();
  return (
    <div className={styles.wrapper}>
      <Image src={cart} alt='Fudog-cart' className={styles.cart} />
      <span className={styles.count}>{control.count}</span>
    </div>
  );
}
