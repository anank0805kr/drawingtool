import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPencil,
  faEraser,
  faLeftRight,
  faLeftLong,
  faPen,
  faRightLong,
} from "@fortawesome/free-solid-svg-icons";
import styles from "./index.module.css";

const Menu = () => {
  return (
    <div className={styles.menuContainer}>
      <div className={styles.iconWrapper}>
        <FontAwesomeIcon className={styles.icons} icon={faPencil} />{" "}
      </div>{" "}
      <div className={styles.iconWrapper}>
        <FontAwesomeIcon className={styles.icons} icon={faEraser} />{" "}
      </div>{" "}
      <div className={styles.iconWrapper}>
        <FontAwesomeIcon className={styles.icons} icon={faLeftLong} />{" "}
      </div>{" "}
      <div className={styles.iconWrapper}>
        <FontAwesomeIcon className={styles.icons} icon={faRightLong} />{" "}
      </div>{" "}
      <div className={styles.iconWrapper}>
        <FontAwesomeIcon className={styles.icons} icon={faLeftRight} />{" "}
      </div>{" "}
    </div>
  );
};

export default Menu;
