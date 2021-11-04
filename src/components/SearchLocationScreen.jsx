import React from "react";

// CSS
import "../css/searchLocationScreen.css";

// Components
import SearchInput from "./SearchInput";

export default function SearchLocationScreen(props) {
  return (
    <main className="searchLocationContainer">
      <h1>Welcome!</h1>
      <h3>Check the current and forecast weather.</h3>

      <SearchInput {...props} />
    </main>
  );
}
