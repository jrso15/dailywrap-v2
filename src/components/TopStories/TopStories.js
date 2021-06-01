import { useState } from "react";
import styles from "./TopStories.module.scss";
import utilStyles from "../../styles/utils.module.scss";

const TopStories = ({
  stories,
  selectedStories,
  showSelectionBox,
  onClickGetTopStories,
  onCheckStory,
  onClickNext,
}) => {
  const [isDisabled, setIsDisabled] = useState(true);

  const showTopStories = () => {
    if (stories === undefined || stories.items === undefined) return;

    return stories.items.map((story, i) => {
      let dateString = story.timestamp;
      dateString = new Date(dateString).toGMTString();
      dateString = dateString.split(" ").slice(0, 4).join(" ");

      return (
        <label key={i}>
          <div
            className={`${styles.topStoriesList} ${
              story.isSelected
                ? `${styles.selectedBgColor} ${styles.selectedTextColor}`
                : `${styles.notSelectedBgColor} ${styles.notSelectedTextColor}`
            }`}
          >
            <input
              onChange={(e) => {
                if (e.target.checked) {
                  story.isSelected = true;
                } else {
                  story.isSelected = false;
                }

                onCheckStory(e);

                setIsDisabled(selectedStories.length <= 0);
              }}
              data-title={story.title}
              type="checkbox"
              checked={story.isSelected}
            />
            <div className={styles.storiesContainer}>
              <div className={styles.storyContent}>
                {story["og-image"] && (
                  <img
                    src={story["og-image"]}
                    alt={story.title}
                    width="200"
                    height="100"
                    className={styles.image}
                  />
                )}
              </div>
              <div className={styles.storyContent}>
                <ul>
                  <li>
                    <span>Title</span>: {story.title}
                  </li>
                  <li>
                    <span>URL</span>:{" "}
                    <a href={story.url} target="_blank">
                      {story.url}
                    </a>
                  </li>
                  <li>
                    <span>Date</span>: {dateString}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </label>
      );
    });
  };

  return (
    <section className={styles.dailyWrapContainer}>
      <div className={styles.topStoriesHeader}>
        <h2 className={styles.title}>
          Hello editor want to know the top stories for today?
        </h2>
        <button className={utilStyles.btnSubmit} onClick={onClickGetTopStories}>
          Top Stories
        </button>
      </div>

      {showSelectionBox ? (
        <div className={styles.topStoriesContainer}>
          <p>Please select 10 Top Stories:</p>
          <div className={styles.topStories}>
            <div className={styles.topStoriesWrapper}>
              <div className={styles.topStoriesSelection}>
                <h3 className={styles.titleHeader}>Top Stories</h3>
              </div>
              <div className={styles.topStoriesBody}>{showTopStories()}</div>
            </div>
            <div className={styles.topStoriesWrapper}>
              <div className={styles.topStoriesSelection}>
                <h3 className={styles.titleHeader}>Selected Top Stories</h3>
              </div>
              <div className={styles.topStoriesBody}>
                {selectedStories.map((item, i) => {
                  return (
                    <a href={item.url} key={i} target="_blank">
                      <div className={styles.topStoriesList}>
                        <div className={styles.storyContent}>
                          {item["og-image"] && (
                            <img
                              src={item["og-image"]}
                              alt={item.title}
                              width={250}
                              height={150}
                              className={styles.image}
                            />
                          )}
                        </div>
                        <div className={styles.storyContent}>
                          <h3 className={styles.selected}>{item.title}</h3>
                        </div>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
          <div className={styles.btnWrapper}>
            <button
              disabled={isDisabled}
              className={utilStyles.btnSubmit}
              onClick={onClickNext}
            >
              Next
            </button>
          </div>
        </div>
      ) : null}
    </section>
  );
};

export default TopStories;
