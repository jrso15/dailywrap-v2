import { useState } from "react";
import getTopStories from "../api/api";
import TopStories from "./TopStories/TopStories";
import TextEditor from "./TextEditor/TextEditor";
import GeneratedUrl from "./GeneratedUrl/GeneratedUrl";
import saveNewsletter from "../helpers/newsletters.js";

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

    // Append each item in array a new isSelected prop
    const items = stories.items.map((item) => {
      const data = { ...item, isSelected: false };
      return data;
    });

    // Overwrite items array
    stories.items = items;

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
      const selectedStory = stories.find((x) => x.title === title);
      stories.splice(stories.indexOf(selectedStory), 1);
    }

    const urls = stories.map((story) => {
      return story.url;
    });

    setSelectedStories(stories);
    setSelectedUrls(urls);
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

    const response = await saveNewsletter(data);
    if (response === null) {
      console.log("Error: Unable to save to firebase!");
      return;
    }

    setShowEditor(false);
    setShowTopStories(false);
    setShowGeneratedUrl(true);
  };

  const handleBack = async () => {
    const stories = [...selectedStories];
    const list = { ...topStories };

    // Pre-select all top stories that were selected before
    const items = list.items.map((item) => {
      const isSelected =
        stories.find((x) => x.title === item.title) !== undefined;
      const data = { ...item, isSelected: isSelected };

      return data;
    });

    list.items = items;
    setTopStories(list);
    setSelectedStories(stories);

    setShowTopStories(true);
    setShowEditor(false);
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
          onClickBack={handleBack}
        />
      ) : showGeneratedUrl ? (
        <GeneratedUrl id={uniqueId} />
      ) : null}
    </section>
  );
};

export default ParentComponent;
