import styles from "./Form.module.css";

type FormProps = {
  children: React.ReactNode;
  formSubmitFunction: any
}

function Form({ children, formSubmitFunction }: FormProps) {
  
  return (
    <form className={styles.form} onSubmit={formSubmitFunction}>
      {children}
    </form>  
  )
}

export default Form;