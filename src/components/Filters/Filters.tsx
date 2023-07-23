import React from "react";
import styles from "./Filters.module.scss";
import cn from "classnames";
import { useFiltersControl } from "./useFilters.control";
import Filter from "./Filter/Filter";

export default function Filters() {
  const control = useFiltersControl();
  return (
    <div className={styles.wrapper}>
      {[1, 2, 3].map((f, i) => (
        <Filter key={i} />
      ))}
    </div>
  );
}
