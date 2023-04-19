  import { useState } from "react";

import MenuBurguer from "../../assets/svgs/menu-burguer.svg";

import styles from "./NavigateBar.module.css";

function NavigateBar() {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <>
      <section className={isOpen ? styles["navigateBar--container--opened"] : styles["navigateBar--container--closed"]}>
        <div className={styles["navigateBar--content-wrapper"]}>
          {isOpen ? (
            <>
              <nav className={styles["NavigateBar--content"]}>
                <a href="">EDITAR TEMPLATE</a>
                <a href="">ESTOQUE</a>
              </nav>
              <button className={styles["NavigateBar--menu-btn-opened"]} type="button" onClick={() => setIsOpen(false)}>
                <img src={MenuBurguer} alt="Menu" />
              </button>
            </>
          ) : (
            <button className={styles["NavigateBar--menu-btn-closed"]} type="button" onClick={() => setIsOpen(true)}>
              <img src={MenuBurguer} alt="Menu" />
            </button>
          )}
        </div>
      </section>
    </>
  )
}

export default NavigateBar;
