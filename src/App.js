import React from "react";
import SearchBar from "./components/SearchBar";
const App = () => {
  const onSearchSubmit = (term) => {
    console.log(term);
  };

  return (
    <div className="ui container" style={{ marginTop: "20px" }}>
      <SearchBar onSubmit={onSearchSubmit} />
    </div>
  );
};

export default App;
