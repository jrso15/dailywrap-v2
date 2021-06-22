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
  const [addUrls, setAddUrls] = useState([{ url: "" }]);

  const getStories = async () => {
    const stories = await getTopStories();

    const items = stories.items.map((item) => {
      const data = { ...item, isSelected: false };
      return data;
    });

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
    console.log(stories);
  };

  const handleGetTopStories = () => {
    getStories();
    setShowSelectionBox(true);
  };

  const handleNext = async () => {
    setShowEditor(true);
    setShowTopStories(false);
  };

  const handleBack = async () => {
    const stories = [...selectedStories];
    const list = { ...topStories };

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

  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const urlList = [...addUrls];
    urlList[index][name] = value;
    setAddUrls(urlList);
    console.log(urlList);
  };

  const handleRemoveClick = (index) => {
    const urlList = [...addUrls];
    urlList.splice(index, 1);
    setAddUrls(urlList);
  };

  const handleAddClick = () => {
    setAddUrls([...addUrls, { url: "" }]);
  };

  const handleCancelAddUrl = () => {
    setAddUrls([{ url: "" }]);
  };

  const handleSubmitEditor = async (e, text) => {
    const id = Date.now().toString(36);
    setUniqueId(id);

    const links = [...selectedUrls];
    addUrls.forEach((item) => {
      if (item.url !== "") {
        links.push(item.url);
      }
    });

    const data = {
      requestor: "Editor",
      requestor_name: "Editor",
      links: links,
      status: "pending",
      body_text: text,
      threads: id,
      spaces: "",
    };

    console.log("data:", data);

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
          addUrls={addUrls}
          onClickGetTopStories={(e) => handleGetTopStories(e)}
          onCheckStory={(e) => handleSelectedStories(e)}
          onClickNext={(e) => handleNext(e)}
          onInputChange={handleInputChange}
          onRemoveClick={handleRemoveClick}
          onAddClick={handleAddClick}
          onCancelAddUrl={handleCancelAddUrl}
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
