import React from "react";

// Components
import SearchInput from "./SearchInput";

export default function SearchLocationScreen(props) {
  return (
    <div>
      <h2>Welcome!</h2>
      <SearchInput {...props} />
    </div>
  );
}
