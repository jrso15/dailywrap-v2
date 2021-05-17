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
    console.log(stories);

    if (stories === undefined || stories.items === undefined) return;

    return stories.items.map((story, i) => (
      <label key={i}>
        <div className={styles.topStoriesList}>
          <input
            onChange={onCheckStory}
            data-title={story.title}
            type="checkbox"
          />
          <div className={styles.storiesContainer}>
            <div className={styles.storyContent}>
              <Image
                src={story["og-image"]}
                alt={story.description}
                width={300}
                height={200}
                className={styles.image}
              />
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
                  <span>Time</span>: {story.timestamp}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </label>
    ));
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
                    <div className={styles.topStoriesList} key={i}>
                      <Image
                        src={item["og-image"]}
                        alt="Picture of the author"
                        width={300}
                        height={200}
                        className={styles.image}
                      />
                      <a className={styles.selected} href={item.url}>
                        {item.title}
                      </a>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <button className={utilStyles.btnSubmit} onClick={onClickNext}>
            Next
          </button>
        </div>
      ) : null}
    </section>
  );
};

export default TopStories;
