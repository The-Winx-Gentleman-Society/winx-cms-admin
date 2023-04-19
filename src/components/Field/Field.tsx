import styles from "./Field.module.css";

type FieldProps = {
  type: string;
  value: any;
  text?: string;
  placeholder?: string;
  accept?: string;
  change: (param: any) => void;
}

function Field({ type, value, placeholder, accept, text, change }: FieldProps) {

  function inputTypes(inputType: string) {
    return (
      <input
        className={styles["field"]}
        type={inputType}
        value={value}
        onChange={(e) => change(e.target.value)}
        placeholder={placeholder}
      />
    )
  }

  function inputFile() {
    return (
      <label className={styles["file"]}>
        <input
          type="file"
          value={value}
          accept={accept}
          onChange={(e) => change({value: e.target.value, files: e.target.files})}
        />
        <small>{text ? text : placeholder}</small>
      </label>
    )
  }

  function textArea() {
    return (
      <textarea
        className={styles["textarea"]}
        value={value}
        onChange={(e) => change(e.target.value)}
        placeholder={placeholder}
      />
    )
  }

  switch (type) {
    case "text":
      
      return inputTypes("text");
    
    case "number":
    
      return inputTypes("number");

    case "file":
    
      return inputFile();

    case "textarea":

      return textArea();
  
    default:
      return <></>;
  }
}

export default Field;