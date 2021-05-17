import React from "react";
import Editor, { buttonList } from "suneditor-react";
import "suneditor/dist/css/suneditor.min.css";

const TextEditor = ({ stories }) => {
  console.log(stories);
  return (
    <Editor
      showToolbar={true}
      enableToolbar={true}
      setOptions={{
        height: 500,
      }}
      setContents={stories}
    />
  );
};

export default TextEditor;
