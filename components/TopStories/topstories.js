import { useState } from "react";

import styles from "./topstories.module.scss";
import utilStyles from "../../styles/utils.module.scss";

const TopStories = () => {
  const [shouldShow, setShouldShow] = useState(false);
  const [selectedStories, setSelectedStories] = useState([]);
  const [topStories, setTopStories] = useState([
    { _id: "5d7c7653427efd44002ertr0e", name: "sample1", url: "" },
    { _id: "5d7c7653427efd44002egerr0r", name: "sample2", url: "" },
    { _id: "5d7c7653427efd440020re0t", name: "sample3", url: "" },
    { _id: "5d7c7653427efd4400gt", name: "sample4", url: "" },
    { _id: "5d7c7653427efd440rrtrb020re0t", name: "sample5", url: "" },
    { _id: "5d7c7653427efd440020rugge0t", name: "sample6", url: "" },
    { _id: "5d7c7653427efd440ss020gfgre0t", name: "sample7", url: "" },
    { _id: "5d7c7653427efd440020ggreg0t", name: "sample8", url: "" },
    { _id: "5d7c7653427efd440020re0t", name: "sample9", url: "" },
    { _id: "5d7c7653427efd440020reg0t", name: "sample10", url: "" },
  ]);

  const handleChanged = (event) => {
    const isChecked = event.target.checked;
    const id = event.target.getAttribute("data-id");
    const stories = [...selectedStories];
    const story = topStories.find((x) => x._id === id);

    if (isChecked) {
      stories.push(story);
    } else {
      stories.splice(stories.indexOf(story), 1);
    }

    setSelectedStories(stories);
  };

  const showTopStories = () => {
    return topStories.map((c, i) => (
      <label key={i}>
        <div className={styles.topStoriesList}>
          <input onChange={handleChanged} data-id={c._id} type="checkbox" />
          {c.name}
        </div>
      </label>
    ));
  };

  return (
    <section className={styles.dailyWrapContainer}>
      <div className={styles.topStoriesHeader}>
        <h4 className={styles.title}>
          {" "}
          Hello editor want to know the top stories for today?{" "}
        </h4>
        <button
          className={utilStyles.btnSubmit}
          onClick={() => setShouldShow(!shouldShow)}
        >
          Top Stories
        </button>
      </div>
      {shouldShow ? (
        <div className={styles.topStoriesContainer}>
          <p>Please select 10 top stories:</p>
          <div className={styles.topStories}>
            <div className={styles.topStoriesWrapper}>
              <div className={styles.topStoriesHeader}>
                <h3 className={styles.titleHeader}>Top Stories</h3>
              </div>
              <div className={styles.topStoriesBody}>{showTopStories()}</div>
            </div>
            <div className={styles.topStoriesWrapper}>
              <div className={styles.topStoriesHeader}>
                <h3 className={styles.titleHeader}>Selected top stories</h3>
              </div>
              <div className={styles.topStoriesBody}>
                {selectedStories.map((item) => {
                  return (
                    <div className={styles.topStoriesList} key={item._id}>
                      {item.name}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
};

export default TopStories;
