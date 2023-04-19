import styles from "./Submit.module.css";

type SubmitProps = {
  text: string
}

function Submit({ text }: SubmitProps) {
  return (
    <button className={styles.submitButton} type="submit">
      {text}
    </button>
  )
}

export default Submit;
