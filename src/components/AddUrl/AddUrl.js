import { useState } from "react";
import styles from "./AddUrl.module.scss";

const AddUrl = () => {
  const [showTextBox, setShowTextBox] = useState(false);
  const [inputList, setInputList] = useState([{ url: "" }]);

  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...inputList];
    list[index][name] = value;
    setInputList(list);
  };

  const handleRemoveClick = (index) => {
    const list = [...inputList];
    list.splice(index, 1);
    setInputList(list);
  };

  const handleAddClick = () => {
    setInputList([...inputList, { url: "" }]);
  };

  return (
    <div className={styles.addUrlContainer}>
      <div className={styles.title}>
        <p> Add stories via URL</p>
        <button className={styles.btnAdd} onClick={setShowTextBox}>
          <img src="/images/plus-icon.png" width="100%" height={20} />
        </button>
      </div>

      {inputList.map((x, i) => {
        return (
          <div key={i}>
            {showTextBox ? (
              <div className={styles.inputContainer}>
                <input
                  name="url"
                  placeholder="Enter Url"
                  value={x.url}
                  onChange={(e) => handleInputChange(e, i)}
                  className={styles.textBox}
                />
                <div className="btn-box">
                  {inputList.length !== 1 && (
                    <button
                      className="mr10"
                      onClick={() => handleRemoveClick(i)}
                      className={styles.btn}
                    >
                      Remove
                    </button>
                  )}
                  {inputList.length - 1 === i && (
                    <button onClick={handleAddClick} className={styles.btn}>
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
