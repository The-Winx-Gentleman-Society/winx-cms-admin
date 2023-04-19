import styles from "./RemoveItem.module.css";

function RemoveItem() {
  return (
    <button className={styles.removeItem} type="button">
      x
    </button>
  )
}

export default RemoveItem;
