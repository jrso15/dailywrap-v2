import React, { useState } from "react";
import dynamic from "next/dynamic";
import "suneditor/dist/css/suneditor.min.css";
import styles from "./TextEditor.module.scss";
import utilStyles from "../../styles/utils.module.scss";

const SunEditor = dynamic(() => import("suneditor-react"), {
  ssr: false,
});

const TextEditor = ({ onClickSubmit }) => {
  const [text, setText] = useState("");

  const handleChange = (content) => {
    setText(content);
  };

  const onClickPreview = () => {
    console.log("test");
    const newWindow = window.open(
      "/preview-template",
      "_blank",
      "noopener,noreferrer"
    );
    if (newWindow) newWindow.opener = null;
  };

  return (
    <div className={styles.editorContainer}>
      <div className={styles.editorHeader}>
        <p>Please input body text here:</p>
        <a
          className={styles.previewLink}
          target="_blank"
          href="/preview-template"
          rel="noopener noreferrer"
        >
          Preview
        </a>
      </div>

      <SunEditor
        showToolbar={true}
        enableToolbar={true}
        setOptions={{
          height: 500,
        }}
        onChange={handleChange}
      />

      <div className={styles.btnWrapper}>
        <button
          className={utilStyles.btnSubmit}
          onClick={(e) => {
            onClickSubmit(e, text);
          }}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default TextEditor;
