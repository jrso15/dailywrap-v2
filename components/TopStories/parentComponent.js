import { getTopStories } from "../../api/api";
import { generateTemplatedStories } from "../TextEditor/DailyWrapTemplate";
import { getMetadata } from "../../helpers/articles";

import { useState } from "react";
import TopStories from "./topstories";
import TextEditor from "../TextEditor/TextEditor";
// import LastComponent from "...";

const ParentComponent = () => {
  const [showTopStories, setShowTopStories] = useState(true);
  const [showSelectionBox, setShowSelectionBox] = useState(false);
  const [showEditor, setShowEditor] = useState(false);
  const [selectedStories, setSelectedStories] = useState([]);
  const [topStories, setTopStories] = useState([]);
  const [templatedStories, setTemplatedStories] = useState("");

  const getStories = async () => {
    const stories = await getTopStories();
    setTopStories(stories);
  };

  const handleSelectedStories = (event) => {
    const isChecked = event.target.checked;
    const title = event.target.getAttribute("data-title");
    const stories = [...selectedStories];
    const story = topStories.items.find((x) => x.title === title);

    if (isChecked) {
      stories.push(story);
    } else {
      stories.splice(stories.indexOf(story), 1);
    }

    setSelectedStories(stories);
  };

  const handleGetTopStories = () => {
    getStories();
    setShowSelectionBox(true);
  };

  const handleNext = async () => {
    const metadata = await getMetadata(selectedStories);

    const html = generateTemplatedStories(metadata);
    setTemplatedStories(html);

    setShowEditor(true);
    setShowTopStories(false);
  };

  const handleSubmitEditor = () => {
    setShowEditor(false);
    setShowTopStories(false);
  };

  return (
    <section>
      {showTopStories ? (
        <TopStories
          stories={topStories}
          showSelectionBox={showSelectionBox}
          selectedStories={selectedStories}
          onClickGetTopStories={(e) => handleGetTopStories(e)}
          onCheckStory={(e) => handleSelectedStories(e)}
          onClickNext={(e) => handleNext(e)}
        />
      ) : showEditor ? (
        <TextEditor stories={templatedStories} />
      ) : (
        LastComponent
      )}
    </section>
  );
};

export default ParentComponent;
