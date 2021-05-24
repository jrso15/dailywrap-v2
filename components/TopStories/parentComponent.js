import { useState } from "react";
import getTopStories from "../../api/api";
import TopStories from "./topstories";
import TextEditor from "../TextEditor/TextEditor";
import GeneratedUrl from "../GeneratedUrl/GeneratedUrl";
import saveNewsletter from "../../helpers/newsletters.js";

const ParentComponent = () => {
  const [showTopStories, setShowTopStories] = useState(true);
  const [showSelectionBox, setShowSelectionBox] = useState(false);
  const [showEditor, setShowEditor] = useState(false);
  const [showGeneratedUrl, setShowGeneratedUrl] = useState(false);
  const [selectedStories, setSelectedStories] = useState([]);
  const [topStories, setTopStories] = useState([]);
  const [selectedUrls, setSelectedUrls] = useState([]);
  const [uniqueId, setUniqueId] = useState("");

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

    const urls = stories.map((story) => {
      return story.url;
    });

    setSelectedStories(stories);
    setSelectedUrls(urls);

    console.log(selectedUrls);
  };

  const handleGetTopStories = () => {
    getStories();
    setShowSelectionBox(true);
  };

  const handleNext = async () => {
    setShowEditor(true);
    setShowTopStories(false);
  };

  const handleSubmitEditor = async (e, text) => {
    const id = Date.now().toString(36);
    setUniqueId(id);

    const data = {
      requestor: "Rose",
      requestor_name: "Rose",
      links: selectedUrls,
      status: "pending",
      body_text: text,
      threads: id,
      spaces: "",
    };

    console.log(data);

    const response = await saveNewsletter(data);
    if (response === null) {
      console.log("Error: Unable to save to firebase!");
      return;
    }

    setShowEditor(false);
    setShowTopStories(false);
    setShowGeneratedUrl(true);
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
        <TextEditor
          selectedStories={selectedStories}
          onClickSubmit={handleSubmitEditor}
        />
      ) : showGeneratedUrl ? (
        <GeneratedUrl id={uniqueId} />
      ) : null}
    </section>
  );
};

export default ParentComponent;
