import styles from "./topstories.module.scss";
import utilStyles from "../../styles/utils.module.scss";
import Image from "next/image";

const TopStories = ({
  stories,
  selectedStories,
  showSelectionBox,
  onClickGetTopStories,
  onCheckStory,
  onClickNext,
}) => {
  const showTopStories = () => {
    if (stories === undefined || stories.items === undefined) return;

    return stories.items.map((story, i) => {
      let dateString = story.timestamp;
      dateString = new Date(dateString).toUTCString();
      dateString = dateString.split(" ").slice(0, 5).join(" ");

      return (
        <label key={i}>
          <div className={styles.topStoriesList}>
            <input
              onChange={onCheckStory}
              data-title={story.title}
              type="checkbox"
            />
            <div className={styles.storiesContainer}>
              <div className={styles.storyContent}>
                {story["og-image"] && (
                  <Image
                    src={story["og-image"]}
                    alt="Picture of the author"
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
                    <span>URL</span>: <a href={story.url}>{story.url}</a>
                  </li>
                  <li>
                    <span>Time</span>: {dateString}
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
        <h4 className={styles.title}>
          Hello editor want to know the top stories for today?
        </h4>
        <button className={utilStyles.btnSubmit} onClick={onClickGetTopStories}>
          Top Stories
        </button>
      </div>

      {showSelectionBox ? (
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
                {selectedStories.map((item, i) => {
                  return (
                    <a href={item.url} key={i}>
                      <div className={styles.topStoriesList}>
                        <div className={styles.storyContent}>
                          {item["og-image"] && (
                            <Image
                              src={item["og-image"]}
                              alt="Picture of the author"
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
            <button className={utilStyles.btnSubmit} onClick={onClickNext}>
              Next
            </button>
          </div>
        </div>
      ) : null}
    </section>
  );
};

export default TopStories;
