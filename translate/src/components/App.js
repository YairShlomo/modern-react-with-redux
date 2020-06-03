import React from "react";

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
        {this.state.language}
      </div>
    );
  }
}

export default App;
