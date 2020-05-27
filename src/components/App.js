import React from "react";
import SearchBar from "./SearchBar";
import youtube from "../apis/youtube";
import VideoList from './VideoList';

const KEY = "AIzaSyCDLrozBB45ulEAEswg_qSADZ0vYXZHi6c";

class App extends React.Component {
  state = { videos: [] };

  onTermSubmit = async (term) => {
    const reponse = await youtube.get("search", {
      params: {
        q: term,
        part: "snippet",
        maxResult: 5,
        key: KEY,
      },
    });
    this.setState({ videos: reponse.data.items })
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onTermSubmit} />
        <VideoList videos={this.state.videos}/>
      </div>
    );
  }
}

export default App;
