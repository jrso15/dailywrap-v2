import React, { useRef, useState } from "react";
import styles from "./GeneratedUrl.module.scss";

const GeneratedUrl = ({ id }) => {
  const [copySuccess, setCopySuccess] = useState("");
  const textAreaRef = useRef(null);
  const URL = `https://us-central1-rapplerinternal.cloudfunctions.net/dailywrap-dev-webhookmc?threads=${id}`;

  const copyToClipboard = (e) => {
    textAreaRef.current.select();
    document.execCommand("copy");
    e.target.focus();
    setCopySuccess("Copied!");
  };

  return (
    <div className={styles.generatedUrlContainer}>
      <p>Okay! We're all set! To generate html please go to this link:</p>
      <div className={styles.urlContainer}>
        <input
          className={styles.inputUrl}
          ref={textAreaRef}
          value={URL}
          readOnly
        />
        <button className={styles.btnCopy} onClick={copyToClipboard}>
          <img src="/images/icon-w.png" />
        </button>
      </div>
      <div className={styles.success}> {copySuccess} </div>
    </div>
  );
};

export default GeneratedUrl;
