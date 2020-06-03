import React from "react";
import UserCreate from "./UserCreate";
import LanguageContext from "../contexts/LanguageContext";

class App extends React.Component {
  state = { language: "english" };

  onLanguageChanged = (language) => {
    this.setState({ language });
  };

  render() {
    return (
      <div className="ui container">
        <div>
          Select a language:
          <i
            className="flag us"
            onClick={() => this.onLanguageChanged("english")}
          />
          <i
            className="flag nl"
            onClick={() => this.onLanguageChanged("dutch")}
          />
        </div>
        <LanguageContext.Provider value={this.state.language}> 
          <UserCreate />
        </LanguageContext.Provider>
      </div>
    );
  }
}

export default App;
