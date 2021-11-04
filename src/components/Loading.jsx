import React from "react";

// CSS

import "../css/loading.css";

export default function Loading({ loadingMessage }) {
  return (
    <div className="loading-wp">
      <div class="cloud-icon cloudy">
        <div class="cloud"></div>
        <div class="cloud"></div>
      </div>
      <h1>{loadingMessage}</h1>
    </div>
  );
}
