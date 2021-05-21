import React from "react";
import Editor, { buttonList } from "suneditor-react";
import "suneditor/dist/css/suneditor.min.css";
import styles from "./TextEditor.module.scss";
import utilStyles from "../../styles/utils.module.scss";

const TextEditor = ({ stories, onClickSubmit }) => {
  console.log(onClickSubmit);
  return (
    <div className={styles.editorContainer}>
      <p>Please input body text here:</p>
      <Editor
        showToolbar={true}
        enableToolbar={true}
        setOptions={{
          height: 500,
        }}
        setContents={stories}
      />
      <div className={styles.btnWrapper}>
        <button className={utilStyles.btnSubmit} onClick={onClickSubmit}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default TextEditor;
