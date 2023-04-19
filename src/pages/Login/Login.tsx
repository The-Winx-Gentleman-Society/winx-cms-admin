import { FormEventHandler, useEffect, useState } from "react";

import Field from "../../components/Field/Field";
import Form from "../../components/Form/Form";
import Submit from "../../components/Submit/Submit";
import AddMore from "../../components/AddMore/AddMore";
import RemoveItem from "../../components/RemoveItem/RemoveItem";
import readUploadFile from "../../utils/readUploadFile";

function Login() {
  const [textInput, setTextInput] = useState("");
  const [fileInput, setFileInput] = useState({ value: "", files: "" });

  const formSubmitFunction: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    return;
  }

  async function readUpload() {
    if (fileInput.value) {
      const res = await readUploadFile(fileInput.files[0]);

      console.log("res", res)
    }
  }

  useEffect(() => {
    readUpload();
  }, [fileInput])

  return (
    <>
      <Form formSubmitFunction={formSubmitFunction}>
        <Field type="text" value={textInput} change={setTextInput} placeholder="Link Url" />
        <Field type="text" value={textInput} change={setTextInput} placeholder="Link Text" />
        <Field type="text" value={textInput} change={setTextInput} placeholder="Name" />
        <Field type="text" value={textInput} change={setTextInput} placeholder="Name" />
        <Field
          type="file"
          value={fileInput.value}
          text={fileInput.value}
          change={setFileInput}
          placeholder="Escolha uma lista com os seus produtos"
          accept=".xls,.xlsx,.csv"
        />
        <AddMore />
        <RemoveItem />
        <Submit text="SALVAR"/>
      </Form>
    </>
  )
}

export default Login;
