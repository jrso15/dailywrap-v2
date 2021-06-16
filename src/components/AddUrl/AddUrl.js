import { useState } from "react";
import styles from "./AddUrl.module.scss";

const AddUrl = ({ addUrls, onInputChange, onRemoveClick, onAddClick }) => {
  const [showTextBox, setShowTextBox] = useState(false);

  return (
    <div className={styles.addUrlContainer}>
      <div className={styles.title}>
        <p> Add stories via URL</p>
        <button className={styles.btnAdd} onClick={setShowTextBox}>
          <img src="/images/plus-icon.png" width="100%" height={15} />
        </button>
      </div>

      {addUrls.map((x, i) => {
        return (
          <div key={i}>
            {showTextBox ? (
              <div className={styles.inputContainer}>
                <input
                  name="url"
                  placeholder="Enter Url"
                  value={x.url}
                  onChange={(e) => onInputChange(e, i)}
                  className={styles.textBox}
                />
                <div className="btn-box">
                  {addUrls.length !== 1 && (
                    <button
                      className="mr10"
                      onClick={() => onRemoveClick(i)}
                      className={styles.btn}
                    >
                      Remove
                    </button>
                  )}
                  {addUrls.length - 1 === i && (
                    <button onClick={onAddClick} className={styles.btn}>
                      Add
                    </button>
                  )}
                </div>
              </div>
            ) : null}
          </div>
        );
      })}
    </div>
  );
};

export default AddUrl;
