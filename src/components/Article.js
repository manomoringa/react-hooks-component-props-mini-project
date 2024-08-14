import React from 'react';

function Article({ title, date, preview }) {
  // Provide default values for the properties
  const articleTitle = title || "Untitled";
  const articleDate = date || "January 1, 1970";
  const articlePreview = preview || "No preview available";

  return (
    <article>
      <h3>{articleTitle}</h3>
      <small>{articleDate}</small>
      <p>{articlePreview}</p>
    </article>
  );
}

export default Article;