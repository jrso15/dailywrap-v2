import dynamic from "next/dynamic";
import { useState, useEffect } from "react";
import getMetadata from "../../helpers/articles";
import styles from "./TextEditor.module.scss";
import utilStyles from "../../styles/utils.module.scss";
import "suneditor/dist/css/suneditor.min.css";

const SunEditor = dynamic(() => import("suneditor-react"), {
  ssr: false,
});

const TextEditor = ({ selectedStories, onClickSubmit, onClickBack }) => {
  const [text, setText] = useState("");
  const [storiesDb, setStoriesDb] = useState([]);
  const URL =
    "https://us-central1-rapplerinternal.cloudfunctions.net/dailywrap-v2-dev/preview";

  useEffect(() => {
    console.log(storiesDb);
    localStorage.setItem("stories", storiesDb);
  }, [storiesDb]);

  const handleChange = (content) => {
    setText(content);
  };

  const handlePreview = async () => {
    const stories = await getMetadata(selectedStories);
    const data = { stories, text };
    setStoriesDb(JSON.stringify(data));
    window.open(URL, "_blank", "noopener noreferrer");
  };

  return (
    <div className={styles.editorContainer}>
      <div className={styles.editorHeader}>
        <p>Please input body text here:</p>

        <button className={styles.previewLink} onClick={handlePreview}>
          Preview
        </button>
      </div>
      <SunEditor
        showToolbar={true}
        enableToolbar={true}
        setOptions={{
          height: 500,
        }}
        setDefaultStyle="font-family: Roboto Condensed; font-size: 20px;"
        onChange={handleChange}
      />
      <div className={styles.btnWrapper}>
        <button className={utilStyles.btnSubmit} onClick={onClickBack}>
          Back
        </button>

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
