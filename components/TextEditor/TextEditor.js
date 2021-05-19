import React from "react";
import Editor, { buttonList } from "suneditor-react";
import "suneditor/dist/css/suneditor.min.css";
import styles from "./TextEditor.module.scss";
import utilStyles from "../../styles/utils.module.scss";

const TextEditor = ({ stories }) => {
  return (
    <div className={styles.editorContainer}>
      <p>Please input body text here:</p>
      <Editor
        showToolbar={true}
        enableToolbar={true}
        setOptions={{
          height: 800,
        }}
        setContents={stories}
      />
      <div className={styles.btnWrapper}>
        <button className={utilStyles.btnSubmit} onClick={null}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default TextEditor;
