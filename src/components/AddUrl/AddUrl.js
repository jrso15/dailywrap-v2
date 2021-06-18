import { useState } from "react";
import styles from "./AddUrl.module.scss";

const AddUrl = ({
  addUrls,
  onInputChange,
  onRemoveClick,
  onAddClick,
  onCancelAddUrl,
}) => {
  const [showTextBox, setShowTextBox] = useState(
    addUrls.length > 0 || addUrls[0].url !== ""
  );
  const [hideContainer, setHideContainer] = useState(
    addUrls.length <= 1 && addUrls[0].url === ""
  );

  return (
    <div className={styles.addUrlContainer}>
      <div className={styles.title}>
        <p> Add stories via URL</p>
        <button
          className={styles.btnAdd}
          onClick={() => {
            setShowTextBox(true);
            setHideContainer(false);
          }}
        >
          <img
            src="https://us-central1-rapplerinternal.cloudfunctions.net/dailywrap-v2-dev/images/plus-icon.png"
            width="100%"
            height={15}
          />
        </button>
      </div>

      {addUrls.map((x, i) => {
        return (
          <div key={i}>
            {showTextBox && !hideContainer && (
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
            )}
          </div>
        );
      })}
      {showTextBox && !hideContainer && (
        <button
          onClick={() => {
            if (showTextBox) {
              setShowTextBox(false);
              setHideContainer;
              onCancelAddUrl();
            }
          }}
          className={styles.btnCancel}
        >
          Cancel
        </button>
      )}
    </div>
  );
};

export default AddUrl;
