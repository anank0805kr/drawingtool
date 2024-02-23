import React from "react";
import styles from "./index.module.css";
import { COLORS } from "@/constant";

const Toolbar = () => {
  // const [updateBrushSize,]
  const updateBrushSize = (e) => {};
  return (
    <div className={styles.toolContainer}>
      <div className={styles.toolItem}>
        <h4 className={styles.toolText}>Strove Color</h4>
        <div className={styles.itemContainer}>
          <div
            className={styles.ColorBox}
            style={{ backgroundColor: COLORS.RED }}
          />
          <div
            className={styles.ColorBox}
            style={{ backgroundColor: COLORS.GREEN }}
          />
          <div
            className={styles.ColorBox}
            style={{ backgroundColor: COLORS.YELLOW }}
          />
          <div
            className={styles.ColorBox}
            style={{ backgroundColor: COLORS.GREEN }}
          />
          <div
            className={styles.ColorBox}
            style={{ backgroundColor: COLORS.ORANGE }}
          />
          <div
            className={styles.ColorBox}
            style={{ backgroundColor: COLORS.BLUE }}
          />
        </div>
      </div>
      <div className={styles.toolItem}>
        <h4 className={styles.toolText}>Strove Color</h4>
        <div styles={styles.itemContainer}>
          <input type="range" min={1} max={10} onChange={updateBrushSize} />
        </div>
      </div>
    </div>
  );
};

export default Toolbar;
