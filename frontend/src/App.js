import React, { Component } from 'react';
import './App.css';
import Header from "./componentes/header/header";
import ChatHistory from "./componentes/chatHistory/chatHistory";
import ChatInput from "./componentes/chatInput";
import { connect, sendMsg,  } from './api';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      chatHistory: []
    }
  }

  componentDidMount() {
    connect((msg) => {
      console.log("New Message")
      this.setState(prevState => ({
        chatHistory: [...prevState.chatHistory, msg]
      }))
      console.log(this.state);
    });
  }

  send(event) {
    if (event.keyCode === 13) {
      sendMsg(event.target.value);
      event.target.value = "";
    }
  }

  render() {
    return (
      <div className="App">
        <Header />
        <ChatHistory chatHistory={this.state.chatHistory} />
        <ChatInput send={this.send} />
      </div>
    );
  }
}

export default App;
