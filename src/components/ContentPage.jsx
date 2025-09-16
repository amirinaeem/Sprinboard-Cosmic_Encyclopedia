import React from "react";
import NavigateBackButton from "./NavigateBackButton";

function ContentPage({ object }) {
  return (
    <div className="page">
      <h2>{object.title}</h2>
      <p>{object.content}</p>
      <NavigateBackButton />
    </div>
  );
}

export default ContentPage;
