import { useState } from "react";
import Image from "next/image";
import styles from "./topstories.module.scss";
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
  const [backgroundColors, setBackgroundColors] = useState([]);
  const [foregroundColors, setForegroundColors] = useState([]);

  const showTopStories = () => {
    if (stories === undefined || stories.items === undefined) return;

    return stories.items.map((story, i) => {
      let dateString = story.timestamp;
      dateString = new Date(dateString).toGMTString();
      dateString = dateString.split(" ").slice(0, 4).join(" ");

      const bgColors = [...backgroundColors];
      const fgColors = [...foregroundColors];

      return (
        <label key={i}>
          <div
            className={
              styles.topStoriesList + " " + bgColors[i] + " " + fgColors[i]
            }
          >
            <input
              onChange={(e) => {
                onCheckStory(e);
                if (e.target.checked) {
                  bgColors[i] = styles.selectedBgColor;
                  fgColors[i] = styles.selectedTextColor;
                } else {
                  bgColors[i] = styles.notSelectedBgColor;
                  fgColors[i] = styles.notSelectedTextColor;
                }

                setBackgroundColors(bgColors);
                setForegroundColors(fgColors);
                setIsDisabled(selectedStories.length <= 0);
              }}
              data-title={story.title}
              type="checkbox"
            />
            <div className={styles.storiesContainer}>
              <div className={styles.storyContent}>
                {story["og-image"] && (
                  <Image
                    src={story["og-image"]}
                    alt={story.title}
                    width="800px"
                    height="456.8px"
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
                            <Image
                              src={item["og-image"]}
                              alt={item.title}
                              width={300}
                              height={200}
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
