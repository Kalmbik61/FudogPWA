"use client";

import React, { useState } from "react";
import cn from "classnames";
import styles from "./Burger.module.scss";
import { IBurgerProps } from "./Burger.props";

export default function Burger({ className, ...props }: IBurgerProps) {
  const [open, setOpen] = useState<boolean>(props.open || false);

  const onOpenBurger = () => {
    setOpen((prev) => !prev);
  };
  return (
    <div
      className={cn(styles.wrapper, className, {
        [styles.active]: open,
      })}
      onClick={onOpenBurger}
    >
      <span />
      <span />
      <span />
    </div>
  );
}
